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
        className="relative z-5 flex flex-col gap-16 items-center max-w-[800px] text-center pb-4"
      >
        <h1>Ihr Partner für smarte IT-Lösungen</h1>
        <p className="max-w-[680px] muted">
          Von der Lösungsentwicklung für die mobile Zusammenarbeit bis zum
          Management und der Absicherung Ihrer digitalen Infrastruktur haben wir
          immer die passende Lösung für Sie.
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
        <Button
          type="tertiary"
          icon="arrow"
          className="animate-bounce"
          onClick={() => scrollTo("services", 260)}
        />
      </section>
    </>
  );
}
