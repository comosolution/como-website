"use client";
import Image from "next/image";
import { aboutNav, portfolioNav } from "../config/nav";
import Link from "next/link";
import { card, fourCols } from "../style/style";
import { Slide } from "react-awesome-reveal";

export default function Footer() {
  return (
    <div className="relative">
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        src="/footer.svg"
        alt=""
        className="absolute -bottom-8 -z-1 w-full footerCircles"
      />
      <main className="relative overflow-y-hidden">
        <Slide direction="up" triggerOnce>
          <footer className={`flex flex-col gap-16 m-8 px-8 py-10 ${card}`}>
            <Link href="/">
              <header className="flex items-center gap-4 px-8">
                <Image src="/logo.svg" width="72" height="72" alt="Logo" />
                <div id="logoLarge" className="flex flex-col gap-0">
                  <span>Collaboration +</span>
                  <span>Mobile</span>
                  <span>Solution</span>
                </div>
              </header>
            </Link>
            <div className={fourCols}>
              <div className="sm:col-span-2 px-8 py-4">
                <p>CoMo Solution GmbH</p>
                <p>Marktplatz 18</p>
                <p>91207 Lauf a. d. Pegnitz</p>
                <a href="mailto:info@como-solution.de">
                  <p>info@como-solution.de</p>
                </a>
                <Link href="tel:+4991231833700">
                  <p>+49 9123 18337-00</p>
                </Link>
                <Link href="https://www.linkedin.com/company/como-solution-gmbh">
                  <p>LinkedIn</p>
                </Link>
              </div>
              {[portfolioNav, aboutNav].map((nav) => {
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
        </Slide>
      </main>
    </div>
  );
}
