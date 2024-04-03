"use client";
import data from "../../data/services/cybersecurity.json";
import Services from "@/app/sections/services";
import ServiceHero from "../sections/hero";
import Benefits from "../sections/benefits";
import Solutions from "../sections/solutions";
import Contact from "../sections/contact";
import { servicePage } from "@/app/style/style";
import PageNav from "@/app/components/pageNav";

export default function Page() {
  return (
    <>
      <PageNav />
      <main className={servicePage}>
        <ServiceHero data={data} />
        <Benefits data={data} />
        <Solutions data={data} />
        <Contact />
        <Services title="Unser weiteres Angebot" filter={data.id} />
      </main>
    </>
  );
}
