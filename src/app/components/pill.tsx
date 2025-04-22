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
    <h5 className="cursor-point link" onClick={() => scrollTo(scrollId, -100)}>
      #{title.replaceAll(" ", "")}
    </h5>
  );
}
