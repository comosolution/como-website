import services from "../../data/portfolio/services.json";
import CardActionButton from "@/app/components/card";
import Button from "@/app/components/button";

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-8 p-8">
      <h3 className="text-center max-w-[880px]">
        An welcher Leistung sind Sie interessiert?
      </h3>
      <div className="flex flex-col gap-4">
        {services.map((service, index) => {
          return (
            <CardActionButton
              key={index}
              name={service.name}
              icon={`/services/${service.icon}.svg`}
              href={`/portfolio/services/${service.id}`}
              delay={index * 100}
            />
          );
        })}
      </div>
      <Button type="tertiary" text="Zurück zur Übersicht" href="/portfolio" />
    </main>
  );
}
