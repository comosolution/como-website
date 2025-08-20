"use client";
import Accordion from "@/app/components/accordion";
/* eslint-disable @next/next/no-img-element */
import ContactButton from "@/app/components/contactButton";
import { twoCols } from "@/app/style/style";
import { Product } from "@/app/types";
import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function ProductContent({ product }: { product: Product }) {
  return (
    <div>
      <header className="flex flex-col items-center gap-2 px-8">
        <Image
          src={`/logos/${product.logo}`}
          alt="Logo"
          width={160}
          height={64}
        />
        <h1 className="text-center">{product.name}</h1>
      </header>
      <div className="flex flex-col gap-4 py-8">
        {product.sub && <h2 className="text-center py-4">{product.sub}</h2>}
        {product.image ? (
          <div className={`${twoCols}`}>
            <div className="relative w-full aspect-square overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <Image
                src={`/images/${product.image}`}
                alt="Product Image"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <h5 className="muted px-8">{product.intro}</h5>
          </div>
        ) : (
          <article className="mx-auto">
            <h5 className="py-4">{product.intro}</h5>
          </article>
        )}
        <article className="mx-auto">
          {product.description.map((description, index) => {
            return description.startsWith("- ") ? (
              <ul key={index}>
                <li>{description.substring(2)}</li>
              </ul>
            ) : description.startsWith("# ") ? (
              <h3 key={index}>{description.substring(2)}</h3>
            ) : description.startsWith("[") ? (
              <a
                key={index}
                href={description.replaceAll("]", "").split("|")[1]}
              >
                <p>{description.replaceAll("[", "").split("|")[0]}</p>
              </a>
            ) : description === "CTA" ? (
              <div key={index} className="flex justify-center py-4">
                <ContactButton />
              </div>
            ) : (
              <p key={index}>{description}</p>
            );
          })}
          {product.accordion && (
            <Accordion
              summary={product.accordion.summary}
              details={product.accordion.content}
            />
          )}
          {product.img && (
            <img
              src={`/solutions/${product.img}`}
              alt={product.name}
              width={880}
              style={{
                maxHeight: "400px",
                objectFit: "contain",
              }}
            />
          )}
        </article>
        <div className="flex flex-col items-center md:flex-row md:items-center justify-center gap-4">
          <ContactButton />
          <Button
            variant="transparent"
            component={Link}
            href="/portfolio/products"
          >
            Weitere Produkte entdecken
          </Button>
        </div>
      </div>
    </div>
  );
}
