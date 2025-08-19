import * as fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypeExternalLinks from "rehype-external-links";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export async function getMarkdown(folder: string) {
  const noteDirectory = path.join(process.cwd(), folder);
  const fileNames = fs.readdirSync(noteDirectory);

  const allNotesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(noteDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id: id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      content: matterResult.content,
    };
  });
  return allNotesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function markdownToHtml(content: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeExternalLinks, { target: "_blank" })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(content);

  return String(file);
}
