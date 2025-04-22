import News from "@/app/components/news";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notizen | CoMo Solution GmbH",
};

export default function Page() {
  return (
    <main>
      <h1 className="text-center">Notizen</h1>
      <News />
    </main>
  );
}
