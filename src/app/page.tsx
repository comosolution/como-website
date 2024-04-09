import News from "./components/news";
import Hero from "./sections/hero";
import Benefits from "./sections/benefits";
import Partners from "./sections/partners";
import Services from "./sections/services";
import Testimonials from "./sections/testimonials";
import Sub from "./sections/sub";
import PageWrapper from "./components/pageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Sub />
      <Services />
      <Benefits />
      <Partners />
      {/* <Testimonials /> */}
      <News />
    </PageWrapper>
  );
}
