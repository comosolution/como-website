"use client";
import { Slide } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";

export default function CardActionButton({
  name,
  icon,
  href,
  delay,
}: {
  name: string;
  icon: string;
  href: string;
  delay?: number;
}) {
  return (
    <Link href={href} className="tile">
      <Slide direction="up" delay={delay} triggerOnce>
        <div className="flex items-center gap-6 px-8 py-4 rounded-2xl backdrop-blur-sm bg-neutral-900/70 transition-all hover:bg-neutral-900 cursor-pointer">
          <Image src={icon} alt="Icon" width={48} height={48} />
          <h2>{name}</h2>
        </div>
      </Slide>
    </Link>
  );
}
