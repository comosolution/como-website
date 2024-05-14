import { Metadata } from "next";
import BranchesOverview from "./sections/overview";

export const metadata: Metadata = {
  title: "Branchen | CoMo Solution GmbH",
};

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-8 px-8">
      <BranchesOverview title="In welcher Branche sind Sie tätig?" />
    </main>
  );
}
