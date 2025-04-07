import { IconCalendarEvent, IconClock, IconMapPin } from "@tabler/icons-react";
import { Metadata } from "next";
import Image from "next/image";
import Map from "../components/map";
import { twoCols } from "../style/style";
import EventForm from "./sections/form";

export const metadata: Metadata = {
  title: "CoMo x ArcticWolf | CoMo Solution GmbH",
};

const details = [
  {
    icon: <IconCalendarEvent size={20} />,
    label: "22. Mai 2025",
  },
  {
    icon: <IconClock size={20} />,
    label: "9:30 – 13:00 Uhr",
    addition: "danach Get-Together",
  },
  {
    icon: <IconMapPin size={20} />,
    label: "FICHTE45",
    addition: "Fichtestraße 45, 90489 Nürnberg",
  },
];

export default function Page() {
  return (
    <main className="flex flex-col gap-16 px-8">
      <header className="flex flex-col items-center text-center gap-4 pb-4">
        <Image src="/aw.png" width="128" height="96" alt="CoMo x ArcticWolf" />
        <h1 className="bg-gradient-to-r from-[rgb(var(--orange-rgb))] via-white/90 to-[#2358AC] bg-clip-text text-transparent">
          Richtig verteidigt – mit Cybersecurity der Spitzenklasse!
        </h1>
        <h4>Ihr exklusives Event mit Arctic Wolf & CoMo Solution</h4>
      </header>
      <div className={twoCols}>
        <div className="flex flex-col gap-4 px-8">
          <p>
            Die richtige Verteidigung ist in vielen Bereichen entscheidend, zum
            Beispiel im Sport. Aber auch für Organisationen und Unternehmen ist
            eine starke Abwehr sehr wichtig. Denn Cyberbedrohungen nehmen stetig
            zu und Unternehmen jeder Größe stehen vor der Herausforderung, sich
            gegen Angriffe zu schützen. Doch wie gelingt eine sichere Abwehr?
          </p>
          <p>
            Kommen Sie am 22. Mai 2025 ins FICHTE45 Co-Working und erleben ein
            exklusives Event mit Arctic Wolf, dem Experten für Managed Security
            & Incident Response, und uns, der CoMo Solution,
            Digitalisierungspartner des 1. FC Nürnberg.
          </p>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <p>
            Erhalten Sie Informationen aus erster Hand, wie Sie Ihr Unternehmen
            mit effizienten, KI-gestützten Lösungen schützen können und dabei
            auch Ihre eigene IT entlasten können.
          </p>
          <div className="flex flex-col gap-4 py-8">
            {details.map((d, i) => {
              return (
                <div key={i} className="flex items-center gap-4">
                  {d.icon}
                  <p>
                    <b>{d.label}</b> {d.addition}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Map
        zoom={14}
        position={{ lat: 49.461703, lng: 11.103155 }}
        destination="FICHTE45+Nürnberg"
      />
      <div className={`${twoCols} pb-32`}>
        <div className="flex flex-col gap-4 p-8 lg:h-min lg:sticky lg:top-4">
          <h3>Das erwartet Sie:</h3>
          <ul>
            <li className="accordion">
              Cybersecurity-Insights: Die Security-Strategien von Arctic Wolf
            </li>
            <li className="accordion">
              Best Practices für den Schutz Ihrer IT-Infrastruktur
            </li>
            <li className="accordion">
              Impulsvortrag des 1. FC Nürnberg: „Es kommt auf die richtige
              Verteidigung an“
            </li>
            <li className="accordion">
              Networking & Austausch mit Gästen und Experten
            </li>
          </ul>
          <p>Sichern Sie sich Ihren Platz – die Teilnehmerzahl ist begrenzt!</p>
          <p>Wir freuen uns auf Sie!</p>
          <p>
            <b>Ihr Team von CoMo Solution & Arctic Wolf</b>
          </p>
        </div>
        <EventForm />
      </div>
    </main>
  );
}
