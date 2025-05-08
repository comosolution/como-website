"use client";
import Image from "next/image";
import { defaultPadding, highlight, twoCols } from "../style/style";
import services from "./../data/services.json";

export default function Services() {
  return (
    <section className="mt-32">
      <h2 className="py-8 text-center">
        Wir finden Lösungen. <span className={highlight}>Für Sie!</span>
      </h2>
      <div className={twoCols}>
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col gap-4 ${defaultPadding}`}
            >
              <Image
                src={`/services/${service.icon}.svg`}
                alt={service.name}
                width={128}
                height={64}
              />
              <div className="flex flex-col gap-2">
                <h3 className={service.id}>{service.name}</h3>
                <p className="muted">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
