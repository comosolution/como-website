import Hero from "@/app/components/hero";
import News from "@/app/components/news";
import { defaultPadding, twoCols } from "@/app/style/style";
import { Metadata } from "next";
import Map from "../../components/map";
import Principles from "./sections/principles";

export const metadata: Metadata = {
  title: "Unternehmen | CoMo Solution GmbH",
};

export default async function Page() {
  return (
    <>
      <Hero
        title="Mit innovativen Lösungen machen wir Ihre Arbeit effizienter und
          sicherer!"
        coverImage="/lauf.jpg"
        coverAlt="Marktplatz Lauf"
      >
        <p className="text-orange-500">
          <b>Willkommen bei der CoMo</b>
        </p>
      </Hero>
      <main className={`flex flex-col gap-16 ${defaultPadding}`}>
        <section>
          <h5 className={defaultPadding}>
            Seit über einem Jahrzehnt setzt sich unser Team von Spezialisten für
            Ihre Ziele ein – kompetent, freundlich und bodenständig.
          </h5>
          <div className={twoCols}>
            <div className={defaultPadding}>
              <h3>Unser Anspruch</h3>
              <p className="muted">
                Ihre Anforderungen nicht nur zu erfüllen, sondern zu
                übertreffen. Dank kontinuierlicher Weiterbildung,
                Zertifizierungen und dem Einsatz modernster Tools und
                Technologien halten wir uns stets am Puls der Zeit. Gemeinsam
                mit Ihnen entwickeln wir maßgeschneiderte Anwendungen,
                digitalisieren und mobilisieren Ihre Geschäftsprozesse und
                meistern jede Herausforderung in Ihrer IT-Landschaft.
              </p>
            </div>
            <div className={defaultPadding}>
              <h3>Das Ergebnis</h3>
              <p className="muted">
                Eine effizientere Infrastruktur und Werkzeuge, die Ihre
                Mitarbeiterinnen und Mitarbeiter begeistern. Für Ihr Unternehmen
                bedeutet eine effizientere Arbeit Einsparpotentiale und
                Ressourcenschonung. Lassen Sie uns gemeinsam die Zukunft Ihrer
                IT gestalten und Ihr Unternehmen voranbringen – mit CoMo an
                Ihrer Seite.
              </p>
            </div>
          </div>
        </section>
        {/* <Team /> */}
        <Map />
        <Principles />
        <News />
      </main>
    </>
  );
}
