type Unarray<T> = T extends Array<infer U> ? U : T;

import service from "./data/services/collaboration.json";
export type Service = typeof service;

import { getMarkdown } from "./utils/generator";
const notes = await getMarkdown("notes");
type Notes = typeof notes;
export type Note = Unarray<Notes>;
