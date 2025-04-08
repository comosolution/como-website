/* eslint-disable @next/next/no-img-element */
import { Button } from "@mantine/core";
import { fourCols, header } from "../style/style";
import { getMarkdown } from "../utils/generator";
import ImageWithFallback from "./image";
import NewsletterSubscribe from "./newsletter";
import Tile from "./tile";

export default async function News() {
  const notes = await getMarkdown("notes");

  return (
    <section className="relative flex flex-col gap-8 py-16 border-t border-t-white/10">
      <div className="absolute -z-1 inset-0 flex justify-center overflow-hidden">
        <img
          src="/glow-2.png"
          alt=""
          width="1600"
          height="1600"
          className="max-w-none origin-top"
        />
      </div>
      <header className={`${header} relative z-5 justify-between px-8`}>
        <h2>Was gibt es Neues?</h2>
        <Button component="a" variant="light" href="/about/notes">
          Alle Notizen anzeigen
        </Button>
      </header>
      <div className={fourCols}>
        {notes.map((note, index) => {
          return (
            // show last 4 notes
            index < 4 && (
              <Tile
                key={note.id}
                href={`/about/notes#${note.id}`}
                className="gap-4"
              >
                <div
                  className="relative w-full overflow-hidden rounded-lg"
                  style={{ aspectRatio: "9/4" }}
                >
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
                  <p className="hyphens-auto">
                    <b>{note.title}</b>
                  </p>
                </div>
              </Tile>
            )
          );
        })}
      </div>
      <NewsletterSubscribe />
    </section>
  );
}
