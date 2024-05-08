import Image from "next/image";
import services from "../../../data/portfolio/services.json";
import { Metadata } from "next";
import Link from "next/link";

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
    <main className="flex flex-col gap-8 p-16">
      <Breadcrumbs />
      {services
        .filter((service) => service.id === params.slug)
        .map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-start items-start gap-8"
            >
              <div className="flex flex-col justify-start items-start">
                <div className="justify-start items-center gap-1 inline-flex">
                  <Image
                    src={`/services/${service.icon}.svg`}
                    alt="Icon"
                    width={32}
                    height={32}
                  />
                  <h3 className="text-orange-500">{service.name}</h3>
                </div>
                <h1>{service.title}</h1>
              </div>
              <div className="grid sm:grid-cols-2 gap-16">
                {service.services.map((s, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col justify-start items-start gap-4"
                    >
                      <h4>{s.name}</h4>
                      <p className="muted">{s.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </main>
  );
}

function Breadcrumbs() {
  return (
    <div className="flex gap-2 items-center">
      <Link href="/portfolio">Portfolio</Link>
      <Image
        src="/icons/chevron.svg"
        alt="Icon"
        width={24}
        height={24}
        style={{ transform: "rotate(-90deg)" }}
      />
      <Link href="/portfolio/services">Dienstleistungen</Link>
    </div>
  );
}
