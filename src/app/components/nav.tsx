"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav } from "../config/nav";
import Menu from "./menu";
import NavItem from "./navItem";

export default function Nav() {
  const [prevPos, setPrevPos] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPos = window.scrollY;
      if (prevPos > currentPos || prevPos < 1) {
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
            <Link key={entry.name} href={entry.ref} passHref>
              <NavItem href={entry.ref}>{entry.name}</NavItem>
            </Link>
          ) : (
            entry.child && <Menu key={entry.name} content={entry.child} />
          );
        })}
      </nav>
    </header>
  );
}
