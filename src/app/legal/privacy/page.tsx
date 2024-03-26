import { getMarkdown, markdownToHtml } from "@/app/utils/generator";

export default async function Page() {
  const data = await getMarkdown("legal/privacy");

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
