import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";

export function RichTextRenderer({ document }: { document: Document }) {
  return (
    <>
      {documentToReactComponents(document, {
        renderNode: {
          [BLOCKS.EMBEDDED_ENTRY]: (node) => {
            const entry = node.data.target;
            const fields = entry.fields;
            const contentTypeId = entry.sys.contentType?.sys?.id;

            if (
              contentTypeId === "accordion" &&
              fields?.title &&
              fields?.content
            ) {
              return (
                <details className="border border-[rgba(var(--foreground-rgb),0.2)] rounded-lg p-4 my-4 bg-[var(--light)]">
                  <summary>{fields.title}</summary>
                  <div className="px-4">
                    {documentToReactComponents(fields.content)}
                  </div>
                </details>
              );
            }

            return;
          },
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { file, title } = node.data.target.fields;
            const url = file.url.startsWith("//")
              ? `https:${file.url}`
              : file.url;
            return <img src={url} alt={title} />;
          },
        },
      })}
    </>
  );
}
