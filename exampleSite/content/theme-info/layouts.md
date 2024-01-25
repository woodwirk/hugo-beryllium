---
title: Layouts
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

Apply a layout by specifying the layout name in the front matter. Certain layouts will be automatically applied, according to Hugo's conventions.


# About

Includes content, if it is present, and all taxonomy terms, by section.


# Recipe

Manually applied.

```
layout: recipe
```

Includes components in a sidebar and content in a main panel.

There are three styles of recipe layouts, as shown by the different front matter organization in [the recipe examples](/recipe-examples/).


# Section

Includes a taxonomy-style list of subsections.

# List-section

Manually applied to the `_index.md` of a branch bundle.

```
layout: list-section
```

Includes each subsection in the taxonomy squares format, followed by content in an archive list format.

To include content under a subsection, create a branch bundle (a folder with `_index.md`) under the main branch/section.