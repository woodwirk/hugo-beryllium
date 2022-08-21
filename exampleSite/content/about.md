---
title: "About"
layout: 'about'
---

This is a "hello world" example website for rendering notes from plain text files. 

The theme was forked from [@jrutheiser/hugo-lithium-theme](https://github.com/jrutheiser/hugo-lithium-theme),[@yihui/hugo-lithium](https://github.com/yihui/hugo-lithium), and [@woodwirk/hugo-lithium-search](https://github.com/woodwirk/hugo-lithium-search). Additionally, it includes offline fuzzy searching from [fuse.js](https://github.com/krisk/Fuse).

---

# Setup
Here's an example of how you might organize these files under your main folder:

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