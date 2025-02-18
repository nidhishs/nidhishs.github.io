import { defineContentConfig, defineCollection, z } from "@nuxt/content";

const blog = defineCollection({
  type: "page",
  source: "blogs/**/*.md",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string(),
    image: z.string(),
  }),
});

const publication = defineCollection({
  type: "page",
  source: "publications/**/*.md",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string(),
    image: z.string(),
  }),
});

export default defineContentConfig({
  collections: {
    blog,
    publication,
  },
});
