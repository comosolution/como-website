"use client";
import Feature, { FeatureList } from "@/app/components/feature";
import principles from "@/app/data/principles.json";
import { twoCols } from "@/app/style/style";

export default function Principles() {
  return (
    <section className={twoCols}>
      <h2 className="px-8">An diesen Prinzipien lassen wir uns messen</h2>
      <FeatureList>
        {principles.map((principle, index) => {
          return (
            <Feature key={index} title={principle.title} sub={principle.sub} />
          );
        })}
      </FeatureList>
    </section>
  );
}
