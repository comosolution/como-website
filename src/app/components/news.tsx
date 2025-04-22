/* eslint-disable @next/next/no-img-element */
import { Button } from "@mantine/core";
import { fourCols, header } from "../style/style";
import { getMarkdown } from "../utils/generator";
import { formatDate } from "../utils/utils";
import ImageWithFallback from "./image";
import Tile from "./tile";

export default async function News({
  exclude,
  title,
}: {
  exclude?: string;
  title?: string;
}) {
  const notes = await getMarkdown("notes");
  const filteredNotes = notes.filter((n) => n.id !== exclude);

  return (
    <section className="flex flex-col gap-8 py-16">
      <header className={`${header} relative z-5 justify-between px-8`}>
        <h2>{title ? title : "Was gibt es Neues?"}</h2>
        <Button component="a" variant="light" href="/about/notes">
          Alle Notizen anzeigen
        </Button>
      </header>
      <div className={fourCols}>
        {filteredNotes.map((note, index) => {
          return (
            // show last 4 notes
            index < 4 && (
              <Tile
                key={note.id}
                href={`/about/notes/${note.id}`}
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
                  <p className="muted">{formatDate(note.date)}</p>
                  <p className="hyphens-auto">
                    <b>{note.title}</b>
                  </p>
                </div>
              </Tile>
            )
          );
        })}
      </div>
    </section>
  );
}
