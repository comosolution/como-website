import products from "../../../data/portfolio/products.json";
import { Metadata } from "next";
import ProductContent from "../sections/content";

export const metadata: Metadata = {
  title: "Produkte | CoMo Solution GmbH",
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex flex-col items-center gap-24 px-16">
      {products
        .filter((product) => product.id === params.slug)
        .map((product, index) => {
          return <ProductContent key={index} product={product} />;
        })}
    </main>
  );
}
