"use client";
import { Button } from "@mantine/core";
import Image from "next/image";
import { fourCols, header, highlight } from "../style/style";
import benefits from "./../data/benefits.json";

export default function Benefits() {
  return (
    <div className="relative isolate -mx-7">
      <div className="absolute w-full h-full -z-10 bg-[var(--light)] clip-angled" />
      <section className="flex flex-col gap-16 px-8 py-32">
        <header className={`${header} justify-between`}>
          <h5 className="lg:w-3/4 px-4">
            Über 14 Jahre Innovation + Expertise – Ihr zuverlässiger Partner für{" "}
            <span className={highlight}>maßgeschneiderte IT Lösungen</span> und
            erstklassigen Support.
          </h5>
          <Button component="a" variant="light" href="/about/como">
            Mehr erfahren
          </Button>
        </header>
        <div className={fourCols}>
          {benefits.map((benefit, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-start p-8 rounded-xl text-white bg-[var(--layers)]"
              >
                <Image
                  src={`/illustrations/circle-${index + 1}.svg`}
                  width={160}
                  height={160}
                  alt="Illustration"
                  className="-mt-24"
                />
                <div className="flex flex-col gap-4">
                  <h4>{benefit.title}</h4>
                  <p>{benefit.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
