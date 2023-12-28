---
title: Excluding content
author: irw
date: '2022-08-21'
slug: 
toc: true
categories:
  - hugo
tags:
  - hugo-features
  - organization
  - content
#keys:
#   - 
#refs:
#   - 
changes:
 - "20231228: Moved from site index"
---

If you want to exclude files, here are a few methods:

1. (Probably best approach) Use a [headless bundle](https://gohugo.io/content-management/page-bundles/#headless-bundle). The easiest way to do this is to make a new folder, move the content you want to hide, and create an `index.md` file in that folder. Make sure to include the `headless` parameter in the front matter, and set it to `true`. This allows you to keep your content organized in your notes, and you can separate working files (which may include markdown) from the content that shows on the site.
1. Put the name of the file in the `ignoreFiles` section in `config.toml`
1. Put the file in a folder matching a pattern listed in the `ignoreFiles` list.  
(e.g. put all files under a folder named `/ignore-hugo/` or include an `/ignore-hugo/` directory in each of your sections)