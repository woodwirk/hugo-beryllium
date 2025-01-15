---
title: Front matter parameters
toc: true
force_toc: true
keys:
    - Format keys list an unordered list to appear in `single` (default) and `recipe` layouts.
refs:
    - https://gohugo.io/content-management/front-matter/ |
      The official Hugo documentation.
    - "**Formatted** from an informal interview"
    - "[Local content](./content-page)"
---

## `force_toc`

Force a table of contents to appear. Otherwise, TOC appears only for content longer than 400 words when `toc` is enabled.

### Usage

```yaml
toc: true
force_toc: true # or false
```

## `refs`

List references in the front matter, and they will appear at the bottom of the page, after the main content. The template is included in `list-title`, `list`, `recipe`, `single` (default) layouts. It is supplied as a partial, so it can be included in other layouts.

Markdown content is processed.

### Usage

```yaml
refs:
    - https://gohugo.io/content-management/front-matter/ |
      The official Hugo documentation.
    - "**Formatted** from an informal interview"
    - "[Local content](./content-page)"
```

## `keys`

An array of bullet points to show at the top of `single` (default) and `recipe` layouts. This is a partial template that can be included in other layouts as well.

Note: Keys are not run through the Markdown processor, so avoid decorators or special formatting.

### Usage

```yaml
keys:
    - Format key points like an unordered list
    - This is a key point
    - These will appear at the top of the page for `single` and `recipe` layouts
```

## `components_title`

A heading to show at the top of the `recipe` layout sidebar.

Note: If unspecified, the list will be titled "Elements" at the top.

### Usage

```yaml
components_title: Equipment
```

## `components`

For guides, how-to pages, and recipes using the `recipe` layout, a list of materials. There are multiple possibilities for formatting, shown below.

Note: Components **are** run through the Markdown processor, so formatting is allowed.

### Usage

#### Case 1 - Plain elements

```yaml
components:
  - A computer with terminal/shell access
  - Web browser
  - Hugo executable
  - Hugo theme
  - "[Hugo quickstart](https://gohugo.io/getting-started/quick-start/)"
```

#### Case 2 - Named elements

```yaml
components:
  - Shell access: 1 computer
  - Web browser: Any
  - Hugo executable: v0.78 or later
  - Hugo theme: hugo-beryllium
      <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(_why not?_)
  - Quickstart: "[Hugo](https://gohugo.io/getting-started/quick-start/)"
```

#### Case 3 - Mixed elements

If using mixed elements, the first item must not have a dash before it.

```yaml
components:
  Loaf:
  - all-purpose flour: 3 cups
  - salt: 1 tsp
  - baking soda: 1 tsp
  - baking powder: 1 tsp
  - ground cinnamon: 1 tbsp
  - eggs: 3
  - vegetable oil: 1 cup
  - white sugar: 2 1/4 cups
  - vanilla extract: 3 tsp
  - zucchini (grated): 2 cups (1 zucchini)
  - walnuts (chopped): 1 cup
  Equipment:
  - 2x 900g bread tin (4x8")
```


## `time`

Indicate the approximate time needed in content using the `recipe` layout.

Note: This content is not formatted.

### Usage

```yaml
time: ~2 hrs
```