import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publicationDate: z.date(),
    editDate: z.date().optional(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  posts: postsCollection,
};
