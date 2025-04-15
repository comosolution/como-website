"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SubNav } from "../config/nav";
import NavItem from "./navItem";

export default function Menu({ content }: { content: SubNav }) {
  const path = usePathname();

  return (
    <nav className="flex flex-col">
      <p>{content.name}</p>
      {content.entries.map((entry) => {
        return (
          <Link key={entry.name} href={entry.ref}>
            <NavItem href={entry.ref}>{entry.name}</NavItem>
          </Link>
        );
      })}
    </nav>
  );
}
