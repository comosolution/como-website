"use client";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { scrollTo } from "../utils/utils";
import partners from "./../data/partners.json";

export default function PartnersMarquee({ scroll }: { scroll?: boolean }) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const size = isMobile ? 96 : 128;

  return (
    <Marquee
      gradient
      gradientColor="rgb(var(--background-rgb))"
      autoFill
      pauseOnHover
    >
      <div className="min-h-24 md:min-h-32 flex justify-between items-center gap-16 px-8 overflow-hidden">
        {partners.map((partner, index) => {
          return scroll ? (
            <Image
              key={index}
              src={`/logos/${partner.img}`}
              width={size}
              height={size}
              style={{ objectFit: "contain", cursor: "pointer" }}
              alt={`Logo ${partner.name}`}
              onClick={() => scrollTo(partner.id)}
              className="inverted"
            />
          ) : (
            <Link key={index} href={`/about/partners#${partner.id}`}>
              <Image
                src={`/logos/${partner.img}`}
                width={size}
                height={size}
                style={{ objectFit: "contain" }}
                alt={`Logo ${partner.name}`}
                className="inverted"
              />
            </Link>
          );
        })}
      </div>
    </Marquee>
  );
}
