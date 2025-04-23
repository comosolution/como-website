import { Metadata } from "next";
import PortfolioOverview from "../components/portfolio";
import { defaultPadding } from "../style/style";

export const metadata: Metadata = {
  title: "Portfolio | CoMo Solution GmbH",
};

export default function Page() {
  return (
    <main className={`flex flex-col items-center gap-8 ${defaultPadding}`}>
      <h2 className="text-center">Wie können wir Ihnen helfen?</h2>
      <PortfolioOverview />
    </main>
  );
}
