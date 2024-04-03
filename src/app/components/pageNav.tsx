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
    scrollTo(id);
  };

  return (
    <ScrollSpy activeClass="nav-active">
      <header className="min-w-screen flex justify-center">
        <nav className="hidden fixed top-64 -right-28 z-50 rotate-90 center rounded-full lg:flex items-center gap-8 px-8 py-4">
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
