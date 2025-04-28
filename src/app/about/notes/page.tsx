import { defaultPadding } from "@/app/style/style";
import { getAllNotes, Note } from "@/app/utils/contentful";
import { Metadata } from "next";
import NewsTimeline from "./sections/timeline";

export const metadata: Metadata = {
  title: "Notizen | CoMo Solution GmbH",
};

export default async function NotizenPage() {
  const notes: Note[] = await getAllNotes();

  return (
    <main className={`max-w-[660px] flex flex-col gap-16 ${defaultPadding}`}>
      <h1 className="text-center">Notizen</h1>
      <NewsTimeline notes={notes} />
    </main>
  );
}
