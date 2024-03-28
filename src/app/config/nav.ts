export const serviceNav = {
  name: "Leistungen",
  ref: "/services",
  entries: [
    { name: "Collaboration", ref: "/services/collaboration" },
    { name: "Mobile", ref: "/services/mobile" },
    { name: "Solutions", ref: "/services/solutions" },
    { name: "Cybersecurity", ref: "/services/cybersecurity" },
  ],
};

export const aboutNav = {
  name: "Über uns",
  ref: "/about",
  entries: [
    { name: "Unternehmen", ref: "/about/como" },
    { name: "Notizen", ref: "/about/notes" },
    { name: "Newsletter", ref: "/about/newsletter" },
  ],
};

export const mainNav = [
  { name: "Home", ref: "/" },
  { name: "Leistungen", child: serviceNav },
  { name: "Über uns", child: aboutNav },
  { name: "Kontakt" },
];

export type SubNav = typeof serviceNav;
