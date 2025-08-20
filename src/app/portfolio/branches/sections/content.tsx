"use client";
import ContactButton from "@/app/components/contactButton";
import Tile from "@/app/components/tile";
import { twoCols } from "@/app/style/style";
import { Branch } from "@/app/types";
import { icons } from "@/app/utils/icons";
import Image from "next/image";
import BranchesOverview from "../sections/overview";

export default function BranchContent({ branch }: { branch: Branch }) {
  const Icon = icons[branch.id];

  return (
    <div className="flex flex-col gap-4">
      <header className="flex flex-col items-center px-8">
        <div className="flex justify-start items-center gap-1 pb-2 text-orange-500">
          <Icon />
          <p>
            <b>{branch.name}</b>
          </p>
        </div>
        <h1 className="text-center">{branch.title}</h1>
      </header>
      <h5 className="p-8 muted">{branch.description}</h5>
      <h2 className="p-8">{branch.sub}</h2>
      <div className={`${twoCols} pb-16`}>
        <div className="px-8">
          <h3>Spezielle Rahmenbedingungen</h3>
          <p className="muted">{branch.conditions}</p>
        </div>
        <div className="relative w-full aspect-video overflow-hidden rounded-lg ring-1 ring-white/10 shadow-2xl">
          <Image
            src={`/branches/${branch.id}.jpg`}
            alt="Branch Image"
            fill
            style={{
              objectFit: "cover",
              borderRadius: 8,
              filter: "brightness(0.7)",
            }}
          />
        </div>
      </div>
      <div className={`${twoCols} pb-16`}>
        <Tile>
          <h3 className="text-orange-500">Branchenführende Expertise</h3>
          {branch.knowledge.map((k: string, index: number) => {
            return k.startsWith("- ") ? (
              <ul key={index}>
                <li className="accordion">{k.substring(2)}</li>
              </ul>
            ) : (
              <p key={index} className="pb-4 muted">
                {k}
              </p>
            );
          })}
        </Tile>
        <div className="flex flex-col items-start gap-8 p-8 muted">
          <p>{branch.outro}</p>
          <p>{branch.cto}</p>
          <ContactButton />
        </div>
      </div>
      <BranchesOverview filter={branch.id} title="Weitere Branchen" />
    </div>
  );
}
