import { groq } from "next-sanity";

export const allproducts = groq `*[_type == "product"]`
export const twelve = groq `*[_type == "product"][0..11]`