import { RichTextRenderer } from "@/app/about/notes/sections/richTextRenderer";
import ContactButton from "@/app/components/contactButton";
import {
  getAllEntries,
  getEntryBySlug,
  Portfolio,
} from "@/app/utils/contentful";
import { Button } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product: Portfolio = await getEntryBySlug("produkte", slug);

  return {
    title: `${product.fields.name} | CoMo Solution GmbH`,
    openGraph: {
      title: product.fields.name,
      type: "article",
      url: `https://como-solution.de/portfolio/products/${product.fields.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const products = await getAllEntries("produkte");
  return products.map((product) => ({
    slug: product.fields.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product: Portfolio = await getEntryBySlug("produkte", slug);

  return (
    <main className="flex flex-col gap-8 items-center">
      <header className="flex flex-col items-center gap-2 px-8">
        <Image
          src={`/logos/${product.fields.brand}.svg`}
          alt="Logo"
          width={160}
          height={64}
          className="inverted"
        />
        <h2 className="text-center">{product.fields.name}</h2>
      </header>
      {product.fields.title && (
        <h1 className="text-center">{product.fields.title}</h1>
      )}
      <article>
        <RichTextRenderer document={product.fields.content} />
      </article>
      <div className="flex justify-center gap-2">
        <Button
          variant="transparent"
          component={Link}
          href="/portfolio/products"
          leftSection={<IconChevronLeft size={16} />}
        >
          Weitere Produkte entdecken
        </Button>
        <ContactButton />
      </div>
    </main>
  );
}
