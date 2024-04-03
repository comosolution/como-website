"use client";
import { link } from "../style/style";
import { scrollTo } from "../utils/utils";

export default function PageNav() {
  const sections = [
    { name: "Übersicht", id: "overview" },
    { name: "Vorteile", id: "benefits" },
    { name: "Lösungen", id: "solutions" },
  ];

  return (
    <header className="min-w-screen flex justify-center">
      <nav className="hidden fixed top-1/2 -left-32 z-50 -rotate-90 center rounded-full lg:flex items-center gap-4 sm:gap-8 px-8 py-4">
        {sections.reverse().map((section) => {
          return (
            <p
              key={section.id}
              className={`navItem ${link}`}
              onClick={() => scrollTo(section.id, 96)}
            >
              {section.name}
            </p>
          );
        })}
      </nav>
    </header>
  );
}
