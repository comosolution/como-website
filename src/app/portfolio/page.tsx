import PortfolioOverview from "../components/portfolio";

export default function Page() {
  return (
    <main className="flex flex-col gap-16 p-8">
      <h1 className="text-center">
        Wie können wir <br /> Ihnen helfen?
      </h1>
      <PortfolioOverview />
    </main>
  );
}
