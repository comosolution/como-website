"use client";
import ScrollSpy from "react-scrollspy-navigation";
import { link } from "../style/style";
import { scrollTo } from "../utils/utils";

export default function PageNav() {
  const sections = [
    { name: "Übersicht", id: "overview" },
    { name: "Vorteile", id: "benefits" },
    { name: "Lösungen", id: "solutions" },
  ];

  const handleClick = (e: any, id: string) => {
    e.preventDefault();
    scrollTo(id, 64);
  };

  return (
    <ScrollSpy activeClass="nav-active">
      <header className="min-w-screen flex justify-center">
        <nav className="hidden fixed top-64 -right-24 z-50 rotate-90 rounded-full lg:flex items-center gap-8 px-4 py-2 backdrop-blur-sm bg-neutral-900/80">
          {sections.map((section) => {
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`navItem ${link}`}
                onClick={(e) => handleClick(e, section.id)}
              >
                {section.name}
              </a>
            );
          })}
        </nav>
      </header>
    </ScrollSpy>
  );
}
