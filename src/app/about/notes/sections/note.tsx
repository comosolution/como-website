import Article from "../../../components/article";
import { defaultPadding } from "../../../style/style";
import { Note } from "../../../types";
import { markdownToHtml } from "../../../utils/generator";
import { formatDate } from "../../../utils/utils";

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
            <b>{formatDate(note.date)}</b>
          </p>
        )}
        <h1 className="-mx-4 md:mx-0 hyphens-auto md:hyphens-none">
          {note.title}
        </h1>
      </header>
      <Article content={html} />
    </main>
  );
}
