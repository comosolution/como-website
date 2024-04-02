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
      <nav className="fixed bottom-4 z-50 center rounded-full flex items-center gap-4 sm:gap-8 px-8 py-4 backdrop-blur-sm bg-neutral-900/80">
        {sections.map((section) => {
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
