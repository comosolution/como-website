type Unarray<T> = T extends Array<infer U> ? U : T;

import products from "./data/portfolio/products.json";
export type Products = typeof products;
export type Product = Unarray<Products>;

import branches from "./data/portfolio/branches.json";
export type Branches = typeof branches;
export type Branch = Unarray<Branch>;

import { getMarkdown } from "./utils/generator";
const notes = await getMarkdown("notes");
type Notes = typeof notes;
export type Note = Unarray<Notes>;

declare global {
  interface Window {
    CookieConsent?: {
      consent: {
        necessary: boolean;
        preferences: boolean;
        statistics: boolean;
        marketing: boolean;
      };
    };
    Cookiebot?: {
      show: () => {};
    };
  }
}
