import PartnersMarquee from "@/app/components/partners";
import Partners from "./sections/partners";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner | CoMo Solution GmbH",
};

export default function Page() {
  return (
    <main className="flex flex-col gap-24 p-8">
      <header className="flex flex-col text-center">
        <p className="text-orange-500">
          <b>Unsere Partner</b>
        </p>
        <h1>Denn gemeinsam geht vieles leichter!</h1>
      </header>
      <section>
        <h5>
          Die CoMo setzt bei der Lösung verschiedener Projekte auch auf die
          Produkte und das Know-How seiner Partner. Warum soll man das Rad ein
          weiteres Mal erfinden, wenn es eine vertrauensvolle und geprüfte
          Lösung durch einen Partner gibt? Unsere Partnerschaften sind auf
          gegenseitige Verlässlichkeit und gelebte Kundenorientierung
          ausgerichtet. So wie wir den Kunden in den Mittelpunkt stellen, tun es
          unsere Partner genau so.
        </h5>
      </section>
      <PartnersMarquee scroll />
      <Partners />
    </main>
  );
}
