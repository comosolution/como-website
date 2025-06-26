import {
  IconCalendarEvent,
  IconClock,
  IconCurrencyEuroOff,
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
  {
    icon: <IconCurrencyEuroOff size={20} />,
    addition: "Die Teilnahme ist kostenfrei.",
  },
];

export default function Page() {
  return (
    <main className="flex flex-col gap-16 px-8">
      <header className="flex flex-col items-center text-center gap-2 pb-4">
        <h1>Exklusiver Cybersecurity-Brunch für den Mittelstand in Nürnberg</h1>
      </header>
      <div className={twoCols}>
        <div className="flex flex-col gap-4 px-8">
          <h3>
            Sprechen Sie mit den Profis und finden Sie die beste Lösung für Ihr
            Unternehmen!
          </h3>
          <h4>Sie bekommen:</h4>
          <ul>
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
              src="/aw.png"
              alt="CoMo x ArcticWolf"
              fill
              style={{
                objectFit: "cover",
                borderRadius: 8,
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
