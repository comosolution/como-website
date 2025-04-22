import NoteElement from "@/app/components/note";
import { getMarkdown } from "@/app/utils/generator";
import { Button } from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

export async function generateStaticParams() {
  const notes = await getMarkdown("notes");

  return notes.map((n) => {
    return { id: n.id };
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const notes = await getMarkdown("notes");
  const { id } = await params;
  const note = notes.find((n) => n.id === id);

  return (
    <main className="flex flex-col items-center">
      <NoteElement note={note!} />
      <Button
        component={Link}
        href={"/about/notes"}
        variant="transparent"
        leftSection={<IconChevronLeft size={16} />}
      >
        Zurück zur Übersicht
      </Button>
    </main>
  );
}
