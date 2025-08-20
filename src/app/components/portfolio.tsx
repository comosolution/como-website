"use client";
import portfolio from "../data/portfolio.json";
import Divider from "./divider";
import Tile from "./tile";

export default function PortfolioOverview() {
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
