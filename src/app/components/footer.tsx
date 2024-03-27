"use client";
import Image from "next/image";
import { aboutNav, serviceNav } from "../config/nav";
import Link from "next/link";
import { fourCols } from "../style/style";

export default function Footer() {
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
        <div className={fourCols}>
          <div className="sm:col-span-2 px-8 py-4">
            <p>CoMo Solution GmbH</p>
            <p>Marktplatz 18</p>
            <p>91207 Lauf a. d. Pegnitz</p>
            <Link href="mailto:info@como-solution.de">
              <p>info@como-solution.de</p>
            </Link>
            <Link href="tel:+4991231833700">
              <p>+49 9123 18337-00</p>
            </Link>
            <Link href="https://www.linkedin.com/company/como-solution-gmbh">
              <p>LinkedIn</p>
            </Link>
          </div>
          {[serviceNav, aboutNav].map((nav) => {
            return (
              <div key={nav.name} className="px-8 py-4">
                <p>{nav.name}</p>
                {nav.entries.map((entry) => {
                  return (
                    <Link key={entry.name} href={entry.ref}>
                      <p>{entry.name}</p>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className={fourCols}>
          <p className="sm:col-span-2 px-8">© 2024</p>
          <Link href="/legal/privacy" className="px-8">
            <p>Datenschutz</p>
          </Link>
          <Link href="/legal/imprint" className="px-8">
            <p>Impressum</p>
          </Link>
        </div>
      </footer>
    </div>
  );
}
