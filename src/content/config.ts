import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publicationDate: z.date(),
    description: z.string(),
    author: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
