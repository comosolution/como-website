"use client";
import Image from "next/image";
import { scrollTo } from "../utils/utils";
import clients from "./../data/clients.json";
import Button from "../components/button";
import Circles from "../components/circles";

export default function Hero() {
  return (
    <>
      <Circles />
      <section
        id="hero"
        className="relative z-5 flex flex-col gap-16 items-center max-w-[650px] text-center py-4"
      >
        <h1>Ihr Partner für die digitale Transformation</h1>
        <p className="muted">
          Von der Lösungsentwicklung für die mobile Zusammenarbeit bis zum
          Management und der Absicherung Ihrer digitalen Infrastruktur haben wir
          immer die passende Lösung für Sie!
        </p>
        <div className="flex gap-4">
          <Button
            type="primary"
            text="Jetzt Kontakt aufnehmen"
            onClick={() => scrollTo("contact")}
          />
          <Button
            type="tertiary"
            icon="arrow"
            className="animate-bounce"
            onClick={() => scrollTo("services", 260)}
          />
        </div>
        <div className="flex gap-20">
          {clients.map((client, index) => {
            return (
              <Image
                key={index}
                src={`/logos/${client.img}`}
                width={48}
                height={48}
                style={{ objectFit: "contain" }}
                alt={`Logo ${client.name}`}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
