import News from "@/app/components/news";
import { defaultPadding } from "@/app/style/style";
import {
  getAllNotes,
  getNoteByPublishedDate,
  Note,
} from "@/app/utils/contentful";
import { formatDate } from "@/app/utils/utils";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { format } from "date-fns";
import Image from "next/image";

export async function generateStaticParams() {
  const notes = await getAllNotes();
  return notes.map((note) => ({
    slug: format(new Date(note.fields.publishedAt), "yyyy-MM-dd"),
  }));
}

export default async function NotizDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note: Note = await getNoteByPublishedDate(slug);

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
        <div
          className="relative w-[calc(100% + 4rem)] overflow-hidden rounded-t-2xl -mx-8 -mt-8"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src={coverImage ? coverImage : "/fallback.svg"}
            alt={coverAlt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <article dangerouslySetInnerHTML={{ __html: html }} />
      <News exclude={note.sys.id} />
    </main>
  );
}
