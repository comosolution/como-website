import { Service } from "@/app/types";
import { scrollTo } from "@/app/utils/utils";

export default function Solutions({ data }: { data: Service }) {
  return (
    <section className="flex flex-col gap-4 px-8">
      <h3>Mögliche Lösungen für Sie</h3>
      <div className="flex gap-4">
        <aside className="w-1/4 h-min sticky top-8 flex flex-col gap-2">
          {data.solutions.map((solution, index) => {
            return (
              <p
                key={index}
                className="muted cursor-pointer hover:text-orange-600 transition-all"
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
              <article key={index} className="p-4">
                <h2 id={solution.name.replaceAll(" ", "-").toLowerCase()}>
                  {solution.name}
                </h2>
                {solution.sub && <h3>{solution.sub}</h3>}
                {solution.description.map((description, index) => {
                  return <p key={index}>{description}</p>;
                })}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
