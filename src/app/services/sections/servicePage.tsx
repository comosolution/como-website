"use client";
import PageNav from "@/app/components/pageNav";
import { servicePage } from "@/app/style/style";
import Benefits from "./benefits";
import Contact from "./contact";
import ServiceHero from "./hero";
import Solutions from "./solutions";
import Services from "@/app/sections/services";

export default function ServicePage({ data }: { data: any }) {
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
