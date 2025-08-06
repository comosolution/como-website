/* eslint-disable @next/next/no-img-element */
import { RichTextRenderer } from "@/app/about/notes/sections/richTextRenderer";
import { getAllJobs, getJobBySlug, Job } from "@/app/utils/contentful";
import { IconClock, IconMapPin } from "@tabler/icons-react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job: Job = await getJobBySlug(slug);

  return {
    title: `${job.fields.title} | CoMo Solution GmbH`,
    openGraph: {
      title: job.fields.title,
      type: "article",
      url: `https://como-solution.de/about/notes/${job.fields.slug}`,
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
  const notes = await getAllJobs();
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
  const job: Job = await getJobBySlug(slug);

  const coverImage = job.fields.cover?.fields?.file?.url
    ? `https:${job.fields.cover.fields.file.url}`
    : null;
  const coverAlt = job.fields.cover?.fields?.title || job.fields.title;

  return (
    <main className="flex flex-col gap-8 items-center">
      <div
        id="hero"
        className="relative w-full min-h-[80vh] overflow-hidden -mt-32"
      >
        <img
          src={coverImage || ""}
          alt={coverAlt || ""}
          className="absolute inset-0 w-full h-[80vh] object-cover object-center"
        />
        <div className="absolute inset-0 w-full h-[80vh] bg-gradient-to-tr from-[rgba(var(--background-rgb),1)] via-[rgba(var(--background-rgb),0.4)] to-transparent" />
        <header className="relative h-[80vh] z-10 flex flex-col justify-end items-center text-center px-8 md:px-16 pb-16">
          <div className="flex flex-col md:flex-row items-center gap-4 text-orange-500 font-bold pb-2">
            <div className="flex items-center gap-1">
              <IconClock size={16} stroke={3} />
              <p>{job.fields.type}</p>
            </div>
            <div className="flex items-center gap-1">
              <IconMapPin size={16} stroke={3} />
              <p>{job.fields.location}</p>
            </div>
          </div>
          <h1 className="text-center">{job.fields.title}</h1>
        </header>
      </div>
      <article>
        <RichTextRenderer document={job.fields.content} />
      </article>
    </main>
  );
}
