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
      imagePosition: z.enum(["left", "right", "center"]).optional(),
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
      imagePosition: z.enum(["left", "right", "center"]).optional(),
    }),
});

const coursesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.string().transform((str) => new Date(str)),
      author: z.string(),
      tags: z.array(z.string()),
      image: image(),
      imagePosition: z.enum(["left", "right", "center"]).optional(),
      draft: z.boolean().optional().default(false),
    }),
});

export const collections = {
  blog: blogCollection,
  events: eventCollection,
  courses: coursesCollection,
};
