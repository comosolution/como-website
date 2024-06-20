import Image from "next/image";
import { twoCols } from "../style/style";
import GameForm from "./sections/form";

export default function Page() {
  return (
    <main className="flex flex-col gap-16 p-8">
      <header className="flex flex-col items-center text-center gap-4">
        <div className="flex items-center gap-1">
          <p>Wir sind</p>
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
        <div className="flex flex-col gap-4 p-8 muted">
          <p>Verehrte Kundinnen und Kunden, liebe Partner und Freunde,</p>
          <p>
            ein Stadionbesuch ist immer ein Erlebnis und die Atmosphäre eines
            Fußballspiels mit den Fans im Stadion ist besonders. Als Partner des
            1. FC Nürnberg möchten wir Sie und eine Begleitperson zu einem
            Heimspiel des 1. FC Nürnberg einladen.
          </p>
          <p>
            Bitte nutzen Sie für die Auswahl der Partie unser Formular. Wir
            bestätigen Ihre Auswahl zeitnah. Bei einer Mehrfachbuchung einer
            Partie entscheidet das Los!
          </p>
          <p>
            Wir freuen uns auf Ihre Auswahl und ein gemeinsames Sporterlebnis im
            Max-Morlock-Stadion Nürnberg.
          </p>
          <p>Marcus Prell und das Team der CoMo Solution</p>
        </div>
        <GameForm />
      </div>
    </main>
  );
}
