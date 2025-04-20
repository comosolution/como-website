import { Metadata } from "next";
import PortfolioOverview from "../components/portfolio";
import Search from "../components/search";
import { defaultPadding } from "../style/style";

export const metadata: Metadata = {
  title: "Portfolio | CoMo Solution GmbH",
};

export default function Page() {
  return (
    <main className={`flex flex-col items-center gap-8 ${defaultPadding}`}>
      <h3 className="text-center">Wie können wir Ihnen helfen?</h3>
      <Search />
      <PortfolioOverview />
    </main>
  );
}
