---
title: Make a website with Hugo - Moderate
layout: recipe
weight: 2
categories:
  - hugo
  - recipe
# tags:
#   - 
components_title: Prepare
components:
  - Shell access: 1 computer
  - Web browser: Any
  - Hugo executable: v0.78 or later
  - Hugo theme: hugo-beryllium
      <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(_why not?_)
  - Quickstart: "[Hugo](https://gohugo.io/getting-started/quick-start/)"
refs:
  - https://gohugo.io/getting-started/quick-start/
# origin: person/place/event
date: '2024-01-01'
type: recipe-moderate
---

# Instructions

1. Install a version of Hugo on your computer
    ![Alt text](pexels-allan-feitor-7555440.jpg)
1. Install git (or download a Hugo theme directly)
1. Follow the Hugo quickstart guide
    - If you're not using the `git submodule` approach, you will need to adapt the quickstart to your configuration.
1. If you don't want to use the `hugo` terminal commands, you can also create text file content directly.
    ![Alt text](pexels-anh-nguyen-16961112.jpg)
1. Make this example a bundle and include images.

# Front matter

Here is the front matter for this moderate recipe.

```yaml
---
title: Make a website with Hugo - Moderate
layout: recipe
weight: 2
categories:
  - hugo
  - recipe
# tags:
#   - 
components_title: Prepare
components:
  - Shell access: 1 computer
  - Web browser: Any
  - Hugo executable: v0.78 or later
  - Hugo theme: hugo-beryllium
      <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(_why not?_)
  - Quickstart: "[Hugo](https://gohugo.io/getting-started/quick-start/)"
refs:
  - https://gohugo.io/getting-started/quick-start/
# origin: person/place/event
date: '2024-01-01'
---
```

Note the use of `key:value` pairs this time. You might typically list an item as the key and a quantity or condition as the value.

You can also include html in the components lists.