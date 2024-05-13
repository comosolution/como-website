import ServiceOverview from "./sections/overview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dienstleistungen | CoMo Solution GmbH",
};

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-8 px-8">
      <ServiceOverview />
    </main>
  );
}
