"use client";
import Image from "next/image";
import Link from "next/link";
import { SubNav } from "../config/nav";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import NavItem from "./navItem";

export default function Menu({ content }: { content: SubNav }) {
  const [open, setOpen] = useState(false);
  const outsideRef = useRef<any>(null);
  const path = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("scroll", () => setOpen(false));

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("scroll", () => setOpen(false));
    };
  });

  const handleOutsideClick = (e: Event) => {
    if (outsideRef.current && !outsideRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <span key={content.name} className="flex cursor-pointer" ref={outsideRef}>
      <span className="flex" onClick={() => setOpen(!open)}>
        <NavItem href={content.ref}>{content.name}</NavItem>
        <Image
          src={`/icons/chevron.svg`}
          width="24"
          height="24"
          alt="icon"
          className={`${open && "rotate-180"} transition-all hidden sm:inline`}
        />
      </span>
      {open && (
        <nav className="fixed top-16 -ml-4 p-4 rounded-2xl backdrop-blur-sm bg-neutral-900/80 ring-1 ring-white/10 shadow-2xl">
          {content.entries.map((entry) => {
            return (
              <Link key={entry.name} href={entry.ref}>
                <NavItem href={entry.ref}>{entry.name}</NavItem>
              </Link>
            );
          })}
        </nav>
      )}
    </span>
  );
}
