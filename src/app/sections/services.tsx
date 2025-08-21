"use client";
import Image from "next/image";
import { defaultPadding, highlight, twoCols } from "../style/style";

export default function Services() {
  const services = [
    {
      id: "collaboration",
      name: "Collaboration",
      description:
        "Stärken Sie Ihr Team mit unseren smarten Tools für nahtlose Kollaboration, um die Produktivität zu steigern und Innovationen zu fördern.",
      icon: "collaboration",
    },
    {
      id: "mobile",
      name: "Mobile",
      description:
        "Bleiben Sie auch unterwegs verbunden und produktiv mit unseren modernen Lösungen für mobiles Arbeiten und erhöhen Sie die Effizienz überall dort, wo Sie sind.",
      icon: "mobile",
    },
    {
      id: "solutions",
      name: "Solutions",
      description:
        "Optimieren Sie Ihre Abläufe mit unseren Software- & Managed-IT Lösungen und konzentrieren Sie sich auf das Wachstum, während wir uns um die technischen Details kümmern.",
      icon: "solutions",
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      description:
        "Schützen Sie Ihr Unternehmen vor Cyberangriffen mit unseren KI-gestützten Sicherheitsmaßnahmen und bewahren Sie Ihre Daten und Ihren Ruf.",
      icon: "cybersecurity",
    },
  ];

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
