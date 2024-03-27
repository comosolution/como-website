"use client";
import benefits from "./../data/benefits.json";
import Button from "../components/button";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import { fourCols, header } from "../style/style";

export default function Benefits() {
  return (
    <section className="flex flex-col gap-8 py-16">
      <header className={`${header} justify-between`}>
        <h5 className="lg:w-3/4">
          Über 14 Jahre Innovation + Exzellenz – Ihr zuverlässiger Partner für
          maßgeschneiderte IT Lösungen und erstklassigen Support.
        </h5>
        <Button type="secondary" text="Mehr erfahren" href="/about/como" />
      </header>
      <div className={fourCols}>
        {benefits.map((benefit, index) => {
          return (
            <Slide key={index} direction="up" delay={index * 100} triggerOnce>
              <div className="flex flex-col items-start px-4">
                <Image
                  src={`/illustrations/circle-${index + 1}.svg`}
                  width={160}
                  height={160}
                  alt="Illustration"
                />
                <div className="flex flex-col gap-4">
                  <h4>{benefit.title}</h4>
                  <p className="muted">{benefit.sub}</p>
                </div>
              </div>
            </Slide>
          );
        })}
      </div>
    </section>
  );
}
