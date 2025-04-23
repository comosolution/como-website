"use client";
import { card, defaultPadding } from "@/app/style/style";
import { Button } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import products from "../../data/portfolio/products.json";

export default function Page() {
  return (
    <main className={`flex flex-col items-center gap-8 ${defaultPadding}`}>
      <h2 className="text-center">
        Diese Produkte haben wir für Sie im Angebot
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-16">
        {products.map((product, index) => {
          return (
            <Link
              key={index}
              href={`/portfolio/products/${product.id}`}
              className="tile"
            >
              <div
                className={`productTile lg:min-h-[360px] flex flex-col justify-between items-center gap-2 pt-4 ${card} cursor-pointer`}
              >
                <Image
                  src={`/logos/${product.logo}`}
                  alt="Logo"
                  width={100}
                  height={40}
                  className="inverted"
                />
                <h4 className="text-center">{product.name}</h4>
                <Image
                  src={`/products/${product.img}`}
                  alt="Product Thumbnail"
                  width={664}
                  height={424}
                  className="productImg rounded-b-2xl"
                />
              </div>
            </Link>
          );
        })}
        <div className="flex items-center justify-center">
          <Button
            variant="transparent"
            component={Link}
            href="/portfolio"
            leftSection={<IconChevronLeft size={16} />}
          >
            Zurück zum Portfolio
          </Button>
        </div>
      </div>
    </main>
  );
}
