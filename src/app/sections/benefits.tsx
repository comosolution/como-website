"use client";
import { Button } from "@mantine/core";
import Image from "next/image";
import { fourCols, header } from "../style/style";
import benefits from "./../data/benefits.json";

export default function Benefits() {
  return (
    <section className="flex flex-col gap-8 py-16">
      <header className={`${header} justify-between`}>
        <h5 className="lg:w-3/4 px-4">
          Über 14 Jahre Innovation + Expertise – Ihr zuverlässiger Partner für
          maßgeschneiderte IT Lösungen und erstklassigen Support.
        </h5>
        <Button component="a" variant="light" href="/about/como">
          Mehr erfahren
        </Button>
      </header>
      <div className={fourCols}>
        {benefits.map((benefit, index) => {
          return (
            <div key={index} className="flex flex-col items-start px-4">
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
          );
        })}
      </div>
    </section>
  );
}
