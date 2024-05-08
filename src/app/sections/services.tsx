"use client";
import Image from "next/image";
import Tile from "./../components/tile";
import services from "./../data/services.json";
import { Slide } from "react-awesome-reveal";
import { fourCols } from "../style/style";

export default function Services() {
  return (
    <section>
      <h2 className="px-8 py-4 text-center">Unser Fokus</h2>
      <Slide direction="up" triggerOnce>
        <div className={fourCols}>
          {services.map((service, index) => {
            return (
              <Tile key={index} className="gap-8">
                <Image
                  src={`/services/${service.icon}.svg`}
                  alt={service.name}
                  width={128}
                  height={64}
                />
                <div className="flex flex-col gap-2">
                  <h4 className={service.id}>{service.name}</h4>
                  <p className="muted">{service.description}</p>
                </div>
              </Tile>
            );
          })}
        </div>
      </Slide>
    </section>
  );
}
