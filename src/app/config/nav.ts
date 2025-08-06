export const aboutNav = {
  name: "Über uns",
  ref: "/about",
  entries: [
    { name: "Unternehmen", ref: "/about/como" },
    { name: "Karriere", ref: "/about/career" },
    { name: "CSR", ref: "/about/csr" },
    { name: "Partner", ref: "/about/partners" },
    { name: "Notizen", ref: "/about/notes" },
  ],
};

export const portfolioNav = {
  name: "Portfolio",
  ref: "/portfolio",
  entries: [
    { name: "Übersicht", ref: "/portfolio" },
    { name: "Leistungen", ref: "/portfolio/services" },
    { name: "Produkte", ref: "/portfolio/products" },
    { name: "Branchen", ref: "/portfolio/branches" },
  ],
};

export const mainNav = [
  { name: "Home", ref: "/" },
  { name: "Portfolio", ref: "/portfolio" },
  { name: "Über uns", child: aboutNav },
];

export type SubNav = typeof aboutNav;
