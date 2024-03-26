export const serviceNav = {
  name: "Leistungen",
  ref: "/services",
  entries: [
    { name: "Collaboration", ref: "/services/collaboration" },
    { name: "Mobile", ref: "/services/mobile" },
    { name: "Cybersecurity", ref: "/services/cybersecurity" },
    { name: "Solutions", ref: "/services/solutions" },
  ],
};

export const aboutNav = {
  name: "Über uns",
  ref: "/about",
  entries: [
    { name: "Unternehmen", ref: "/about/como" },
    { name: "Notizen", ref: "/about/notes" },
  ],
};

export const legalNav = {
  name: "Rechtliches",
  entries: [
    { name: "Impressum", ref: "/legal/imprint" },
    { name: "Datenschutzhinweis", ref: "/legal/privacy" },
  ],
};

export const mainNav = [
  { name: "Home", ref: "/" },
  { name: "Leistungen", child: serviceNav },
  { name: "Über uns", child: aboutNav },
  { name: "Kontakt" },
];

export type SubNav = typeof serviceNav;
