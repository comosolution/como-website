import { Document } from "@contentful/rich-text-types";
import { createClient } from "contentful";

export interface Note {
  sys: {
    id: string;
    createdAt: string;
  };
  fields: {
    title: string;
    slug: string;
    description: string;
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

export interface Job {
  sys: {
    id: string;
    createdAt: string;
  };
  fields: {
    title: string;
    slug: string;
    location: string;
    type: string;
    content: Document;
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
  accessToken:
    process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
      ? process.env.CONTENTFUL_PREVIEW_API_TOKEN!
      : process.env.CONTENTFUL_ACCESS_TOKEN!,
  host:
    process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
      ? "preview.contentful.com"
      : "cdn.contentful.com",
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

export async function getNoteBySlug(slug: string): Promise<any> {
  const entries = await client.getEntries({
    content_type: "notizen",
    "fields.slug": slug,
    limit: 1,
  });

  if (!entries.items.length)
    throw new Error(`Note with slug ${slug} not found`);

  return entries.items[0];
}

export async function getAllJobs(): Promise<any[]> {
  const entries = await client.getEntries({
    content_type: "jobs",
  });
  return entries.items;
}

export async function getJobBySlug(slug: string): Promise<any> {
  const entries = await client.getEntries({
    content_type: "jobs",
    "fields.slug": slug,
    limit: 1,
  });

  if (!entries.items.length) throw new Error(`Job with slug ${slug} not found`);

  return entries.items[0];
}
