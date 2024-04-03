import Image from "next/image";
import ServicesOverview from "../sections/services";
import partners from "./../../data/partners.json";
import { Service } from "@/app/types";

export default function ServiceHero({ data }: { data: Service }) {
  const partnersForService = partners.filter((partner) =>
    partner.category.includes(data.id)
  );

  return (
    <section id="overview" className="pb-8">
      <header className="px-8">
        <div className="flex items-end gap-2">
          <Image
            src={`/services/${data.id}.svg`}
            alt="Icon"
            width={128}
            height={64}
          />
          <h4 className={data.id}>{data.name}</h4>
        </div>
        <h1>{data.title}</h1>
      </header>
      <section className="flex flex-col lg:flex-row lg:items-end gap-16 lg:gap-4 px-8 py-32">
        <h5 className="lg:w-3/4 muted">{data.sub}</h5>
        <div className="lg:w-1/4 flex flex-col lg:items-end gap-8">
          <p className="muted">
            <b>Unser{partnersForService.length > 1 && "e"} Partner</b>
          </p>
          {partnersForService.map((partner, index) => {
            return (
              <Image
                key={index}
                src={`/logos/${partner.img}`}
                width={120}
                height={120}
                style={{ objectFit: "contain", opacity: 0.8 }}
                alt={`Logo ${partner.name}`}
              />
            );
          })}
        </div>
      </section>
      <ServicesOverview />
    </section>
  );
}
