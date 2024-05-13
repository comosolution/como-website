type Unarray<T> = T extends Array<infer U> ? U : T;

import products from "./data/portfolio/products.json";
export type Products = typeof products;
export type Product = Unarray<Products>;

import { getMarkdown } from "./utils/generator";
const notes = await getMarkdown("notes");
type Notes = typeof notes;
export type Note = Unarray<Notes>;
