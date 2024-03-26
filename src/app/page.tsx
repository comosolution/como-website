import News from "./components/news";
import Hero from "./sections/hero";
import Benefits from "./sections/benefits";
import Partners from "./sections/partners";
import Services from "./sections/services";
import Testimonials from "./sections/testimonials";
import Sub from "./sections/sub";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-16 p-8">
      <Hero />
      <Sub />
      <Services />
      <Benefits />
      <Partners />
      <Testimonials />
      <News />
    </main>
  );
}
