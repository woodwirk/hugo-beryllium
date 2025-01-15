---
title: Layouts
author: irw
toc: true
force_toc: true
keys:
    - Apply a layout by specifying the layout name in the front matter. Certain layouts will be automatically applied, according to Hugo's conventions. See the template lookup order in the official documentation.
refs:
    - https://gohugo.io/templates/lookup-order/
---




## `about`

Includes content, if it is present, and all taxonomy terms. Taxonomy terms are listed by section and arranged into a grid of squares.

## `home`

Includes section links in square grid layout. Below the sections, recent content is included. The date can be [configured in the site settings](../settings).

## `single`

The default layout for content pages. Includes key points at the top, references at the bottom, and a list of tags associated with the page.

## `recipe`

Based on the `single` page layout.

Includes components in a sidebar and content in a main panel. If the recipe layout is used on `_index.md` files with other content files in the same folder, those files will be linked at the bottom of the page.

There are multiple ways to use the recipe layout and organize the sidebar contents, as shown by the different front matter organization in [the recipe examples](/features/recipe-examples/).


```yaml
layout: recipe
```


## `section`

Includes a taxonomy-style list of subsections.

Subsections must be at the top level of the folder structure or contain an `_index.md` to be included in the squares format.

```yaml
layout: section
```

## `list-title`

Manually applied to the `_index.md` of a branch bundle or section.

Lists contents by article title.

```yaml
layout: list-section
```

## `list-section`

Manually applied to the `_index.md` of a branch bundle or section.

Includes each subsection in the taxonomy squares format, followed by content in the same folder in an archive list format. Sort by section weight.

To include content under a subsection, create a branch bundle/section (a folder with `_index.md`) under the main branch/section. Do not show pages if they aren't in a section.

```yaml
layout: list-section
```

## `list-section-tags`

Derived from above (`list-section`) but lists the top three tags of each content page to the right of the page. Tags will not appear on responsive mobile layouts where screen width is small.

```yaml
layout: list-section
```