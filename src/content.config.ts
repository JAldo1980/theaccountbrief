import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    // Meta title for search results (≤ 60 chars). Falls back to title.
    metaTitle: z.string().max(70).optional(),
    // Meta description (≤ 155 chars).
    description: z.string().max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['b2b-strategy', 'key-account-management', 'client-services', 'b2b-seo']),
    focusKeyword: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Drafts build locally but are never published.
    draft: z.boolean().default(false),
    // Optional SEO controls.
    canonical: z.string().url().optional(), // only if this post first appeared elsewhere
    noindex: z.boolean().default(false), // keep this post out of search results
    image: z.string().optional(), // custom share image path, e.g. /images/post.png (default: generated)
    featured: z.boolean().default(false), // pin to the top of its category hub as "Start here"

  }),
});

export const collections = { posts };
