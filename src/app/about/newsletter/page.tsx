"use client";
import Button from "@/app/components/button";
import NewsletterSubscribe, {
  NewsletterUnsubscribe,
} from "@/app/components/newsletter";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function NewsletterPage() {
  return (
    <Suspense>
      <NewsletterPageContent />
    </Suspense>
  );
}

function NewsletterPageContent() {
  const searchParams = useSearchParams();

  return (
    <main className="flex flex-col items-center gap-16 p-8">
      <header className="flex flex-col text-center">
        <p className="text-orange-500">
          <b>Das Wichtigste in Kurzform</b>
        </p>
        <h1>Unser Newsletter</h1>
      </header>
      {searchParams.has("success") ? (
        <div className="flex flex-col items-center gap-8">
          <p>{searchParams.get("success")}</p>
          <Button
            type="contact"
            text="Zurück zum Start"
            href="/"
            icon="arrow"
            iconRotation="270"
          />
        </div>
      ) : (
        <>
          <article>
            <p>
              Unsere Short-News sind der direkte Draht zu den neuesten
              Entwicklungen rund um die CoMo. Hier bekommen Sie alle wichtigen
              Infos – sei es zu bevorstehenden Veranstaltungen, frischen
              Releases in der Softwarewelt oder spannenden Updates zu unseren
              Partnern. Und keine Sorge, wir halten unser Versprechen: Wir
              spammen nicht.
            </p>
            <p>
              Wir freuen uns, dass Sie sich für unsere CoMo Short- und
              Event-News anmelden möchten. Für die Anmeldung benötigen wir
              lediglich Ihre E-Mail-Adresse. Alle weiteren Angaben sind optional
              und helfen uns, Sie persönlich anzusprechen und passende Inhalte
              zu liefern, die zu Ihren Interessen in der CoMo Solution passen.
            </p>
            <p>
              Der Schutz Ihrer Daten liegt uns besonders am Herzen, werfen Sie
              für mehr Informationen gerne einen Blick auf{" "}
              <Link href="/legal/privacy">unsere Datenschutzbestimmungen</Link>.
            </p>
          </article>
          <NewsletterSubscribe />
          <article id="abmeldung" className="pt-16">
            <h3>Abmeldung vom Newsletter</h3>
            <p>
              Wenn Sie sich von unseren CoMo Solution Mailings abmelden möchten,
              ist das absolut in Ordnung. Bitte tragen Sie einfach Ihre
              E-Mail-Adresse in das Feld ein und wir kümmern uns darum.
            </p>
            <p>
              Wenn Sie es sich anders überlegen, können Sie sich hier gerne
              jederzeit wieder für den Newsletter anmelden.
            </p>
          </article>
          <NewsletterUnsubscribe />
        </>
      )}
    </main>
  );
}
