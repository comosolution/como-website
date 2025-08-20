import Tile from "@/app/components/tile";
import { defaultPadding, twoCols } from "@/app/style/style";
import { getAllEntries, Job } from "@/app/utils/contentful";
import { IconClock, IconMapPin } from "@tabler/icons-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Karriere | CoMo Solution GmbH",
};

export default async function Page() {
  const jobs: Job[] = await getAllEntries("jobs");

  return (
    <main className={`flex flex-col gap-4 ${defaultPadding}`}>
      <header className="flex flex-col text-center">
        <p className="text-orange-500 pb-2">
          <b>Deine Karriere bei der CoMo beginnt hier</b>
        </p>
        <h1>Gestalte mit uns die digitale Zukunft</h1>
      </header>
      <section>
        <h5 className={defaultPadding}>
          Du brennst für moderne Technologien und innovative Softwarelösungen?
          Dann bist du bei uns genau richtig!
        </h5>
        <div className={twoCols}>
          <div className={defaultPadding}>
            <p className="muted">
              Als spezialisierter IT-Dienstleister arbeiten wir täglich an
              spannenden Projekten für namhafte Kunden – von der ersten Idee bis
              zur fertigen Anwendung. Dabei setzen wir auf Teamgeist,
              Verantwortung und echte Begeisterung für das, was wir tun.
            </p>
          </div>
          <div className={defaultPadding}>
            <p className="muted">
              Egal ob Berufseinsteiger:in, erfahrene:r Entwickler:in oder
              Quereinsteiger:in mit Tech-Affinität – wir suchen Menschen, die
              mit uns wachsen wollen. Entdecke jetzt unsere offenen Positionen
              und finde den Job, der zu dir passt!
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-center">Offene Stellen</h2>
        <div className={twoCols}>
          {jobs.map((j, i) => {
            const coverImage = j.fields.cover?.fields?.file?.url
              ? `https:${j.fields.cover.fields.file.url}`
              : null;
            const coverAlt = j.fields.cover?.fields?.title || j.fields.title;

            return (
              <Tile
                key={i}
                href={`/about/career/${j.fields.slug}`}
                className="gap-4"
              >
                <div className="relative w-[calc(100% + 4rem)] overflow-hidden rounded-t-xl -mx-8 -mt-8 pt-[45%]">
                  <Image
                    src={coverImage ? coverImage : "/fallback.svg"}
                    alt={coverAlt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex flex-col lg:flex-row items-center lg:gap-4">
                    <div className="flex items-center gap-0.5 muted">
                      <IconClock size={16} />
                      <p className="small">{j.fields.type}</p>
                    </div>
                    <div className="flex items-center gap-0.5 muted">
                      <IconMapPin size={16} />
                      <p className="small">{j.fields.location}</p>
                    </div>
                  </div>
                  <h4 className="hyphens-auto text-center">
                    <b>{j.fields.title}</b>
                  </h4>
                </div>
              </Tile>
            );
          })}
        </div>
      </section>
    </main>
  );
}
