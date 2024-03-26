"use client";
import Image from "next/image";
import Link from "next/link";
import { mainNav, SubNav } from "../config/nav";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { scrollTo } from "../utils/utils";
import Button from "./button";

export default function Nav() {
  return (
    <header className="min-w-screen flex justify-center">
      <nav className="fixed top-8 z-50 center rounded-full flex items-center gap-8 pl-8 pr-2 py-2 backdrop-blur-sm bg-neutral-900/80">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="CoMo Logo" width="36" height="36" />
          <div id="logoSmall" className="flex flex-col gap-0">
            <span>Collaboration +</span>
            <span>Mobile</span>
            <span>Solution</span>
          </div>
        </Link>
        <div className="flex items-center gap-6">
          {mainNav.map((entry) => {
            return entry.ref ? (
              <Link key={entry.name} href={entry.ref}>
                <NavItem href={entry.ref}>{entry.name}</NavItem>
              </Link>
            ) : entry.child ? (
              <Collapse key={entry.name} content={entry.child} />
            ) : (
              <Button
                key={entry.name}
                text={entry.name}
                type="primary"
                onClick={() => scrollTo("contact")}
              />
            );
          })}
        </div>
      </nav>
    </header>
  );
}

function Collapse({ content }: { content: SubNav }) {
  const [open, setOpen] = useState(false);
  const outsideRef = useRef<any>(null);
  const path = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
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
        <a>
          <NavItem href={content.ref}>{content.name}</NavItem>
        </a>
        <Image
          src={`/icons/chevron.svg`}
          width="24"
          height="24"
          alt="icon"
          className={`${open && "rotate-180"} transition-all`}
        />
      </span>
      {open && (
        <div className="fixed top-16 -ml-4 p-4 rounded-2xl backdrop-blur-sm bg-neutral-900/80">
          {content.entries.map((entry) => {
            return (
              <Link key={entry.name} href={entry.ref}>
                <NavItem href={entry.ref}>{entry.name}</NavItem>
              </Link>
            );
          })}
        </div>
      )}
    </span>
  );
}

function NavItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const path = usePathname();
  const active =
    (path.includes(href) && href !== "/") || (path === "/" && href === "/");

  return <p className={active ? "text-orange-500" : ""}>{children}</p>;
}
