"use client";
import principles from "@/app/data/principles.json";
import { twoCols } from "@/app/style/style";

export default function Principles() {
  return (
    <section className={twoCols}>
      <h2 className="px-8">An diesen Prinzipien lassen wir uns messen</h2>
      <div className="flex flex-col gap-8 p-8">
        {principles.map((principle, index) => {
          return (
            <div key={index}>
              <h4>{principle.title}</h4>
              <p className="muted">{principle.sub}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
