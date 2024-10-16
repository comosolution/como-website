import Image from "next/image";
import { twoCols } from "../style/style";
import GameForm from "./sections/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clubspiele | CoMo Solution GmbH",
};

export default function Page() {
  return (
    <main className="flex flex-col gap-16 px-8">
      <header className="flex flex-col items-center text-center gap-4">
        <div className="flex items-center gap-1">
          <p>
            <b>Wir sind</b>
          </p>
          <Image
            src="/clubspiele/fcn.svg"
            width="120"
            height="48"
            alt="Clubfreund"
          />
        </div>
        <h1>Mit der CoMo zum Club</h1>
      </header>
      <div className={twoCols}>
        <div className="flex flex-col gap-4 px-8">
          <p>Verehrte Kundinnen und Kunden, liebe Partner und Freunde,</p>
          <p>
            ein Stadionbesuch ist immer ein Erlebnis und die Atmosphäre eines
            Fußballspiels mit den Fans im Stadion ist besonders. Als Partner des
            1. FC Nürnberg möchten wir Sie und eine Begleitperson zu einem
            Heimspiel in der Saison 2024/25 einladen. Erleben Sie mit uns
            gemeinsam Fußball in einer besonderen Umgebung – der VIP
            Club-Lounge!
          </p>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <p>
            Die Club-Lounge ist ein modern gestalteter VIP-Bereich des FCN im
            Max-Morlock-Stadion. Hier bleiben kaum Wünsche unerfüllt:
            Geselligkeit und Genuss treffen aufeinander, leckeres regionales
            Essen wartet an verschiedenen Buffets auf Sie, eine große
            Getränkeauswahl, Kaffee, Espresso zum Bio-Kuchen oder ein frisch
            gezapftes Bier an der großen Theke runden den Aufenthalt ab.
          </p>
        </div>
      </div>
      <div
        className="relative w-full overflow-hidden rounded-lg ring-1 ring-white/10 shadow-2xl"
        style={{ aspectRatio: "9/2" }}
      >
        <Image
          src="/clubspiele/club-lounge.jpg"
          alt="Club Lounge"
          fill
          style={{
            objectFit: "cover",
            borderRadius: 8,
            filter: "brightness(0.7)",
          }}
        />
      </div>
      <div className={twoCols}>
        <div className="flex flex-col gap-4 p-8 lg:h-min lg:sticky lg:top-4">
          <h3>Die Club-Lounge im Überblick</h3>
          <ul>
            <li className="accordion">
              Weitläufiger, heller Raum mit schönem Ausblick und direktem Zugang
              zur Haupttribüne
            </li>
            <li className="accordion">
              Fein abgestimmtes Buffet, separate Salattheke und großzügige Bar
            </li>
            <li className="accordion">Reservierter Platz mit Abräumservice</li>
            <li className="accordion">
              Gepolsterte und überdachte Business Seats auf der Haupttribüne
            </li>
          </ul>
          <h3>Der Ablauf am Spieltag im Überblick</h3>
          <ul>
            <li className="accordion">
              Sie treffen uns etwa 90 Minuten vor Anfpiff{" "}
              <a
                href="https://maps.app.goo.gl/xHT41d6PtyYgFt9b6"
                className="underlined"
              >
                am Stadionzugang für den VIP Bereich an der Haupttribüne
              </a>
            </li>
            <li className="accordion">
              So haben wir genügend Zeit die Plätze einzunehmen, Gespräche zu
              führen und das umfangreiche Angebot im der Club-Lounge zu genießen
            </li>
            <li className="accordion">Spielbeginn zur angegebenen Uhrzeit</li>
            <li className="accordion">
              In der Halbzeitpause wird in der Club-Lounge ein Pausensnack
              angeboten
            </li>
            <li className="accordion">
              Nach der zweiten Halbzeit besteht die Möglichkeit entspannt zum
              Abschluss noch etwas zu essen oder zu trinken, das Spielgeschehen
              zu diskutieren oder die von der CoMo präsentierte Pressekonferenz
              zu sehen
            </li>
          </ul>
          <p>
            Wir freuen uns auf ein gemeinsames Fußballerlebnis mit Ihnen im
            Max-Morlock-Stadion! Bitte nutzen Sie für die Registrierung und die
            Auswahl der Partie unser Formular. Wir bestätigen Ihre Auswahl
            zeitnah. Bei einer Mehrfachbuchung einer Partie entscheidet das Los.
          </p>
          <p>
            <b>Marcus Prell und das Team der CoMo Solution</b>
          </p>
        </div>
        <GameForm />
      </div>
    </main>
  );
}
