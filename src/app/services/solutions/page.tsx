"use client";
import data from "../../data/services/solutions.json";
import Services from "@/app/sections/services";
import ServiceHero from "../sections/hero";
import Benefits from "../sections/benefits";
import Solutions from "../sections/solutions";
import Contact from "../sections/contact";
import { servicePage } from "@/app/style/style";
import { Service } from "@/app/types";

export default function Page() {
  return (
    <main className={servicePage}>
      <ServiceHero data={data as Service} />
      <Benefits data={data as Service} />
      <Solutions data={data as Service} />
      <Contact />
      <Services title="Unser weiteres Angebot" filter={data.id} />
    </main>
  );
}
