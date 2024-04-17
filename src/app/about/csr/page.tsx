import News from "@/app/components/news";
import NoteElement from "@/app/components/note";
import { twoCols } from "@/app/style/style";
import { getMarkdown } from "@/app/utils/generator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSR | CoMo Solution GmbH",
};

export default async function Page() {
  const articles = await getMarkdown("csr");

  return (
    <main className="flex flex-col gap-16 p-8">
      <header className="flex flex-col text-center">
        <p className="text-orange-500 pb-2">
          <b>Corporate Social Responsibility</b>
        </p>
        <h1>
          Wir übernehmen <br /> Verantwortung
        </h1>
      </header>
      <section>
        <h2 className="p-8">CSR - Was ist Corporate Social Responsibility?</h2>
        <div className={twoCols}>
          <div className="p-8">
            <h3>Was ist damit gemeint?</h3>
            <p className="muted">
              Eigentlich ist das ein alter Hut, der schon in der Antike
              Verwendung fand (allerdings wahrscheinlich nicht als griffiges
              englisches Akronym). Es geht dabei um einen freiwilligen Beitrag,
              den Unternehmen über die gesetzlichen Verpflichtungen hinaus
              übernehmen. Dies bezieht sich auf den Umgang mit Mitarbeitenden,
              Menschen im allgemeinen und mit der Umwelt. Gesellschaftliche
              Verantwortung von Unternehmen ist in Deutschland ein Grundelement
              der sozialen Marktwirtschaft.
            </p>
          </div>
          <div className="p-8">
            <h3>Schöne Worte. Was sind die Taten?</h3>
            <p className="muted">
              Die CoMo sieht ihre gesellschaftliche Verantwortung als Teil ihres
              Wirtschaftens. Selbstverständlich bieten wir als
              Wirtschaftsunternehmen Produkte und professionelle
              Dienstleistungen hoher Qualität, über dieses Geschäftsziel hinaus
              sehen wir uns als Bestandteil der Gesellschaft und der Region und
              wollen auch als solcher unternehmerische Verantwortung übernehmen.
            </p>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-8 p-8">
        {articles.reverse().map(async (note) => {
          return <NoteElement key={note.id} note={note} />;
        })}
      </div>
      <News />
    </main>
  );
}
