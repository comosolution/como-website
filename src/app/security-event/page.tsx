import {
  IconCalendarEvent,
  IconCheck,
  IconClock,
  IconMapPin,
} from "@tabler/icons-react";
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
    label: "7. Juli 2025",
  },
  {
    icon: <IconClock size={20} />,
    label: "9:30 – 13:30 Uhr",
    addition: "danach Get-Together",
  },
  { icon: <IconCheck size={20} />, addition: "Die Teilnahme ist kostenfrei." },
];

export default function Page() {
  return (
    <main className="flex flex-col gap-16 px-8">
      <header className="flex flex-col items-center text-center gap-2 pb-4">
        <h4>Cybersicherheit für den Mittelstand</h4>
        <h1>Business-Brunch am 7. Juli 2025 in Nürnberg</h1>
        <h4 className="muted">
          Ihr exklusives Event mit ArcticWolf & CoMo Solution
        </h4>
      </header>
      <div className={twoCols}>
        <div className="flex flex-col gap-4 px-8">
          <p>
            Am 7. Juli 2025 laden Arctic Wolf und CoMo Solution zum
            Business-Brunch ein. In einem kompakten Format erhalten Sie aktuelle
            Informationen zur Sicherheitslage, Einblicke in Sicherheitslösungen
            und Maßnahmenempfehlungen – für Ihr Unternehmen aus dem Mittelstand.
          </p>
          <h3>Themenschwerpunkte</h3>
          <ul>
            <li className="accordion">
              Unternehmen technisch absichern ohne großen Aufwand
            </li>
            <ul>
              <li className="accordion accordion-2">
                Rechtskonform, nach NIS2
              </li>
              <li className="accordion accordion-2">BSI zertifiziert</li>
              <li className="accordion accordion-2">Ressourcensparend</li>
            </ul>
            <li className="accordion">
              Cybersecurity-Insights: Die Security-Strategien von ArcticWolf
            </li>
            <li className="accordion">
              Entlastung Ihrer IT durch ein externes Expertenteam
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
      <div className={twoCols}>
        <EventForm />
        <Map zoom={14} destination="FICHTE45+Nürnberg" />
      </div>
    </main>
  );
}
