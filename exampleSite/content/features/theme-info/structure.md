---
title: File structure
date: '2024-01-05'
toc: true
force_toc: true
---

## Folders and files

By default, all folders with content (sections) will show up on the home page grid. Sub-folders (sub-sections) will appear for each section page, unless a different [layout](../layouts) is specified.

Typically a section or branch bundle is made and identified by adding an `_index.md` file.

### Content

Content files are typically `index.md` or `content-name.md`. For more info on Hugo content in general, see [here](../../../hugo-usage/page-bundles).

Content files are typically written in Markdown and include front matter to indicate the title and other metadata. This theme actually allows you to include Markdown content without front matter, in case you forget or just want to record notes -- though best practice is to include the metadata block at the top. The site will display Markdown files that don't have front matter by showing the full path of the file for linking purposes.

You can group related content for a page in common folders. See the example site's "Hugo Usage" page or Hugo's documentation of [page bundles](https://gohugo.io/content-management/page-bundles/) for content organization. 

Photos, audio, and PDF media are supported, as demonstrated in the [media examples on this site](../../media-examples).

*If pages aren't showing at all on the site, check that the page you want to publish is not a draft.*

## Examples

### Pseudo-layout

Here's an example of how you might organize your site files under your main folder:


```
- `/config.toml`
    - Name of site, squares color, icon, etc
- `/static/`
- `/themes/`
- `/content/`
    - `_index.md`
        - Any content you want to include above the list of sections (folders immediately under `/content/`)
    - `about.md`
        - With `layout: about` in the front matter
        - Includes any content you include in the body, followed by a list of tags and categories (+links)
    - `post/`  
    (Blog-related content)
    - `topic-1/`  
    (Content related to a given topic)
        - `standalone-content-1.md`
        - `subtopic-1/`
            - `index.md`
            - `supporting-file-1.png`
            - `supporting-file-2.pdf`
            - `supporting-file-3.txt`
    - `topic-2/`  
    (Content related to a different topic)
        - `_index.md`
        - `subtopic-1`
            - `_index.md`
            - `subtopic-1a`
                - `index.md`
                - `supporting-file-1a.jpg`
            - `subtopic-2a`
                - `index.md`
                - `supporting-file-2a.png`
        - `subtopic-2`
            - `_index.md`
            - `sub-subtopic-a`
                - `index.md`
            - `sub-subtopic-b`
                - `index.md`
            - `supporting-files`
                - `index.md`  
                (With `headless: true` in front matter)
                - supporting files which should not be rendered in the site, including `.md` files
```

### This site

[Click here to see the folder structure used for this website.](../tree.txt) 

You can also clone the theme repository to see for yourself.