"use client";
import Divider from "./divider";
import Tile from "./tile";

export default function PortfolioOverview() {
  const portfolio = [
    {
      name: "Leistungen",
      description:
        "Von der Analyse bis zum Workshop – unsere Services im Überblick.",
      id: "services",
    },
    {
      name: "Produkte",
      description: "Mit diesen Lösungen setzen wir unser Know-How gezielt ein.",
      id: "products",
    },
    {
      name: "Branchen",
      description: "In diesen Bereichen lösen wir Ihre Anforderungen.",
      id: "branches",
    },
  ];

  return (
    <div id="portfolio" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {portfolio.map((p, index) => {
        return (
          <Tile key={index} href={`/portfolio/${p.id}`}>
            <h3>{p.name}</h3>
            <Divider />
            <p className="muted">{p.description}</p>
          </Tile>
        );
      })}
    </div>
  );
}
