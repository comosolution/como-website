import { RichTextRenderer } from "@/app/about/notes/sections/richTextRenderer";
import Hero from "@/app/components/hero";
import { icons } from "@/app/components/icons";
import {
  getAllEntries,
  getEntryBySlug,
  Portfolio,
} from "@/app/utils/contentful";
import { Metadata } from "next";
import Overview from "../../sections/overview";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service: Portfolio = await getEntryBySlug("services", slug);

  return {
    title: `${service.fields.name} | CoMo Solution GmbH`,
    openGraph: {
      title: service.fields.name,
      type: "article",
      url: `https://como-solution.de/portfolio/services/${service.fields.slug}`,
      images: service.fields.cover?.fields?.file?.url
        ? [
            {
              url: `https:${service.fields.cover.fields.file.url}`,
              alt: service.fields.title,
            },
          ]
        : [],
    },
  };
}

export async function generateStaticParams() {
  const services = await getAllEntries("services");
  return services.map((service) => ({
    slug: service.fields.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service: Portfolio = await getEntryBySlug("services", slug);

  const coverImage = service.fields.cover?.fields?.file?.url
    ? `https:${service.fields.cover.fields.file.url}`
    : null;
  const coverAlt = service.fields.cover?.fields?.title || service.fields.title;

  const Icon = icons[service.fields.slug];

  return (
    <main className="flex flex-col gap-8 items-center">
      <Hero
        title={service.fields.title}
        coverImage={coverImage}
        coverAlt={coverAlt}
      >
        <div className="flex justify-start items-center gap-1 pb-2 text-orange-500">
          <Icon />
          <p>
            <b>{service.fields.name}</b>
          </p>
        </div>
      </Hero>
      <article>
        <RichTextRenderer document={service.fields.content} />
      </article>
      <div className="flex flex-col items-center">
        <Overview
          type="services"
          filter={slug}
          title="Weitere Leistungen für Sie"
        />
      </div>
    </main>
  );
}
