import rss from '@astrojs/rss';
import { SITE } from '../consts';
import { getPublishedPosts } from '../lib/posts';

export async function GET(context) {
  const posts = await getPublishedPosts();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/${p.id}/`,
      categories: [p.data.category],
    })),
    customData: `<language>en-gb</language>`,
  });
}
