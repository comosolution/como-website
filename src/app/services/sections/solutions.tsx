/* eslint-disable @next/next/no-img-element */
import { link, twoCols } from "@/app/style/style";
import { Service } from "@/app/types";
import { scrollTo } from "@/app/utils/utils";

export default function Solutions({ data }: { data: Service }) {
  return (
    <section
      id="solutions"
      className="relative flex flex-col gap-4 p-8 rounded-2xl backdrop-blur-sm bg-neutral-900/80 "
    >
      <h3>Mögliche Lösungen für Sie</h3>
      <div className="flex flex-col gap-16">
        <div className="flex gap-8 flex-wrap">
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
        </div>
        <div>
          {data.solutions.map((solution, index) => {
            return (
              <div
                key={index}
                className={`${twoCols} justify-items-center py-16`}
              >
                <div>
                  <header className="flex flex-col pb-8">
                    <h2 id={solution.name.replaceAll(" ", "-").toLowerCase()}>
                      {solution.name}
                    </h2>
                    {solution.sub && <h3>{solution.sub}</h3>}
                  </header>
                  <div className="flex flex-col gap-4 pr-4 muted">
                    {solution.description.map((description, index) => {
                      return <p key={index}>{description}</p>;
                    })}
                  </div>
                </div>
                <div className="lg:h-min lg:sticky top-20">
                  {solution.img ? (
                    <img
                      src={`/solutions/${solution.img}`}
                      alt={solution.name}
                      className="rounded-2xl"
                    />
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
