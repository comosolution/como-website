"use client";
import Image from "next/image";
import { twoCols } from "../style/style";

export default function Testimonials() {
  const testimonials = [
    {
      company: "1. FC Nürnberg e.V.",
      name: "Max Mustermann",
      img: "fcn.svg",
      content:
        "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.”",
    },
    {
      company: "Meinl Distribution GmbH",
      name: "Max Mustermann",
      img: "meinl.svg",
      content:
        "“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\nAt vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.”",
    },
  ];

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
                className="inverted"
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
