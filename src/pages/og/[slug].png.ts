import type { APIRoute } from 'astro';
import { CATEGORIES, categoryBySlug } from '../../consts';
import { getPublishedPosts } from '../../lib/posts';
import { ogImage } from '../../lib/og';

// One image per post, plus one per category page: /og/<post-slug>.png, /og/category-<slug>.png
export async function getStaticPaths() {
  const posts = await getPublishedPosts();
  return [
    ...posts.map((p) => ({ params: { slug: p.id }, props: { title: p.data.title, kicker: categoryBySlug(p.data.category).name } })),
    ...CATEGORIES.map((c) => ({ params: { slug: `category-${c.slug}` }, props: { title: c.name, kicker: 'Topic' } })),
  ];
}

export const GET: APIRoute = async ({ props }) => {
  const png = await ogImage({ title: props.title, kicker: props.kicker, footer: 'The Account Brief · James Alderman' });
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
