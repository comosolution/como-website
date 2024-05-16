"use client";
import { scrollTo } from "../utils/utils";

export default function Pill({
  title,
  scrollId,
}: {
  title: string;
  scrollId: string;
}) {
  return (
    <div
      className="tile px-4 py-2 rounded-full border-solid border border-orange-500 transition-all cursor-pointer hover:bg-orange-600/20"
      onClick={() => scrollTo(scrollId, -100)}
    >
      {title}
    </div>
  );
}
