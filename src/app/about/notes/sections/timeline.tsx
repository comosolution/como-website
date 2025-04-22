"use client";
import { Notes } from "@/app/types";
import { formatDate } from "@/app/utils/utils";
import { Timeline } from "@mantine/core";
import Link from "next/link";

export default function NewsTimeline({ notes }: { notes: Notes }) {
  return (
    <Timeline bulletSize={24} active={notes.length}>
      {notes.map((n, i) => {
        return (
          <Timeline.Item key={i}>
            <Link href={`/about/notes/${n.id}`}>
              <p className="muted small">{formatDate(n.date)}</p>
              <h4>{n.title}</h4>
            </Link>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
}
