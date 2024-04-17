import News from "@/app/components/news";
import Team from "./sections/team";
import { twoCols } from "@/app/style/style";
import Principles from "./sections/principles";
import Map from "./sections/map";

export default async function Page() {
  return (
    <main className="flex flex-col gap-16 p-8">
      <header className="flex flex-col text-center">
        <p className="text-orange-500 pb-2">
          <b>Willkommen bei der CoMo</b>
        </p>
        <h1>
          Ihr Partner für <br /> innovative IT-Lösungen
        </h1>
      </header>
      <section>
        <h5 className="p-8">
          Mit über einem Jahrzehnt an geballter IT-Expertise und einem Team von
          Spezialisten setzen wir bei der CoMo neue Maßstäbe.
        </h5>
        <div className={twoCols}>
          <div className="p-8">
            <h3>Unser Anspruch</h3>
            <p className="muted">
              Ihre Anforderungen nicht nur zu erfüllen, sondern zu übertreffen.
              Dank kontinuierlicher Weiterbildung, Zertifizierungen und dem
              Einsatz modernster Tools und Technologien halten wir uns stets am
              Puls der Zeit. Gemeinsam mit Ihnen entwickeln wir maßgeschneiderte
              Anwendungen, digitalisieren und mobilisieren Ihre
              Geschäftsprozesse und meistern jede Herausforderung in Ihrer
              IT-Landschaft.
            </p>
          </div>
          <div className="p-8">
            <h3>Das Ergebnis</h3>
            <p className="muted">
              Eine effizientere Infrastruktur und Werkzeuge, die Ihre
              Mitarbeiterinnen und Mitarbeiter begeistern. Lassen Sie uns
              gemeinsam die Zukunft Ihrer IT gestalten und Ihr Unternehmen
              voranbringen – mit CoMo an Ihrer Seite.
            </p>
          </div>
        </div>
      </section>
      {/* <Team /> */}
      <Map />
      <Principles />
      <News />
    </main>
  );
}
