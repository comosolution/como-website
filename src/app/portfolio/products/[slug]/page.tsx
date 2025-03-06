import { Metadata } from "next";
import React from "react";
import products from "../../../data/portfolio/products.json";
import ProductContent from "../sections/content";

export const metadata: Metadata = {
  title: "Produkte | CoMo Solution GmbH",
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);

  return (
    <main className="flex flex-col items-center gap-24">
      {products
        .filter((product) => product.id === slug)
        .map((product, index) => {
          return <ProductContent key={index} product={product} />;
        })}
    </main>
  );
}
