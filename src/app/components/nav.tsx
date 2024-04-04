"use client";
import Image from "next/image";
import Link from "next/link";
import { mainNav, SubNav } from "../config/nav";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { scrollTo } from "../utils/utils";
import Button from "./button";

export default function Nav() {
  const [prevPos, setPrevPos] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPos = window.scrollY;
      if (prevPos > currentPos || prevPos < 200) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }
      setPrevPos(currentPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevPos]);

  return (
    <header
      className={`fixed  ${
        headerVisible ? "top-0" : "-top-24"
      } z-10 w-screen flex justify-between px-4 p-2 sm:px-16 sm:py-4 backdrop-blur-sm bg-neutral-900/20 transition-all duration-300`}
    >
      <Link href="/" className="flex items-center gap-1 sm:gap-2">
        <Image src="/logo.svg" alt="CoMo Logo" width="48" height="48" />
        <div id="logoSmall" className="hidden md:flex flex-col gap-0">
          <span>Collaboration +</span>
          <span>Mobile</span>
          <span>Solution</span>
        </div>
      </Link>
      <nav className="flex items-center gap-6">
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
              type="contact"
              onClick={() => scrollTo("contact")}
            />
          );
        })}
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
        <nav className="fixed top-16 -ml-4 p-4 rounded-2xl backdrop-blur-sm bg-neutral-900/80">
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

function NavItem({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  const path = usePathname();
  const active =
    (path.includes(href) && href !== "/") || (path === "/" && href === "/");

  return (
    <p className={`navItem ${active ? "text-rose-600" : "link"} ${className}`}>
      {children}
    </p>
  );
}
