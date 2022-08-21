---
title: 'Taxonomies in Hugo'
author: woodwirk
date: '2022-08-21'
slug: 
categories:
  - hugo
tags:
  - hugo-features
  - organization
toc: true
keys:
  - Use taxonomies
refs:
  - https://gohugo.io/content-management/taxonomies/
---

One way to organize the content in your notes and on the site is though taxonomies like tags and categories. This site will automatically show all of your taxonomy terms on the [about page](/about/).

By default, Hugo uses tags and categories. If you want to use custom terms to organize your site, define your own terms in the format:

    singular_taxonomy_term = 'front_matter_term'

Then edit the `config.toml` file to include a section like the following.

```
[taxonomies]
  category = 'categories'
  tag = 'tags'
  author = 'author'
```