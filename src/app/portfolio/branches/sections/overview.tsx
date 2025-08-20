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
  const filteredBranches = branches.filter((branch) => branch.id !== filter);
  return (
    <div className="flex flex-col items-center gap-8">
      <h4 className="text-center">
        {title ? title : "An welcher Leistung sind Sie interessiert?"}
      </h4>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {filteredBranches.map((branch, index) => {
          return (
            <CardActionButton
              key={index}
              name={branch.name}
              id={branch.id}
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
