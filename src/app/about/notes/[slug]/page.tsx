/* eslint-disable @next/next/no-img-element */
import { RichTextRenderer } from "@/app/about/notes/sections/richTextRenderer";
import News from "@/app/components/news";
import { defaultPadding } from "@/app/style/style";
import { getAllNotes, getNoteBySlug, Note } from "@/app/utils/contentful";
import { formatDate } from "@/app/utils/utils";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
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

  return {
    title: `${note.fields.title} | CoMo Solution GmbH`,
    description: `CoMo Notiz vom ${format(
      note.fields.publishedAt,
      "dd.MM.yyyy",
      { locale: de }
    )}`,
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

  const html = documentToHtmlString(note.fields.content, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { file, title } = node.data.target.fields;
        const url = file.url.startsWith("//") ? `https:${file.url}` : file.url;
        return `<img src="${url}" alt="${title}" />`;
      },
    },
  });

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
      <article className="prose max-w-none">
        <RichTextRenderer document={note.fields.content} />
      </article>
      <News exclude={note.sys.id} title="Weitere Neuigkeiten" />
    </main>
  );
}
