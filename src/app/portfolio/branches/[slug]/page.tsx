import Image from "next/image";
import branches from "../../../data/portfolio/branches.json";
import { Metadata } from "next";
import { twoCols } from "@/app/style/style";

export const metadata: Metadata = {
  title: "Branchen | CoMo Solution GmbH",
};

export function generateStaticParams() {
  return branches.map((branch) => ({
    slug: branch.id,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex flex-col items-center gap-24 px-16">
      {branches
        .filter((branch) => branch.id === params.slug)
        .map((branch, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <header className="flex flex-col items-center">
                <div className="flex justify-start items-center gap-1 pb-2">
                  <Image
                    src={`/portfolio/${branch.icon}.svg`}
                    alt="Icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-orange-500">
                    <b>{branch.name}</b>
                  </p>
                </div>
                <h1 className="text-center">{branch.title}</h1>
              </header>
              <h5 className="p-8 muted">{branch.description}</h5>
              <div>
                <h2 className="p-8">
                  Unsere Lösungen für das produzierende Gewerbe machen den
                  Unterschied
                </h2>
                <div className={twoCols}>
                  <div className="p-8">
                    <h3>Spezielle Rahmenbedingungen</h3>
                    <p className="muted">{branch.conditions}</p>
                  </div>
                  <div className="p-8">
                    <h3>Branchenführende Expertise</h3>
                    <p className="muted">
                      {branch.knowledge?.map((k, index) => {
                        return k.startsWith("- ") ? (
                          <ul key={index}>
                            <li className="accordion">{k.substring(2)}</li>
                          </ul>
                        ) : (
                          <p key={index} className="pb-4">
                            {k}
                          </p>
                        );
                      })}
                    </p>
                  </div>
                </div>
              </div>
              <div className={twoCols}>
                <p className="p-8">{branch.outro}</p>
                <h5 className="p-8">
                  Verlassen Sie sich auf CoMo Solution, um Ihr Unternehmen auf
                  dem Weg zum digitalen Vorreiter zu begleiten. Kontaktieren Sie
                  uns noch heute, um mehr darüber zu erfahren, wie wir Ihnen
                  dabei helfen können, Ihr Unternehmen zu optimieren.
                </h5>
              </div>
            </div>
          );
        })}
    </main>
  );
}
