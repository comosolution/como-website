import { defaultPadding } from "@/app/style/style";
import { Metadata } from "next";
import Overview from "../sections/overview";

export const metadata: Metadata = {
  title: "Branchen | CoMo Solution GmbH",
};

export default function Page() {
  return (
    <main className={`flex flex-col items-center gap-8 ${defaultPadding}`}>
      <Overview type="branchen" title="In welcher Branche sind Sie tätig?" />
    </main>
  );
}
