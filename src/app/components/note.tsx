import { defaultPadding } from "../style/style";
import { Note } from "../types";
import { markdownToHtml } from "../utils/generator";
import Article from "./article";

export default async function NoteElement({ note }: { note: Note }) {
  const html = await markdownToHtml(note.content);

  return (
    <main
      id={note.id}
      className={`flex flex-col items-center gap-16 ${defaultPadding}`}
    >
      <header className="flex flex-col text-center">
        {note.date && (
          <p className="text-orange-500 pb-2">
            <b>
              {new Date(note.date).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </b>
          </p>
        )}
        <h1>{note.title}</h1>
      </header>
      <Article content={html} />
    </main>
  );
}
