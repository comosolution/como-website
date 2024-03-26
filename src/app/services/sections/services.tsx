import Image from "next/image";
import services from "./../../data/services/services.json";
import Tile from "@/app/components/tile";

export default function ServicesOverview({ id }: { id: string }) {
  return (
    <section>
      <h3 className="px-8 py-4">Wir bieten umfassende Lösungen</h3>
      <div className="flex gap-4">
        {services
          .filter((service) => service.services.includes(id))
          .map((service, index) => {
            return (
              <Tile key={index} className="flex flex-col gap-8">
                <div className="flex items-center gap-2">
                  <Image
                    src={`/icons/${service.icon}.svg`}
                    alt="Icon"
                    width={24}
                    height={24}
                  />
                  <h4>{service.name}</h4>
                </div>
                <div>
                  {service.categories.map((cat, index) => {
                    return (
                      <p key={index} className="muted">
                        {cat}
                      </p>
                    );
                  })}
                </div>
              </Tile>
            );
          })}
      </div>
    </section>
  );
}
