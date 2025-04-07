"use client";
import Image from "next/image";
import Tile from "../components/tile";
import { twoCols } from "../style/style";
import services from "./../data/services.json";

export default function Services() {
  return (
    <section>
      <h2 className="py-8 text-center">Unser Fokus</h2>
      <div className={twoCols}>
        {services.map((service, index) => {
          return (
            <Tile key={index} className="gap-4">
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
    </section>
  );
}
