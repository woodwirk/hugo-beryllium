---
title: 'Pages in Hugo'
author: woodwirk
date: '2022-08-21'
slug: 
categories:
  - hugo
tags:
  - hugo-features
  - organization
  - pages
  - content
refs:
  - https://gohugo.io/content-management/page-bundles/
---

There are three main ways to make content for this site:

1. Loose Markdown (`.md`) files
1. Leaf bundles
1. Branch bundles

## Loose Markdown files

This is probably the easiest method, and it works well if you don't need to associate it with images or other files. You just write markdown, call the file whatever you want, put it in a folder, and you're done. You can still include images, videos, and so on from online sources or the `/static/` folder in your website files.

Examples:

- `/content/hugo-usage/taxonomy.md`

## Leaf bundles

This is better for organizing content that requires supporting files. Everything related to the page can be encapsulated in a folder and referenced in a single `index.md` file. _This page_ is part of a leaf bundle. For my notes, there's a PDF saved in the folder. If you wanted to, you could display it on this page. (I won't do that here, though.)

_Note: you should not use a leaf bundle if the content will include subfolders with additional content/pages._

Examples:

- `/content/hugo-usage/front-matter`
- `/content/hugo-usage/page-bundles`
- `/content/post/2015-01-01-lorem-ipsum`
- `/content/post/2016-12-30-hello-markdown`

### Headless bundles

This is a special case. If you have content that you don't want published -- maybe you're working with markdown files to test something -- you can put everything in a folder and include an `index.md` with `headless: true` in the front matter. Then the content in the folder won't be rendered on the website.

## Branch bundles

This is better for organizing larger thematic content. Maybe you have a section of notes on recipes, and in that section, you want to organize your files for each recipe by region. Create a folder for each region, and add a file called `_index.md` to each region folder. Then use leaf bundles or loose Markdown files for each recipe. You can easily keep track of the files used to create the content and potentially _display_ the content using a different scheme or a unique theme for each region.

_Note: you should use a branch bundle if you will be nesting content under a page or want to show subpages in a list format._

Examples:

- `/content/hugo-example-site-files`
- `/content/hugo-usage`