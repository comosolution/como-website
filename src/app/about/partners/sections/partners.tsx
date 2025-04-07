"use client";
import Image from "next/image";
import partners from "../../../data/partners.json";

export default function Partners() {
  return (
    <section className="flex flex-col">
      {partners.map((partner, index) => {
        return (
          <div
            id={partner.id}
            className="flex flex-col lg:flex-row items-start gap-8 lg:gap-24 lg:pt-20 border-t border-solid border-t-white/10"
          >
            <Image
              key={index}
              src={`/logos/${partner.img}`}
              width={160}
              height={160}
              style={{ objectFit: "contain" }}
              alt={`Logo ${partner.name}`}
              className="mt-8"
            />
            <article>
              <h4 className="hidden lg:block">{partner.name}</h4>
              {partner.description?.map((d, index) => {
                return <p key={index}>{d}</p>;
              })}
              <p>
                <a href={partner.ref} target="_blank">
                  Mehr über {partner.name} erfahren
                </a>
              </p>
            </article>
          </div>
        );
      })}
    </section>
  );
}
