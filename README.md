# The Account Brief

B2B marketing strategy and client service, from the account side. A static [Astro](https://astro.build) blog by James Alderman, deployed on Netlify at https://theaccountbrief.uk.

## Writing a post

Add a Markdown file to `src/content/posts/`. The file name becomes the URL: `key-account-plan-template.md` → `/key-account-plan-template/`.

```md
---
title: "How to write a key account plan clients actually read"
metaTitle: "Key account plan template that clients read"   # optional, ≤ 60 chars
description: "Meta description, ≤ 155 chars."
pubDate: 2026-12-08
category: key-account-management   # b2b-strategy | key-account-management | client-services | b2b-seo
focusKeyword: "key account plan template"
tags: [account planning, template]
draft: false
---

Post body in Markdown…
```

- `draft: true` keeps a post off the live site (it still shows locally, marked DRAFT).
- Optional SEO fields: `updatedDate` (shows "Updated" and sets dateModified), `featured: true` (pins the post under "Start here" on its category hub), `noindex: true`, `canonical` (only if the post first appeared elsewhere) and `image` (custom share image; otherwise one is generated).
- An `## FAQ` section with **bold questions** followed by answers is turned into FAQPage schema automatically.
- A post with a future `pubDate` stays hidden until a build runs on or after that date. To schedule posts, add a Netlify build hook and trigger it daily, or just push on the day.
- Drafts from Notes to Content map straight across: the `# Title` line becomes `title`, and the Meta title, Meta description, Slug, Focus keyword and Excerpt lines become front matter and the file name.

## Publishing

Push to `main`. Netlify builds and deploys in about a minute.

## Settings

Site name, author details (add your LinkedIn URL) and the four categories live in `src/consts.ts`.

## SEO built in

Canonical URLs, Open Graph and Twitter tags, a generated 1200×630 share image for every post and category, JSON-LD (WebSite, Person, BlogPosting with image, FAQPage, BreadcrumbList, CollectionPage with ItemList, ProfilePage), XML sitemap, robots.txt, RSS, and almost no client-side JavaScript.

To add a headshot, save a square photo as `public/images/james-alderman.jpg` and set `AUTHOR.photo` in `src/consts.ts`.

## Local development

```sh
npm install
npm run dev
```
