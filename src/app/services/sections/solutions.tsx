/* eslint-disable @next/next/no-img-element */
import { link } from "@/app/style/style";
import { Service } from "@/app/types";
import { scrollTo } from "@/app/utils/utils";
import Image from "next/image";

export default function Solutions({ data }: { data: Service }) {
  return (
    <section id="solutions" className="flex flex-col gap-4 px-8">
      <h3>Mögliche Lösungen für Sie</h3>
      <div className="flex gap-4">
        <aside className="hidden w-1/4 h-min sticky top-8 lg:flex flex-col gap-2 pt-10">
          {data.solutions.map((solution, index) => {
            return (
              <p
                key={index}
                className={link}
                onClick={() =>
                  scrollTo(solution.name.replaceAll(" ", "-").toLowerCase())
                }
              >
                {solution.name}
              </p>
            );
          })}
        </aside>
        <div>
          {data.solutions.map((solution, index) => {
            return (
              <article key={index} className="lg:px-4">
                <h2 id={solution.name.replaceAll(" ", "-").toLowerCase()}>
                  {solution.name}
                </h2>
                {solution.sub && <h3>{solution.sub}</h3>}
                {solution.description.map((description, index) => {
                  return <p key={index}>{description}</p>;
                })}

                {solution.img && (
                  <img src={`/solutions/${solution.img}`} alt={solution.name} />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
