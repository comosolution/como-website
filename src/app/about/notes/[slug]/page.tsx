/* eslint-disable @next/next/no-img-element */
import { RichTextRenderer } from "@/app/about/notes/sections/richTextRenderer";
import News from "@/app/components/news";
import { defaultPadding } from "@/app/style/style";
import { getAllNotes, getNoteBySlug, Note } from "@/app/utils/contentful";
import { formatDate } from "@/app/utils/utils";
import { format } from "date-fns";
import { de } from "date-fns/locale";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note: Note = await getNoteBySlug(slug);

  const description = `CoMo Notiz vom ${format(
    note.fields.publishedAt,
    "dd.MM.yyyy",
    { locale: de }
  )}`;

  return {
    title: `${note.fields.title} | CoMo Solution GmbH`,
    description: description,
    openGraph: {
      title: note.fields.title,
      description: description,
      type: "article",
      publishedTime: note.fields.publishedAt,
      url: `https://como-solution.de/about/notes/${note.fields.slug}`,
      images: note.fields.cover?.fields?.file?.url
        ? [
            {
              url: `https:${note.fields.cover.fields.file.url}`,
              alt: note.fields.title,
            },
          ]
        : [],
    },
  };
}

export async function generateStaticParams() {
  const notes = await getAllNotes();
  return notes.map((note) => ({
    slug: note.fields.slug,
  }));
}

export default async function NotizDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note: Note = await getNoteBySlug(slug);

  const coverImage = note.fields.cover?.fields?.file?.url
    ? `https:${note.fields.cover.fields.file.url}`
    : null;
  const coverAlt = note.fields.cover?.fields?.title || note.fields.title;

  return (
    <main className={`flex flex-col gap-8 items-center ${defaultPadding}`}>
      <header className="flex flex-col text-center">
        <p className="text-orange-500 font-bold pb-2">
          {formatDate(note.fields.publishedAt)}
        </p>
        <h1 className="text-center">{note.fields.title}</h1>
      </header>
      {coverImage && (
        <div className="w-full">
          <img src={coverImage} alt={coverAlt} className="rounded-xl mx-auto" />
        </div>
      )}
      <article>
        <RichTextRenderer document={note.fields.content} />
      </article>
      <News exclude={note.sys.id} title="Weitere Neuigkeiten" />
    </main>
  );
}
