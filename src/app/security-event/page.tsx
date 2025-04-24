import { IconCalendarEvent, IconClock, IconMapPin } from "@tabler/icons-react";
import { Metadata } from "next";
import Image from "next/image";
import Map from "../components/map";
import { twoCols } from "../style/style";
import EventForm from "./sections/form";

export const metadata: Metadata = {
  title: "CoMo x ArcticWolf | CoMo Solution GmbH",
  description: "Ihr exklusives IT-Security-Event",
};

const details = [
  {
    icon: <IconMapPin size={20} />,
    label: "FICHTE45",
    addition: "Fichtestraße 45, 90489 Nürnberg",
  },
  {
    icon: <IconCalendarEvent size={20} />,
    label: "22. Mai 2025",
  },
  {
    icon: <IconClock size={20} />,
    label: "9:30 – 13:30 Uhr",
    addition: "danach Get-Together",
  },
];

export default function Page() {
  return (
    <main className="flex flex-col gap-16 px-8">
      <header className="flex flex-col items-center text-center gap-4 pb-4">
        <Image
          src="/aw.png"
          width="240"
          height="96"
          alt="CoMo x ArcticWolf"
          className="inverted"
        />
        <h1>Richtig verteidigt – mit Cybersecurity der Spitzenklasse!</h1>
        <h4 className="muted">
          Ihr exklusives Event mit ArcticWolf & CoMo Solution
        </h4>
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
            Kommen Sie am <b>22. Mai 2025</b> ins <b>FICHTE45 Co-Working</b> und
            erleben ein exklusives Event mit ArcticWolf, dem Experten für
            Managed Security & Incident Response, und uns, der CoMo Solution,
            Digitalisierungspartner des 1. FC Nürnberg.
          </p>
          <p>
            Erhalten Sie Informationen aus erster Hand, wie Sie Ihr Unternehmen
            mit effizienten, KI-gestützten Lösungen schützen können und dabei
            auch Ihre eigene IT entlasten können.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div
            className="relative w-full overflow-hidden rounded-lg ring-1 ring-white/10 shadow-2xl"
            style={{ aspectRatio: "16 / 7" }}
          >
            <Image
              src="/fichte45.png"
              alt="FICHTE45"
              fill
              style={{
                objectFit: "cover",
                borderRadius: 8,
                filter: "brightness(0.9)",
              }}
            />
          </div>
          <div className="flex flex-col gap-4 px-8">
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
      <Map zoom={14} destination="FICHTE45+Nürnberg" />
      <div className={twoCols}>
        <div className="flex flex-col gap-4 p-8 lg:h-min lg:sticky lg:top-4">
          <h3>Das erwartet Sie:</h3>
          <ul>
            <li className="accordion">
              Cybersecurity-Insights: Die Security-Strategien von ArcticWolf
            </li>
            {/* <li className="accordion">
              Behind the scenes: Der Concierge-Service im SOC Frankfurt
            </li> */}
            <li className="accordion">
              Das Werkzeug für den Schutz Ihrer IT-Infrastruktur
            </li>
            <li className="accordion">
              Impulsvortrag: „Es kommt auf die richtige Verteidigung an“
            </li>
            <li className="accordion">
              Networking & Austausch mit Gästen und Experten
            </li>
          </ul>
          <p>
            Es besteht bei Bedarf während und nach dem Programm die Möglichkeit
            in tiefergehende 1:1 Gespräche zu gehen.
          </p>
          <p>Sichern Sie sich Ihren Platz – die Teilnehmerzahl ist begrenzt.</p>
          <p>Wir freuen uns auf Sie!</p>
          <p>
            <b>Ihr Team von CoMo Solution & ArcticWolf</b>
          </p>
        </div>
        <EventForm />
      </div>
      <div
        className="mb-24 relative w-full overflow-hidden rounded-lg ring-1 ring-white/10 shadow-2xl"
        style={{ aspectRatio: "9/3" }}
      >
        <Image
          src="/cups.png"
          alt="Club Lounge"
          fill
          style={{
            objectFit: "cover",
            borderRadius: 8,
            filter: "brightness(0.6)",
          }}
        />
      </div>
    </main>
  );
}
