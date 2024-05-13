import branches from "../../data/portfolio/branches.json";
import Button from "@/app/components/button";
import CardActionButton from "@/app/components/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branchen | CoMo Solution GmbH",
};

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-8 px-8">
      <h3 className="text-center max-w-[880px]">
        In welcher Branche sind Sie tätig?
      </h3>
      <div className="flex flex-col gap-4">
        {branches.map((branch, index) => {
          return (
            <CardActionButton
              key={index}
              name={branch.name}
              icon={`/portfolio/${branch.icon}.svg`}
              href={`/portfolio/branches/${branch.id}`}
              delay={index * 100}
            />
          );
        })}
      </div>
      <Button type="tertiary" text="Zurück zum Portfolio" href="/portfolio" />
    </main>
  );
}
