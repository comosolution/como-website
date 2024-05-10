"use client";
import Image from "next/image";
import products from "../../data/portfolio/products.json";
import { Slide } from "react-awesome-reveal";
import { fourCols } from "@/app/style/style";
import Button from "@/app/components/button";

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-8 p-8">
      <h3 className="text-center">
        Diese Produkte haben wir für Sie im Angebot
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-16">
        {products.map((product, index) => {
          return (
            <Slide key={index} direction="up" delay={index * 50} triggerOnce>
              <div className="lg:min-h-[340px] flex flex-col justify-between items-center gap-2 pt-4 rounded-2xl backdrop-blur-sm bg-neutral-900/70 ring-1 ring-white/10 shadow-2xl  transition-all hover:bg-neutral-900 cursor-pointer">
                <Image
                  src={`/logos/${product.logo}`}
                  alt="Logo"
                  width={100}
                  height={40}
                />
                <h4 className="text-center">{product.name}</h4>
                <Image
                  src={`/products/${product.img}`}
                  alt="Product Thumbnail"
                  width={664}
                  height={424}
                  className="rounded-b-2xl"
                />
              </div>
            </Slide>
          );
        })}
      </div>
      <Button type="tertiary" text="Zurück zur Übersicht" href="/portfolio" />
    </main>
  );
}
