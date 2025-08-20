import { RichTextRenderer } from "@/app/about/notes/sections/richTextRenderer";
import ContactButton from "@/app/components/contactButton";
import Hero from "@/app/components/hero";
import { Branche, getAllEntries, getEntryBySlug } from "@/app/utils/contentful";
import { icons } from "@/app/utils/icons";
import { Metadata } from "next";
import Overview from "../../sections/overview";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const branch: Branche = await getEntryBySlug("branchen", slug);

  return {
    title: `${branch.fields.name} | CoMo Solution GmbH`,
    openGraph: {
      title: branch.fields.name,
      type: "article",
      url: `https://como-solution.de/portfolio/branches/${branch.fields.slug}`,
      images: branch.fields.cover?.fields?.file?.url
        ? [
            {
              url: `https:${branch.fields.cover.fields.file.url}`,
              alt: branch.fields.title,
            },
          ]
        : [],
    },
  };
}

export async function generateStaticParams() {
  const branches = await getAllEntries("branchen");
  return branches.map((branch) => ({
    slug: branch.fields.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const branch: Branche = await getEntryBySlug("branchen", slug);

  const coverImage = branch.fields.cover?.fields?.file?.url
    ? `https:${branch.fields.cover.fields.file.url}`
    : null;
  const coverAlt = branch.fields.cover?.fields?.title || branch.fields.title;

  const Icon = icons[branch.fields.slug];

  return (
    <main className="flex flex-col gap-8 items-center">
      <Hero
        title={branch.fields.title}
        coverImage={coverImage}
        coverAlt={coverAlt}
      >
        <div className="flex justify-start items-center gap-1 pb-2 text-[rgb(var(--red-rgb))] ">
          <Icon />
          <p>
            <b>{branch.fields.name}</b>
          </p>
        </div>
      </Hero>
      <article>
        <RichTextRenderer document={branch.fields.content} />
        <ContactButton />
      </article>
      <div className="flex flex-col items-center">
        <Overview type="branchen" filter={slug} title="Weitere Branchen" />
      </div>
    </main>
  );
}
