import { Metadata } from "next";
import React from "react";
import branches from "../../../data/portfolio/branches.json";
import BranchContent from "../sections/content";

export const metadata: Metadata = {
  title: "Branchen | CoMo Solution GmbH",
};

export function generateStaticParams() {
  return branches.map((branch) => ({
    slug: branch.id,
  }));
}

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);

  return (
    <main className="flex flex-col items-center gap-24">
      {branches
        .filter((branch) => branch.id === slug)
        .map((branch, index) => {
          return <BranchContent key={index} branch={branch} />;
        })}
    </main>
  );
}
