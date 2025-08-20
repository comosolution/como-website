import CardActionButton from "@/app/components/card";
import { getAllEntries, Service } from "@/app/utils/contentful";
import { Button } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

export default async function ServiceOverview({
  filter,
  title,
}: {
  filter?: string;
  title?: string;
}) {
  const services: Service[] = await getAllEntries("services");
  const filteredServices = services.filter(
    (service) => service.fields.slug !== filter
  );

  return (
    <div className="flex flex-col items-center gap-8">
      <h4 className="text-center">
        {title ? title : "An welcher Leistung sind Sie interessiert?"}
      </h4>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {filteredServices.map((service, index) => {
          return (
            <CardActionButton
              key={index}
              name={service.fields.name}
              id={service.fields.slug}
              href={`/portfolio/services/${service.fields.slug}`}
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
