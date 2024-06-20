"use client";
import Image from "next/image";
import products from "../../data/portfolio/products.json";
import { Slide } from "react-awesome-reveal";
import Button from "@/app/components/button";
import Link from "next/link";
import { card } from "@/app/style/style";

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-8 px-8">
      <h3 className="text-center">
        Diese Produkte haben wir für Sie im Angebot
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-16">
        {products.map((product, index) => {
          return (
            <Slide key={index} direction="up" delay={index * 50} triggerOnce>
              <Link href={`/portfolio/products/${product.id}`} className="tile">
                <div
                  className={`productTile lg:min-h-[360px] flex flex-col justify-between items-center gap-2 pt-4 ${card} cursor-pointer`}
                >
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
                    className="productImg rounded-b-2xl"
                  />
                </div>
              </Link>
            </Slide>
          );
        })}
        <div className="flex items-center justify-center">
          <Button
            type="tertiary"
            text="Zurück zum Portfolio"
            href="/portfolio"
          />
        </div>
      </div>
    </main>
  );
}
