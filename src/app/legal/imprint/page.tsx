import { getMarkdown, markdownToHtml } from "@/app/utils/generator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | CoMo Solution GmbH",
};

export default async function Page() {
  const data = await getMarkdown("legal/imprint");

  return (
    <main className="flex flex-col gap-8 p-8 max-w-[880px]">
      {data.map(async (file) => {
        return (
          <article
            key={file.id}
            dangerouslySetInnerHTML={{
              __html: await markdownToHtml(file.content),
            }}
          />
        );
      })}
    </main>
  );
}
