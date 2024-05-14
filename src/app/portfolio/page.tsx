import PortfolioOverview from "../components/portfolio";
import { Metadata } from "next";
import Search from "../components/search";

export const metadata: Metadata = {
  title: "Portfolio | CoMo Solution GmbH",
};

export default function Page() {
  return (
    <main className="flex flex-col gap-8 px-8">
      <h3 className="text-center">Wie können wir Ihnen helfen?</h3>
      <Search />
      <PortfolioOverview />
    </main>
  );
}
