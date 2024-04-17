import { Note } from "../types";
import { markdownToHtml } from "../utils/generator";
import Article from "./article";

export default async function NoteElement({ note }: { note: Note }) {
  const html = await markdownToHtml(note.content);

  return (
    <section id={note.id} className="flex flex-col lg:flex-row gap-4 pt-32">
      <aside className="lg:w-1/4 lg:h-min lg:sticky lg:top-20 lg:pt-10 flex flex-col gap-2">
        {note.date && (
          <p className="muted">
            {new Date(note.date).toLocaleDateString("de-DE", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        )}
        <h4>{note.title}</h4>
      </aside>
      <Article content={html} />
    </section>
  );
}
