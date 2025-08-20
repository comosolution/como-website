"use client";
import Link from "next/link";
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
    <Link
      href={href}
      className={`tile flex flex-col items-center gap-0.5 p-4 rounded-xl hover:bg-[rgba(var(--highlight-rgb),0.4)] hover:text-orange-600 transition-all cursor-pointer`}
    >
      <Icon size={48} stroke={2} />
      <h5 className="text-center">{name}</h5>
    </Link>
  );
}
