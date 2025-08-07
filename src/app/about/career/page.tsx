import { card, defaultPadding, twoCols } from "@/app/style/style";
import { getAllJobs, Job } from "@/app/utils/contentful";
import { Button } from "@mantine/core";
import { IconChevronRight, IconClock, IconMapPin } from "@tabler/icons-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Karriere | CoMo Solution GmbH",
};

export default async function Page() {
  const jobs: Job[] = await getAllJobs();

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
        {jobs.map((j, i) => (
          <Link
            key={i}
            href={`/about/career/${j.fields.slug}`}
            className={`tile flex flex-col lg:flex-row justify-between items-center gap-4 hover:bg-[rgba(var(--highlight-rgb),0.4)] transition-all ${card} px-8 py-4`}
          >
            <div className="flex flex-col items-center lg:items-start gap-2">
              <h3 className="text-center">{j.fields.title}</h3>
              <div className="flex flex-col lg:flex-row items-center lg:gap-8">
                <div className="flex items-center gap-1 muted">
                  <IconClock size={16} />
                  <p className="small">{j.fields.type}</p>
                </div>
                <div className="flex items-center gap-1 muted">
                  <IconMapPin size={16} />
                  <p className="small">{j.fields.location}</p>
                </div>
              </div>
            </div>
            <Button
              color="red"
              variant="transparent"
              rightSection={<IconChevronRight size={16} />}
            >
              Mehr erfahren
            </Button>
          </Link>
        ))}
      </section>
    </main>
  );
}
