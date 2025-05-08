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
    <>
      <Hero />
      <main
        className={`flex min-h-screen flex-col items-center gap-16 ${defaultPadding} mt-16`}
      >
        <Sub />
        <PortfolioOverview />
        <Services />
        <Benefits />
        <Partners />
        {/* <Testimonials /> */}
        <News />
      </main>
    </>
  );
}
