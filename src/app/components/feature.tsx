import Image from "next/image";
import React from "react";

export default function Feature({
  title,
  sub,
}: {
  title: string;
  sub?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <Image src="/icons/check.svg" alt="check" width="32" height="32" />
      <div>
        <h4>{title}</h4>
        {sub && <p className="muted">{sub}</p>}
      </div>
    </div>
  );
}

export function FeatureList({ children }: { children: React.ReactElement[] }) {
  return <div className="md:w-1/2 flex flex-col gap-8 p-8">{children}</div>;
}
