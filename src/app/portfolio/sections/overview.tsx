import CardActionButton from "@/app/components/card";
import { getAllEntries, Portfolio } from "@/app/utils/contentful";
import { Button } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

export default async function Overview({
  type,
  filter,
  title,
}: {
  type: "services" | "branchen";
  filter?: string;
  title?: string;
}) {
  const path = type === "branchen" ? "branches" : type;

  const entries: Portfolio[] = await getAllEntries(type);
  const filteredEntries = entries.filter(
    (entry) => entry.fields.slug !== filter
  );

  return (
    <div className="flex flex-col items-center gap-8">
      <h4 className="text-center">
        {title ? title : "An welcher Leistung sind Sie interessiert?"}
      </h4>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {filteredEntries.map((entry, index) => {
          return (
            <CardActionButton
              key={index}
              name={entry.fields.name}
              id={entry.fields.slug}
              href={`/portfolio/${path}/${entry.fields.slug}`}
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
