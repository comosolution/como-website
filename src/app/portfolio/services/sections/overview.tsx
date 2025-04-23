import CardActionButton from "@/app/components/card";
import { Button } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import services from "../../../data/portfolio/services.json";

export default function ServiceOverview({
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
        {services
          .filter((service) => service.id !== filter)
          .map((service, index) => {
            return (
              <CardActionButton
                key={index}
                name={service.name}
                icon={`/services/${service.icon}.svg`}
                href={`/portfolio/services/${service.id}`}
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
