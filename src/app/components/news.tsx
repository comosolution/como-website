import { getMarkdown } from "../utils/generator";
import Button from "./button";
import Tile from "./tile";
import ImageWithFallback from "./image";
import Newsletter from "./newsletter";

export default async function News() {
  const notes = await getMarkdown("notes");

  return (
    <section className="flex flex-col gap-4">
      <header className="flex justify-between items-center px-8">
        <h2>Was gibt es Neues?</h2>
        <Button
          type="secondary"
          text="Alle Notizen anzeigen"
          href="/about/notes"
        />
      </header>
      <div className="flex gap-4">
        {notes.map((note, index) => {
          return (
            // only show last 2 notes
            index < 2 && (
              <Tile
                key={note.id}
                href={`/about/notes#${note.id}`}
                className="gap-4"
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={`/notes/${note.id}.png`}
                    alt="Thumbnail"
                    fill
                    style={{ objectFit: "cover", borderRadius: 8 }}
                    fallbackSrc="/notes/thumbnail.svg"
                  />
                </div>
                <div>
                  <p className="muted">
                    {new Date(note.date).toLocaleDateString("de-DE", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h4>{note.title}</h4>
                </div>
              </Tile>
            )
          );
        })}
        <Newsletter />
      </div>
    </section>
  );
}
