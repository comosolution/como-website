import Image from "next/image";
import ServicesOverview from "../sections/services";
import { Service } from "@/app/types";

export default function ServiceHero({ data }: { data: Service }) {
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
      </section>
      <ServicesOverview />
    </section>
  );
}
