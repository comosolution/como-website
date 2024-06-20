"use client";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";
import { card } from "../style/style";

export default function CardActionButton({
  name,
  icon,
  href,
  delay,
  largeIcon,
}: {
  name: string;
  icon: string;
  href: string;
  delay?: number;
  largeIcon?: boolean;
}) {
  return (
    <Slide direction="up" delay={delay} triggerOnce>
      <Link href={href} className="tile">
        <div
          className={`flex items-center gap-6 mx-4 px-8 py-4 ${card} transition-all hover:bg-neutral-900 cursor-pointer`}
        >
          <Image
            src={icon}
            alt="Icon"
            width={largeIcon ? 120 : 48}
            height={largeIcon ? 120 : 48}
          />
          <h2>{name}</h2>
        </div>
      </Link>
    </Slide>
  );
}
