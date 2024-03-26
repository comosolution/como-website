"use client";
import data from "../../data/services/cybersecurity.json";
import Services from "@/app/sections/services";
import ServiceHero from "../sections/hero";
import Benefits from "../sections/benefits";
import Solutions from "../sections/solutions";
import Contact from "../sections/contact";

export default function Page() {
  return (
    <main className="flex flex-col gap-8 p-8">
      <ServiceHero data={data} />
      <Benefits data={data} />
      <Solutions data={data} />
      <Contact />
      <Services title="Unser weiteres Angebot" filter={data.id} />
    </main>
  );
}
