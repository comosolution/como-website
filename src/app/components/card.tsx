"use client";
import Image from "next/image";
import Link from "next/link";
import { card } from "../style/style";

export default function CardActionButton({
  name,
  icon,
  href,
  largeIcon,
}: {
  name: string;
  icon: string;
  href: string;
  largeIcon?: boolean;
}) {
  return (
    <Link href={href} className="tile">
      <div
        className={`flex items-center gap-6 mx-4 px-8 py-4 ${card} hover:bg-[rgba(var(--highlight-rgb),0.4)] transition-all cursor-pointer`}
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
  );
}
