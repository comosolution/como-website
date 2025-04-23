import NoteElement from "@/app/about/notes/sections/note";
import News from "@/app/components/news";
import { defaultPadding } from "@/app/style/style";
import { getMarkdown } from "@/app/utils/generator";

export async function generateStaticParams() {
  const notes = await getMarkdown("notes");

  return notes.map((n) => {
    return { id: n.id };
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const notes = await getMarkdown("notes");
  const { id } = await params;
  const note = notes.find((n) => n.id === id);

  return (
    <main className={`flex flex-col items-center ${defaultPadding}`}>
      <NoteElement note={note!} />
      <News exclude={id} title="Weitere Neuigkeiten" />
    </main>
  );
}
