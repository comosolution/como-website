"use client";
import Link from "next/link";
import { card } from "../style/style";
import { icons } from "../utils/icons";

export default function CardActionButton({
  name,
  id,
  href,
}: {
  name: string;
  id: string;
  href: string;
}) {
  const Icon = icons[id];

  return (
    <Link href={href} className={card}>
      <Icon size={48} stroke={2} />
      <h5 className="text-center">{name}</h5>
    </Link>
  );
}
