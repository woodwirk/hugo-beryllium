---
title: "`config.toml` settings"
author: irw
date: '2024-01-05'
toc: true
#categories:
#   - 
#tags:
#   - 
#keys:
#   - 
#refs:
#   - 
#changes:
#  - 
---

# Site-wide configuration

## Taxonomy terms

Hugo uses `tags` and `categories` as the default taxonomy terms. The search functionality has been configured to comb through any defined taxonomy terms, in addition to site content.

See more info on [the example site](/hugo-usage/taxonomy/) and [official documentation](https://gohugo.io/content-management/taxonomies/).

```toml
[taxonomies]
  category = 'categories'
  tag = 'tags'
  author = 'author'
```

## Taxonomy color

To set the background color of the link squares, supply a HEX color in the configuration file.

```toml
    # taxonomy squares
    backgroundColor = "#CBF8DF"
    textColor = "#555555"
```

# Main page

The front page can optionally list content that has a date later than one given. To do so, include the `updated_since` parameter in the site configuration.

```toml
updated_since = "2023-01-01"
```