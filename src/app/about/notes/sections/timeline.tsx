"use client";
import { Note } from "@/app/utils/contentful";
import { formatDate } from "@/app/utils/utils";
import { Button, Timeline } from "@mantine/core";
import { IconChevronDown, IconStarFilled } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

const INITIAL_VISIBLE = 5;
const LOAD_MORE_COUNT = 5;

export default function NewsTimeline({ notes }: { notes: Note[] }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, notes.length));
  };

  const visibleNotes = notes.slice(0, visibleCount);

  return (
    <div className="flex flex-col gap-8 items-center">
      <Timeline bulletSize={24} active={visibleNotes.length}>
        {visibleNotes.map((n, i) => (
          <Timeline.Item
            key={i}
            bullet={i === 0 && <IconStarFilled size={16} />}
          >
            <Link href={`/about/notes/${n.fields.slug}`}>
              <p className="muted small">{formatDate(n.fields.publishedAt)}</p>
              <h4>{n.fields.title}</h4>
              <p>{n.fields.description}</p>
            </Link>
          </Timeline.Item>
        ))}
      </Timeline>
      {visibleCount < notes.length && (
        <Button
          variant="light"
          leftSection={<IconChevronDown size={16} />}
          onClick={handleLoadMore}
          fullWidth
        >
          Mehr anzeigen
        </Button>
      )}
    </div>
  );
}
