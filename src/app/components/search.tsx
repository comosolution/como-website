"use client";
import { ChangeEvent, useEffect, useState } from "react";
import lunr from "lunr";
import branches from "../data/portfolio/branches.json";
import products from "../data/portfolio/products.json";
import services from "../data/portfolio/services.json";
import Link from "next/link";

export default function Search() {
  const data = [...branches, ...products, ...services];
  const [search, setSearch] = useState("");
  const [searchIndex, setSearchIndex] = useState<lunr.Index>();

  const portfolioType: {
    [key: string]: string;
  } = {
    services: "Dienstleistung",
    products: "Produkt",
    branches: "Branche",
  };

  useEffect(() => {
    const idx = lunr(function () {
      this.ref("id");
      this.field("name", { boost: 10 });
      this.field("title", { boost: 5 });
      this.field("sub");
      this.field("description");
      this.field("conditions");
      this.field("knowledge");
      this.field("outro");
      this.field("keywords", { boost: 5 });
      this.field("additional");

      data.forEach((item) => {
        this.add(item);
      }, this);
    });
    setSearchIndex(idx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex gap-2 justify-between px-4 py-2 border-solid border border-orange-500 shadow-xl shadow-orange-500/20 rounded-full backdrop-blur-sm bg-neutral-900/70">
        <input
          type="search"
          name="search"
          placeholder="z.B. BlackBerry, Entwicklung, Sport"
          className="w-full ghost"
          onChange={(e: ChangeEvent<any>) => {
            const searchTerm = e.target.value.replaceAll("-", " ");
            setSearch(searchTerm.toLowerCase().trim());
          }}
        />
      </div>
      <div className="flex flex-wrap gap-2 transition-all">
        {search &&
          searchIndex?.search(`${search} ${search}*`).map((item, index) =>
            data
              .filter((d) => d.id === item.ref)
              .map((d) => (
                <Link
                  key={index}
                  href={`/portfolio/${d.type}/${d.id}`}
                  className="tile px-4 py-2 rounded-full border-solid border border-orange-500 transition-all hover:bg-orange-600/20"
                >
                  {portfolioType[d.type]}:{" "}
                  <b className="text-orange-500">
                    {d.additional && `${d.additional} `}
                    {d.name}
                  </b>
                </Link>
              ))
          )}
      </div>
    </>
  );
}
