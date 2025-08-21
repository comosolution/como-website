"use client";
import { twoCols } from "@/app/style/style";

export default function Principles() {
  const principles = [
    {
      title: "Nur der Nutzen zählt",
      sub: "Wir entwickeln Produkte und Dienstleistungen, die Ihnen einen klaren Vorteil bieten und nichts anderes. Wir verzichten gern auf jeglichen überflüssigen Schnickschnack – so wird Ihr Budget geschont.",
    },
    {
      title: "Service ist alles",
      sub: "Unser Ruf gründet sich auf schnellen und freundlichen Service. Tag für Tag setzen wir uns dafür ein, dass dies auch weiterhin so bleibt.",
    },
    {
      title: "Klare Kommunikation",
      sub: "Wir sprechen Ihre Sprache, kein unverständliches Fachchinesisch oder Buzzwords. Wir sind zwar auch Geeks und Nerds, aber unsere Kommunikation ist stets klar, verständlich und ehrlich.",
    },
    {
      title: "Unsere Kunden sind unsere Investoren",
      sub: "Wir wollen, dass Sie zufrieden sind! Wir sind ausschließlich unseren Kunden verpflichtet, nicht den Bankern, Investoren, dem Aktienmarkt oder einem umfangreichen Vorstand.",
    },
    {
      title: "Ehrliche Preispolitik",
      sub: "Jeder Kunde hat das Recht auf den fairsten Preis für unsere Produkte und Dienstleistungen. Wir bieten stets das bestmögliche Angebot an, mit dem sowohl Sie als auch wir gut leben können.",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute left-1/2 -translate-x-1/2 -z-10 w-screen h-full bg-[var(--light)] clip-angled" />
      <section className={`${twoCols} gap-y-32 items-center py-32 lg:py-0`}>
        <h2 className="px-8">An diesen Prinzipien lassen wir uns messen</h2>
        <div className="flex flex-col gap-8 p-8">
          {principles.map((principle, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-start gap-2 p-8 rounded-xl text-white bg-[var(--layers)]"
              >
                <h4>{principle.title}</h4>
                <p>{principle.sub}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
