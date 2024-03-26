"use client";
import Image from "next/image";
import { Service } from "@/app/types";
import { Slide } from "react-awesome-reveal";

export default function Benefits({ data }: { data: Service }) {
  return (
    <section className="grid grid-cols-3 gap-16 px-8 py-16">
      {data.benefits.map((benefit, index) => {
        return (
          <Slide key={index} direction="up" delay={100 * index} triggerOnce>
            <div className="flex flex-col gap-4 ">
              <Image
                src="/illustrations/reward.svg"
                alt="Reward"
                width={120}
                height={140}
              />
              <h3>{benefit.title}</h3>
              <p className="muted">{benefit.sub}</p>
            </div>
          </Slide>
        );
      })}
    </section>
  );
}
