---
title: 'Taxonomies in Hugo'
author: woodwirk
date: '2022-08-21'
weight: 4
slug: 
categories:
  - hugo
tags:
  - hugo-features
  - organization
toc: true
keys:
  - Use taxonomies to organize your content beyond the file/folder structure.
refs:
  - https://gohugo.io/content-management/taxonomies/
---

One way to organize the content in your notes and on the site is though taxonomies like tags and categories. This site will automatically show all of your taxonomy terms on the [about page]( {{< ref "/about" >}} ).

By default, Hugo uses tags and categories. If you want to use custom terms to organize your site, define your own terms in the format:

    singular_taxonomy_term = 'front_matter_term'

Then edit the `config.toml` file to include a section like the following.

```toml
[taxonomies]
  category = 'categories' # explicitly keep the default
  tag = 'tags' # explicitly keep the default
  author = 'author' # new
```