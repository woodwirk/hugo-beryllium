---
title: Make a website with Hugo - Simple
layout: recipe
weight: 1
categories:
  - hugo
  - recipe
# tags:
#   - 
components:
  - A computer with terminal/shell access
  - Web browser
  - Hugo executable
  - Hugo theme
  - "[Hugo quickstart](https://gohugo.io/getting-started/quick-start/)"
refs:
  - https://gohugo.io/getting-started/quick-start/
# origin: person/place/event
date: '2024-01-01'
---

# Instructions

1. Install a version of Hugo on your computer
1. Install git (or download a Hugo theme directly)
1. Follow the Hugo quickstart guide
    - If you're not using the `git submodule` approach, you will need to adapt the quickstart to your configuration.
1. If you don't want to use the `hugo` terminal commands, you can also create text file content directly.

# Front matter

Here is the front matter for this simple recipe.

```yaml
---
title: Make a website with Hugo - Simple
weight: 2
categories:
  - hugo
  - recipe
# tags:
#   - 
layout: recipe
components:
  - A computer with terminal/shell access
  - Web browser
  - Hugo executable
  - Hugo theme
  - "[Hugo quickstart](https://gohugo.io/getting-started/quick-start/)"
refs:
  - https://gohugo.io/getting-started/quick-start/
# origin: person/place/event
date: '2024-01-01'
---
```

The components can be added simply like a bullet list. There is the option to use Markdown syntax for each item, but some features will require the item to be formatted as text (by wrapping in quotation marks).

All other content features, like linking to images or adding shortcodes, still apply here.