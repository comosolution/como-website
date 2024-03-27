"use client";
import Marquee from "react-fast-marquee";

export default function ServicesOverview() {
  const serviceList = [
    "analysieren",
    "beraten",
    "planen",
    "entwickeln",
    "realisieren",
    "migrieren",
    "installieren",
    "managen",
    "schulen",
    "supporten",
  ];

  return (
    <Marquee gradient gradientColor="black" speed={90}>
      {serviceList.map((service, index) => {
        return (
          <h2 key={index} className="p-1">
            Wir {service}.
          </h2>
        );
      })}
    </Marquee>
  );
}
