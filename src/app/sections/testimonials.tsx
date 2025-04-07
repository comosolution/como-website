"use client";
import Image from "next/image";
import { twoCols } from "../style/style";
import testimonials from "./../data/testimonials.json";

export default function Testimonials() {
  return (
    <section className="flex flex-col gap-4 py-16">
      <h2 className="px-8">Innovative Teams setzen auf uns</h2>
      <div className={twoCols}>
        {testimonials.map((testimonial, index) => {
          return (
            <div key={index} className="flex flex-col gap-8 p-8">
              <Image
                key={index}
                src={`/logos/${testimonial.img}`}
                width={48}
                height={48}
                style={{ objectFit: "contain" }}
                alt={`Logo ${testimonial.name}`}
              />
              <p className="muted">
                <i>{testimonial.content}</i>
              </p>
              <div className="text-orange-500">
                <h4>{testimonial.name}</h4>
                <p className="opacity-60">{testimonial.company}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
