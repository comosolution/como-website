"use client";
import { useEffect } from "react";

export default function Sub() {
  const serviceList = [
    "analysieren,",
    "beraten,",
    "planen,",
    "entwickeln,",
    "realisieren,",
    "migrieren,",
    "installieren,",
    "managen,",
    "supporten.",
  ];

  useEffect(() => {
    for (let i = 0; i < serviceList.length - 1; i++) {
      window.addEventListener("scroll", () => {
        const element = document.querySelector(`.service-${i}`)! as HTMLElement;
        if (element !== null) {
          if (
            element.getBoundingClientRect().top + element.offsetHeight <
            window.innerHeight / 2
          ) {
            element.classList.add("invisible");
          } else {
            element.classList.remove("invisible");
          }
        }
      });
    }
  });

  return (
    <section className="relative z-5 flex gap-2 pt-16">
      <h2 className="sticky self-start top-1/2">
        <span className="hidden lg:inline">Wir sind die CoMo. </span>Wir{" "}
      </h2>
      <div>
        {serviceList.map((service, index) => {
          return (
            <h2 key={index} className={`service service-${index}`}>
              {service}
            </h2>
          );
        })}
      </div>
    </section>
  );
}
