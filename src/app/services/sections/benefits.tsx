"use client";
import Image from "next/image";
import { Service } from "@/app/types";
import { Slide } from "react-awesome-reveal";
import PartnersMarquee from "@/app/components/partners";

export default function Benefits({ data }: { data: Service }) {
  return (
    <section id="benefits">
      <div className="grid lg:grid-cols-3 gap-16 px-8 py-16">
        {data.benefits.map((benefit, index) => {
          return (
            <Slide key={index} direction="up" delay={100 * index} triggerOnce>
              <div className="flex flex-col gap-4">
                <Image
                  src={`/illustrations/circle-${index + 1}.svg`}
                  alt="Reward"
                  width={140}
                  height={140}
                />
                <h3>{benefit.title}</h3>
                <p className="muted">{benefit.sub}</p>
              </div>
            </Slide>
          );
        })}
      </div>
      <PartnersMarquee />
    </section>
  );
}
