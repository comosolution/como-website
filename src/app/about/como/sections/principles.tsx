"use client";
import Feature, { FeatureList } from "@/app/components/feature";
import principles from "@/app/data/principles.json";
import { twoColumns } from "@/app/style/style";
import { Slide } from "react-awesome-reveal";

export default function Principles() {
  return (
    <section className="flex gap-4 flex-col md:flex-row">
      <h2 className={twoColumns}>An diesen Prinzipien lassen wir uns messen</h2>
      <FeatureList>
        {principles.map((principle, index) => {
          return (
            <Slide key={index} direction="up" triggerOnce>
              <Feature title={principle.title} sub={principle.sub} />
            </Slide>
          );
        })}
      </FeatureList>
    </section>
  );
}
