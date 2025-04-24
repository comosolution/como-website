import News from "@/app/components/news";
import { defaultPadding } from "@/app/style/style";
import { getAllNotes, getNotizById, Note } from "@/app/utils/contentful";
import { formatDate } from "@/app/utils/utils";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export async function generateStaticParams() {
  const notizen = await getAllNotes();

  return notizen.map((n: any) => ({
    id: n.sys.id,
  }));
}

export default async function NotizDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const note: Note = await getNotizById(id);

  const html = documentToHtmlString(note.fields.content, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { file, title } = node.data.target.fields;
        const url = file.url.startsWith("//") ? `https:${file.url}` : file.url;
        return `<img src="${url}" alt="${title}" class="my-6 rounded-lg shadow-md" />`;
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
        <img
          src={coverImage}
          alt={coverAlt}
          className="object-cover rounded-xl shadow-lg"
        />
      )}
      <article dangerouslySetInnerHTML={{ __html: html }} />
      <News exclude={note.sys.id} />
    </main>
  );
}
