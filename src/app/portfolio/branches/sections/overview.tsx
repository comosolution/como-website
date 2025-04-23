import CardActionButton from "@/app/components/card";
import { Button } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import branches from "../../../data/portfolio/branches.json";

export default function BranchesOverview({
  filter,
  title,
}: {
  filter?: string;
  title?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-center">
        {title ? title : "An welcher Leistung sind Sie interessiert?"}
      </h2>
      <div className="flex flex-col gap-4">
        {branches
          .filter((branch) => branch.id !== filter)
          .map((branch, index) => {
            return (
              <CardActionButton
                key={index}
                name={branch.name}
                icon={`/portfolio/${branch.icon}.svg`}
                href={`/portfolio/branches/${branch.id}`}
              />
            );
          })}
      </div>
      <Button
        variant="transparent"
        component={Link}
        href="/portfolio"
        leftSection={<IconChevronLeft size={16} />}
      >
        Zurück zum Portfolio
      </Button>
    </div>
  );
}
