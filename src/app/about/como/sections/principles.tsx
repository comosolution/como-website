"use client";
import Feature, { FeatureList } from "@/app/components/feature";
import principles from "@/app/data/principles.json";
import { twoCols } from "@/app/style/style";
import { Slide } from "react-awesome-reveal";

export default function Principles() {
  return (
    <section className={twoCols}>
      <h2>An diesen Prinzipien lassen wir uns messen</h2>
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
