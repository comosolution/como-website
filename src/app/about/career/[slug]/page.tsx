import { RichTextRenderer } from "@/app/about/notes/sections/richTextRenderer";
import Hero from "@/app/components/hero";
import { getAllEntries, getEntryBySlug, Job } from "@/app/utils/contentful";
import { IconClock, IconMapPin } from "@tabler/icons-react";
import { Metadata } from "next";
import CareerForm from "../sections/form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job: Job = await getEntryBySlug("jobs", slug);

  return {
    title: `${job.fields.title} | CoMo Solution GmbH`,
    openGraph: {
      title: job.fields.title,
      type: "article",
      url: `https://como-solution.de/about/career/${job.fields.slug}`,
      images: job.fields.cover?.fields?.file?.url
        ? [
            {
              url: `https:${job.fields.cover.fields.file.url}`,
              alt: job.fields.title,
            },
          ]
        : [],
    },
  };
}

export async function generateStaticParams() {
  const notes = await getAllEntries("jobs");
  return notes.map((job) => ({
    slug: job.fields.slug,
  }));
}

export default async function NotizDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job: Job = await getEntryBySlug("jobs", slug);

  const coverImage = job.fields.cover?.fields?.file?.url
    ? `https:${job.fields.cover.fields.file.url}`
    : null;
  const coverAlt = job.fields.cover?.fields?.title || job.fields.title;

  return (
    <>
      <div className="flex flex-col gap-8 items-center">
        <Hero
          title={job.fields.title}
          coverImage={coverImage}
          coverAlt={coverAlt}
        >
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 text-[rgb(var(--red-rgb))] font-bold pb-2">
            <div className="flex items-center gap-1">
              <IconClock size={16} stroke={3} />
              <p>{job.fields.type}</p>
            </div>
            <div className="flex items-center gap-1">
              <IconMapPin size={16} stroke={3} />
              <p>{job.fields.location}</p>
            </div>
          </div>
        </Hero>
        <article>
          <RichTextRenderer document={job.fields.content} />
        </article>
      </div>
      <CareerForm subject={`Bewerbung: ${job.fields.title}`} />
    </>
  );
}
