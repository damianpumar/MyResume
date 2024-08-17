import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.string().transform((str) => new Date(str)),
      author: z.string(),
      tags: z.array(z.string()),
      image: image(),
      classes: z.string().array().optional(),
      draft: z.boolean().optional().default(false),
    }),
});

const eventCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date().or(z.string().transform((str) => new Date(str))),
      link: z.string().optional(),
      name: z.string(),
      image: image(),
      classes: z.string().array().optional(),
    }),
});

const coursesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      order: z.number(),
      image: image(),
    }),
});

export const collections = {
  blog: blogCollection,
  events: eventCollection,
  courses: coursesCollection,
};
