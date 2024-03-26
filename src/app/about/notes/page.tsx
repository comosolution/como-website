import { markdownToHtml, getMarkdown } from "../../utils/generator";

export default async function Page() {
  const notes = await getMarkdown("notes");

  return (
    <main>
      <h1 className="text-center">Notizen</h1>
      <div className="flex flex-col gap-8 p-8">
        {notes.map(async (note) => {
          return (
            <section key={note.id} id={note.id} className="flex gap-4 pt-32">
              <aside className="w-1/4 h-min sticky top-16 flex flex-col gap-2 px-8">
                <p className="muted">
                  {new Date(note.date).toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h4>{note.title}</h4>
              </aside>
              <article
                className="p-6 rounded-2xl backdrop-blur-sm bg-neutral-900/10"
                dangerouslySetInnerHTML={{
                  __html: await markdownToHtml(note.content),
                }}
              />
            </section>
          );
        })}
      </div>
    </main>
  );
}
