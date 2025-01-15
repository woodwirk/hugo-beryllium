---
title: "`config.toml` settings"
author: irw
date: '2024-01-05'
toc: true
force_toc: true
keys:
  - These settings apply across the entire site.
refs:
  - https://gohugo.io/getting-started/configuration/
---

## Site title

The site title will usually appear in the tab of your web browser, next to the page title.

```toml
title = "A Hugo website"
```

## Base URL

`baseurl` or `baseURL`

If building for GitHub pages, you may need to specify the full URL for `baseurl` (e.g. `https://woodwirk.github.io/hugo-beryllium/`). 

If building for another service, like AWS, you may be able to just use `baseurl = "/"`

## Menu items

## Site description

Edit the metadata site description under the `params` list. This shows up in the HTML of the page but may not appear on the site or in the browser.

```toml
[params]
    description = "A website built with Hugo."
```

## Home page content

The front page can optionally list content that has a date later than one given. To do so, include the `updated_since` parameter in the site configuration.

```toml
updated_since = "2023-01-01"
```

## Colors

To set the background color of highlights, supply a HEX color in the configuration file.

```toml
    # taxonomy squares and highlights
    backgroundColor = "#CBF8DF"
    textColor = "#555555"
```

## Taxonomy terms

Hugo uses `tags` and `categories` as the default taxonomy terms. The search functionality has been configured to comb through `tags` and `categories` taxonomy terms, in addition to site content.

If you want additional pages on the website, you can configure them like the following "Author" example. Add a new section starting at no indentation in `config.toml`.

See more info on [the example site](/hugo-usage/taxonomy/) and [official documentation](https://gohugo.io/content-management/taxonomies/).

```toml
[taxonomies]
  category = 'categories'
  tag = 'tags'
  author = 'author'
```

## Table of Contents (TOC) levels

If you want to change the formatting of your content files to start at different header levels, edit the start and end levels in the `markup` config section.

```toml
[markup]
  [markup.tableOfContents]
    startLevel = 2
    endLevel = 3
    ordered = false
```