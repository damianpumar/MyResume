import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { personal } from 'src/configuration';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: personal.name,
    description: `${personal.name} resume, blog and events website.`,
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      date: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
    canonicalUrl: 'https://www.damianpumar.com',
  });
}
