"use client";
import Image from "next/image";
import { aboutNav, legalNav, serviceNav } from "../config/nav";
import { scrollTo } from "../utils/utils";

export default function Footer() {
  const column = "px-8 w-1/4";

  return (
    <div className="relative">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        src="/footer.svg"
        alt=""
        className="absolute -bottom-8 -z-1 w-full footerCircles"
      />
      <footer className="flex flex-col gap-16 mb-8 px-8 py-16 rounded-2xl backdrop-blur-sm bg-neutral-900/10">
        <header className="flex items-center gap-4 px-8">
          <Image src="/logo.svg" width="72" height="72" alt="Logo" />
          <div id="logoLarge" className="flex flex-col gap-0">
            <span>Collaboration +</span>
            <span>Mobile</span>
            <span>Solution</span>
          </div>
        </header>
        <div className="flex gap-4">
          <div className={column}>
            <p>CoMo Solution GmbH</p>
            <p>Marktplatz 18</p>
            <p>91207 Lauf a. d. Pegnitz</p>
            <a href="mailto:info@como-solution.de">
              <p>info@como-solution.de</p>
            </a>
            <a href="tel:+4991231833700">
              <p>+49 9123 18337-00</p>
            </a>
            <a href="https://www.linkedin.com/company/como-solution-gmbh">
              <p>LinkedIn</p>
            </a>
          </div>
          {[serviceNav, aboutNav, legalNav].map((nav) => {
            return (
              <div key={nav.name} className={column}>
                <p>{nav.name}</p>
                {nav.entries.map((entry) => {
                  return (
                    <a key={entry.name} href={entry.ref}>
                      <p>{entry.name}</p>
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="flex gap-4">
          <p className="px-8 w-1/2">© 2024</p>
          <p
            className="px-8 w-1/2 flex gap-2 cursor-pointer muted hover:text-orange-600 transition-all"
            onClick={() => scrollTo("top")}
          >
            Nach oben
            <Image
              src="/icons/arrow.svg"
              width="20"
              height="20"
              alt="arrow"
              className="rotate-180"
            />
          </p>
        </div>
      </footer>
    </div>
  );
}
