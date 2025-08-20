import { Metadata } from "next";
import Overview from "../sections/overview";

export const metadata: Metadata = {
  title: "Leistungen | CoMo Solution GmbH",
};

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-8 px-8">
      <Overview type="services" />
    </main>
  );
}
