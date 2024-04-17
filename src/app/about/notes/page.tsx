import { getMarkdown } from "../../utils/generator";
import NoteElement from "@/app/components/note";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notizen | CoMo Solution GmbH",
};

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
