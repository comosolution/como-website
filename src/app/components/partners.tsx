"use client";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { scrollTo } from "../utils/utils";
import partners from "./../data/partners.json";

export default function PartnersMarquee({ scroll }: { scroll?: boolean }) {
  return (
    <Marquee gradient gradientColor="#ffffff" autoFill pauseOnHover>
      <div className="flex justify-between items-center gap-24 p-12 overflow-hidden">
        {partners.map((partner, index) => {
          return scroll ? (
            <Image
              key={index}
              src={`/logos/${partner.img}`}
              width={160}
              height={160}
              style={{ objectFit: "contain", cursor: "pointer" }}
              alt={`Logo ${partner.name}`}
              onClick={() => scrollTo(partner.id)}
              className="inverted"
            />
          ) : (
            <Link key={index} href={`/about/partners#${partner.id}`}>
              <Image
                src={`/logos/${partner.img}`}
                width={160}
                height={160}
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
