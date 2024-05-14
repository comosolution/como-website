"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Button from "@/app/components/button";
import { scrollTo } from "../../../utils/utils";
import { Product } from "@/app/types";

export default function ProductContent({ product }: { product: Product }) {
  return (
    <div>
      <header className="flex flex-col items-center gap-2 px-8">
        <Image
          src={`/logos/${product.logo}`}
          alt="Logo"
          width={100}
          height={40}
        />
        <h1 className="text-center">{product.name}</h1>
      </header>
      <div className="flex flex-col py-8">
        <article>
          {product.sub && <h2>{product.sub}</h2>}
          {product.description.map((description, index) => {
            return description.startsWith("- ") ? (
              <ul key={index}>
                <li>{description.substring(2)}</li>
              </ul>
            ) : description.startsWith("# ") ? (
              <h3>{description.substring(2)}</h3>
            ) : index === 0 ? (
              <h5 key={index} className="py-4">
                {description}
              </h5>
            ) : (
              <p key={index}>{description}</p>
            );
          })}
        </article>
        {product.img && (
          <img
            src={`/solutions/${product.img}`}
            alt={product.name}
            className="rounded-2xl"
            width={880}
            style={{
              maxHeight: "400px",
              objectFit: "contain",
            }}
          />
        )}
      </div>
      <div className="flex justify-center gap-4">
        <Button
          type="contact"
          text="Jetzt anfragen"
          icon="arrow"
          onClick={() => scrollTo("contact")}
        />
        <Button
          type="tertiary"
          text="Weitere Produkte entdecken"
          href="/portfolio/products"
        />
      </div>
    </div>
  );
}
