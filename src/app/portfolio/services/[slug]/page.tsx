import Image from "next/image";
import services from "../../../data/portfolio/services.json";
import { Metadata } from "next";
import ServiceOverview from "../sections/overview";
import { twoCols } from "@/app/style/style";

export const metadata: Metadata = {
  title: "Dienstleistungen | CoMo Solution GmbH",
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex flex-col gap-24">
      {services
        .filter((service) => service.id === params.slug)
        .map((service, index) => {
          return (
            <div key={index} className="flex flex-col gap-16">
              <header className="flex flex-col items-center px-8">
                <div className="flex justify-start items-center gap-1 pb-2">
                  <Image
                    src={`/services/${service.icon}.svg`}
                    alt="Icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-orange-500">
                    <b>{service.name}</b>
                  </p>
                </div>
                <h1 className="text-center">{service.title}</h1>
              </header>
              <div className={twoCols}>
                {service.services.map((s, index) => {
                  return (
                    <div key={index} className="p-8">
                      <h3>{s.name}</h3>
                      <p className="muted">{s.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      <div className="flex flex-col items-center">
        <ServiceOverview
          filter={params.slug}
          title="Weitere Dienstleistungen für Sie"
        />
      </div>
    </main>
  );
}
