"use client";
import Image from "next/image";
import Circles from "../components/circles";
import clients from "./../data/clients.json";

export default function Hero() {
  return (
    <>
      <Circles />
      <section
        id="hero"
        className="relative z-5 flex flex-col gap-8 items-center max-w-[880px] text-center py-16"
      >
        <h1>Wir sind die Lösungsfinder.</h1>
        <p className="max-w-[640px]">
          Wir sind nicht nur IT-Dienstleister für den Mittelstand, sondern
          Lösungsfinder und -architekten. Sagen Sie uns, was Sie für Ihre
          sichere digitale Transformation brauchen: Wir setzen es um und
          begleiten Sie in Ihre Zukunft.
        </p>
        <div className="flex gap-20">
          {clients.map((client, index) => {
            return (
              <Image
                key={index}
                src={`/logos/${client.img}`}
                width={48}
                height={48}
                style={{ objectFit: "contain", opacity: 0.5 }}
                alt={`Logo ${client.name}`}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
