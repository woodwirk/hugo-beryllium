---
title: File structure
date: '2024-01-05'
---

## Folders

By default, all folders with content (sections) will show up on the home page grid. Sub-folders (sub-sections) will appear for each section page.

## Content

See the example site's "Hugo Usage" page or Hugo's documentation of [page bundles](https://gohugo.io/content-management/page-bundles/) for content organization. 

Photos, audio, and PDF media are supported, as demonstrated in the example site media-examples folder.

*If pages aren't showing at all on the site, check that the page you want to publish is not a draft.*

## Example

Here's an example of how you might organize your site files under your main folder:

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

---