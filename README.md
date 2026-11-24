# The Account Brief

B2B marketing strategy and client service, from the account side. A static [Astro](https://astro.build) blog by James Alderman, deployed on Netlify at https://jamesalderman.uk.

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
- A post with a future `pubDate` stays hidden until a build runs on or after that date. To schedule posts, add a Netlify build hook and trigger it daily, or just push on the day.
- Drafts from Notes to Content map straight across: the `# Title` line becomes `title`, and the Meta title, Meta description, Slug, Focus keyword and Excerpt lines become front matter and the file name.

## Publishing

Push to `main`. Netlify builds and deploys in about a minute.

## Settings

Site name, author details (add your LinkedIn URL) and the four categories live in `src/consts.ts`.

## SEO built in

Canonical URLs, Open Graph and Twitter tags, JSON-LD (WebSite, Person, BlogPosting, BreadcrumbList, CollectionPage, ProfilePage), XML sitemap, robots.txt, RSS, and zero client-side JavaScript.

## Local development

```sh
npm install
npm run dev
```
