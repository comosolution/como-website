"use client";
/* eslint-disable @next/next/no-img-element */
import { twoCols } from "@/app/style/style";
import { Service } from "@/app/types";
import Image from "next/image";
import { useState } from "react";
import { Collapse } from "react-collapse";

export default function Solutions({ data }: { data: Service }) {
  const [open, setOpen] = useState(-1);

  return (
    <section id="solutions" className="relative flex flex-col gap-4 p-8">
      <h3>Mögliche Lösungen für Sie</h3>
      <div className="flex flex-col gap-16">
        <div>
          {data.solutions.map((solution, index) => {
            return (
              <div
                key={index}
                className="border-solid border-t border-orange-600 "
              >
                <header
                  className="flex justify-between py-4"
                  onClick={() => setOpen(index)}
                >
                  <h2>{solution.name}</h2>
                  <Image
                    src="/icons/plus.svg"
                    alt="Plus"
                    width={64}
                    height={64}
                    style={
                      open === index
                        ? {
                            transform: "rotate(45deg)",
                            transition: "300ms all ease-in-out",
                          }
                        : {}
                    }
                  />
                </header>
                <Collapse isOpened={open === index}>
                  <div className={`${twoCols} pb-8`}>
                    <div className="flex flex-col">
                      {solution.sub && <h3>{solution.sub}</h3>}
                      <div className="flex flex-col gap-4 muted">
                        {solution.description.map((description, index) => {
                          return <p key={index}>{description}</p>;
                        })}
                      </div>
                    </div>
                    <div>
                      {solution.img ? (
                        <img
                          src={`/solutions/${solution.img}`}
                          alt={solution.name}
                          className="rounded-2xl"
                        />
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>
                </Collapse>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
