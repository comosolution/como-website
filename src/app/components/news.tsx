import { Button } from "@mantine/core";
import Image from "next/image";
import { fourCols, header } from "../style/style";
import { getAllNotes, Note } from "../utils/contentful";
import { formatDate } from "../utils/utils";
import Tile from "./tile";

export default async function News({
  exclude,
  title,
}: {
  exclude?: string;
  title?: string;
}) {
  const notes: Note[] = await getAllNotes();
  const filteredNotes = notes.filter((n) => n.sys.id !== exclude);

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
          const coverImage = note.fields.cover?.fields?.file?.url
            ? `https:${note.fields.cover.fields.file.url}`
            : "";
          const coverAlt =
            note.fields.cover?.fields?.title || note.fields.title;

          return (
            // show last 4 notes
            index < 4 && (
              <Tile
                key={note.sys.id}
                href={`/about/notes/${note.sys.id}`}
                className="gap-4"
              >
                <div
                  className="relative w-[calc(100% + 4rem)] overflow-hidden rounded-t-2xl -mx-8 -mt-8"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src={coverImage ? coverImage : "/fallback.svg"}
                    alt={coverAlt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p className="muted">{formatDate(note.fields.publishedAt)}</p>
                  <p className="hyphens-auto">
                    <b>{note.fields.title}</b>
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
