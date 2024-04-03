import { Note } from "@/app/types";
import { markdownToHtml, getMarkdown } from "../../utils/generator";
import Article from "@/app/components/article";

export default async function Page() {
  const notes = await getMarkdown("notes");

  return (
    <main>
      <h1 className="text-center">Notizen</h1>
      <div className="flex flex-col gap-8 p-8">
        {notes.map(async (note) => {
          return <NoteElement key={note.id} note={note} />;
        })}
      </div>
    </main>
  );
}

async function NoteElement({ note }: { note: Note }) {
  const html = await markdownToHtml(note.content);

  return (
    <section id={note.id} className="flex flex-col lg:flex-row gap-4 pt-32">
      <aside className="lg:w-1/4 lg:h-min lg:sticky top-16 flex flex-col gap-2 px-8">
        <p className="muted">
          {new Date(note.date).toLocaleDateString("de-DE", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h4>{note.title}</h4>
      </aside>
      <Article content={html} />
    </section>
  );
}
