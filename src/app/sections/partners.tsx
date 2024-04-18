import PartnersMarquee from "../components/partners";

export default function Partners() {
  return (
    <section className="w-full overflow-hidden flex flex-col items-center gap-4 py-8">
      <h3 className="text-center">
        Mit der CoMo und ihren Partnern zum Erfolg
      </h3>
      <PartnersMarquee />
    </section>
  );
}
