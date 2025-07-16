"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { Accordion, Button } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import { scrollTo } from "../../../utils/utils";

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
                <Accordion variant="separated" chevronPosition="left" my="md">
                  <Accordion.Item value={fields.title}>
                    <Accordion.Control className="text-2xl">
                      {fields.title}
                    </Accordion.Control>
                    <Accordion.Panel>
                      {documentToReactComponents(fields.content)}
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              );
            }

            if (contentTypeId === "cta") {
              return fields.url ? (
                <Button component={Link} href={fields.url} my="lg">
                  {fields.text}
                </Button>
              ) : (
                <Button
                  onClick={() => scrollTo("contact")}
                  my="lg"
                  leftSection={<IconChevronDown size={16} />}
                >
                  {fields.text}
                </Button>
              );
            }

            return null;
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
