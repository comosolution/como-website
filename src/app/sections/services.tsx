"use client";
import Image from "next/image";
import Tile from "./../components/tile";
import services from "./../data/services.json";

export default function Services({
  title,
  filter,
}: {
  title?: string;
  filter?: string;
}) {
  return (
    <section id="services">
      {title && <h3 className="px-8 py-4">{title}</h3>}
      <div className="flex gap-4">
        {services
          .filter((service) => service.id !== filter)
          .map((service, index) => {
            return (
              <Tile
                key={index}
                className="gap-8"
                href={`/services/${service.icon}`}
              >
                <Image
                  src={`/services/${service.icon}.svg`}
                  alt={service.name}
                  width={128}
                  height={64}
                />
                <div className="flex flex-col gap-2">
                  <h4 className={service.id}>{service.name}</h4>
                  <p className="opacity-65">{service.description}</p>
                </div>
              </Tile>
            );
          })}
      </div>
    </section>
  );
}
