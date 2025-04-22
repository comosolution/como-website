import News from "./components/news";
import PortfolioOverview from "./components/portfolio";
import Benefits from "./sections/benefits";
import Hero from "./sections/hero";
import Partners from "./sections/partners";
import Services from "./sections/services";
import Sub from "./sections/sub";
import { defaultPadding } from "./style/style";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center gap-16 ${defaultPadding}`}
    >
      <Hero />
      <Sub />
      <PortfolioOverview />
      <Services />
      <Benefits />
      <Partners />
      {/* <Testimonials /> */}
      <News limit={4} />
    </main>
  );
}
