"use client";
import Image from "next/image";
import partners from "./../../data/partners.json";
import data from "./../../data/services/collaboration.json";
import ServicesOverview from "../sections/services";
import Services from "@/app/sections/services";
import { scrollTo } from "@/app/utils/utils";
import Button from "@/app/components/button";

export default function Page() {
  return (
    <main className="flex flex-col gap-8 p-8">
      <div className="bg-gradient pb-8">
        <header className="px-8">
          <div className="flex items-end gap-2">
            <Image
              src={`/services/${data.id}.svg`}
              alt="Icon"
              width={128}
              height={64}
            />
            <h4 className={data.id}>{data.name}</h4>
          </div>
          <h1>{data.title}</h1>
        </header>
        <section className="flex items-center gap-4 px-8 py-32">
          <h5 className="w-3/4 muted">{data.sub}</h5>
          <div className="w-1/4 flex flex-col items-end gap-8">
            <p className="muted">
              <b>Unsere Partner</b>
            </p>
            {partners
              .filter((partner) => partner.category.includes(data.id))
              .map((partner, index) => {
                return (
                  <Image
                    key={index}
                    src={`/logos/${partner.img}`}
                    width={120}
                    height={120}
                    style={{ objectFit: "contain", opacity: 0.8 }}
                    alt={`Logo ${partner.name}`}
                  />
                );
              })}
          </div>
        </section>
        <ServicesOverview id={data.id} />
      </div>
      <section className="grid grid-cols-3 gap-16 px-8 py-16">
        {data.benefits.map((benefit, index) => {
          return (
            <div key={index} className="flex flex-col gap-4 ">
              <Image
                src="/illustrations/reward.svg"
                alt="Reward"
                width={120}
                height={140}
              />
              <h3>{benefit.title}</h3>
              <p className="muted">{benefit.sub}</p>
            </div>
          );
        })}
      </section>
      <section className="flex flex-col gap-4 px-8">
        <h3>Damit arbeiten Sie leichter zusammen</h3>
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
                  <p>{solution.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="flex justify-between items-center gap-8 p-8">
        <h2>
          Interessiert? <br />
          Nichts passendes gefunden?
        </h2>
        <Button
          type="primary"
          text="Jetzt kontaktieren"
          icon="arrow"
          onClick={() => scrollTo("contact")}
        />
      </section>
      <Services title="Unser weiteres Angebot" filter={data.id} />
    </main>
  );
}
