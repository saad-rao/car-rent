import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "car"]`;

export const one = groq`*[_type == "car"][0..0]`;