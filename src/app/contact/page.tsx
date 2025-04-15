import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontaktformular | CoMo Solution GmbH",
};

export default function Page() {
  return (
    <main className="flex flex-col gap-16 px-8 -mb-20">
      <header className="flex flex-col text-center">
        <p className="text-orange-500 pb-2">
          <b>Wir sind für Sie da!</b>
        </p>
        <h1>Ihre Kontaktanfrage</h1>
      </header>
      <section>
        <p>
          Haben Sie Fragen zu unseren IT-Dienstleistungen oder benötigen Sie
          Unterstützung bei Ihrem Projekt? Unser Team steht Ihnen gerne zur
          Verfügung. Füllen Sie einfach das untenstehende Formular aus, und wir
          melden uns schnellstmöglich bei Ihnen. Gemeinsam finden wir die
          passende Lösung für Ihre IT-Anforderungen.
        </p>
      </section>
    </main>
  );
}
