import { Document } from "@contentful/rich-text-types";
import { createClient } from "contentful";

export interface Note {
  sys: {
    id: string;
    createdAt: string;
  };
  fields: {
    title: string;
    content: Document;
    publishedAt: string;
    cover?: {
      fields: {
        title: string;
        file: {
          url: string;
          details?: {
            size?: number;
            image?: {
              width: number;
              height: number;
            };
          };
          fileName?: string;
          contentType?: string;
        };
      };
    };
  };
}

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  environment: "master",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getAllNotes(): Promise<any[]> {
  const entries = await client.getEntries({
    content_type: "notizen",
    order: ["-fields.publishedAt"],
  });
  return entries.items;
}

export async function getNoteById(id: string): Promise<any> {
  const entry = await client.getEntry(id, { include: 10 });
  return entry;
}

export async function getNoteByPublishedDate(date: string): Promise<any> {
  const entries = await client.getEntries({
    content_type: "notizen",
    "fields.publishedAt[gte]": `${date}T00:00:00Z`,
    "fields.publishedAt[lte]": `${date}T23:59:59Z`,
    limit: 1,
  });

  if (!entries.items.length) throw new Error(`Note for date ${date} not found`);

  return entries.items[0];
}
