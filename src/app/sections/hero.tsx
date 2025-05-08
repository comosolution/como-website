/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Circles from "../components/circles";
import { scrollTo } from "../utils/utils";
import clients from "./../data/clients.json";

export default function Hero() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1440px)");
  const size = isMobile ? 48 : 72;

  return (
    <>
      <Circles />
      <div
        id="hero"
        className="relative w-full min-h-screen overflow-hidden -mt-32"
      >
        <img
          alt="Hero Image"
          src={
            isMobile ? "/hero_sm.jpg" : isTablet ? "/hero_md.jpg" : "/hero.jpg"
          }
          className="absolute inset-0 w-full min-h-screen object-cover object-right"
        />
        <div className="absolute inset-0 w-full min-h-screen bg-gradient-to-tr from-[rgba(var(--background-rgb),1)] via-[rgba(var(--background-rgb),0.1)] to-transparent" />
        <section
          id="hero"
          className="relative z-5 flex flex-col gap-8 items-start justify-end min-h-screen md:max-w-[800px] px-8 md:px-16 pb-32"
        >
          <h1>Wir sind die Lösungsfinder</h1>
          <p className="max-w-[540px]">
            Wir sind nicht nur IT-Dienstleister für den Mittelstand, sondern
            Lösungsfinder und -architekten. Sagen Sie uns, was Sie für Ihre
            sichere digitale Transformation brauchen: Wir setzen es um und
            begleiten Sie in Ihre Zukunft.
          </p>
          <div className="flex gap-2">
            <Button
              onClick={() => scrollTo("sub", 96)}
              leftSection={<IconChevronDown size={16} />}
            >
              Mehr erfahren
            </Button>
            <Button
              variant="light"
              component={Link}
              href="/contact"
              className="backdrop-blur-md"
            >
              Kontaktieren
            </Button>
          </div>
        </section>
      </div>
      <div className="grid grid-cols-4 justify-items-center items-center gap-8 p-8 bg-[var(--layers)]">
        {clients.map((client, index) => {
          return (
            <Image
              key={index}
              src={`/logos/${client.img}`}
              width={size}
              height={size}
              style={{ objectFit: "contain" }}
              alt={`Logo ${client.name}`}
            />
          );
        })}
      </div>
    </>
  );
}
