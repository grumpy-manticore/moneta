import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');

  return rss({
    title: 'Nick Telsan | Blog',
    description: 'A blog about things and stuff.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publicationDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
