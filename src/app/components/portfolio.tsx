"use client";
import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import portfolio from "../data/portfolio/overview.json";
import Tile from "./tile";

export default function PortfolioOverview() {
  return (
    <div id="portfolio" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {portfolio.map((p, index) => {
        return (
          <Slide key={index} direction="up" delay={index * 100} triggerOnce>
            <Tile className="gap-8" href={`/portfolio/${p.id}`}>
              <Image
                src={`/portfolio/${p.id}.svg`}
                alt="Image"
                width={600}
                height={600}
              />
              <div className="flex flex-col gap-2 text-center">
                <h3>{p.name}</h3>
                <p className="muted">{p.description}</p>
              </div>
            </Tile>
          </Slide>
        );
      })}
    </div>
  );
}
