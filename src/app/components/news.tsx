/* eslint-disable @next/next/no-img-element */
import { getMarkdown } from "../utils/generator";
import Button from "./button";
import Tile from "./tile";
import ImageWithFallback from "./image";
import NewsletterSubscribe from "./newsletter";
import { header } from "../style/style";

export default async function News() {
  const notes = await getMarkdown("notes");

  return (
    <section className="relative flex flex-col gap-4 pt-16 border-t border-t-white/20">
      <div className="absolute -z-1 inset-0 flex justify-center overflow-hidden">
        <img
          src="/glow-2.png"
          alt=""
          width="2000"
          height="1200"
          className="max-w-none origin-top"
        />
      </div>
      <header className={`${header} relative z-5 justify-between px-8`}>
        <h2>Was gibt es Neues?</h2>
        <Button
          type="secondary"
          text="Alle Notizen anzeigen"
          href="/about/notes"
        />
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {notes.map((note, index) => {
          return (
            // only show last 2 notes
            index < 2 && (
              <Tile
                key={note.id}
                href={`/about/notes#${note.id}`}
                className="gap-4"
              >
                <div className="relative w-full aspect-video lg:aspect-square overflow-hidden rounded-lg">
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
        <NewsletterSubscribe />
      </div>
    </section>
  );
}
