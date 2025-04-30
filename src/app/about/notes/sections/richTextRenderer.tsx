import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";

type Props = {
  document: Document;
};

export const RichTextRenderer = ({ document }: Props) => {
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
                <details className="border rounded-lg p-4 my-4 bg-gray-50">
                  <summary className="cursor-pointer font-semibold">
                    {fields.title}
                  </summary>
                  <div className="mt-2">
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
};
