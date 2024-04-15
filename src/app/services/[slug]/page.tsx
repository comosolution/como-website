import collaboration from "../../data/services/collaboration.json";
import mobile from "../../data/services/mobile.json";
import solutions from "../../data/services/solutions.json";
import cybersecurity from "../../data/services/cybersecurity.json";
import ServicePage from "../sections/servicePage";

const serviceNames = ["collaboration", "mobile", "solutions", "cybersecurity"];

export function generateStaticParams() {
  return serviceNames.map((service) => ({
    slug: service,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const services = [collaboration, mobile, solutions, cybersecurity];
  const data = services.filter((s) => s.id === params.slug)[0];

  return serviceNames.includes(params.slug) ? (
    <ServicePage data={data} />
  ) : (
    <main className="text-center">Not found.</main>
  );
}
