"use client";
import { Button } from "@mantine/core";
import Image from "next/image";
import Divider from "../components/divider";
import { defaultPadding, highlight, twoCols } from "../style/style";
import benefits from "./../data/benefits.json";

export default function Benefits() {
  return (
    <div className="relative mt-32">
      <div className="absolute left-1/2 -translate-x-1/2 -z-10 w-screen h-full bg-[var(--light)] clip-angled" />
      <section className={`${twoCols} gap-y-32 items-center py-32 lg:py-0`}>
        <div className={defaultPadding}>
          <h2>Über 14 Jahre Innovation und Expertise</h2>
          <Divider />
          <h3>
            Ihr zuverlässiger Partner für{" "}
            <span className={highlight}>maßgeschneiderte IT Lösungen</span> und
            erstklassigen Support.
          </h3>
          <Button
            component="a"
            variant="light"
            href="/about/como"
            className="mt-8"
          >
            Mehr erfahren
          </Button>
        </div>
        <div className="flex flex-col gap-16">
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
                  className="-mt-28"
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
