---
title: List files
date: '2024-01-14'
resources: 
- src: "files/*"
  name: files
---

Maybe you don't need to visualize files. You just display a list of links (like an Apache2 server).

Use a shortcode like the gallery template.

Snippet:

```
{ {< list-files folder="files" >} }
```

In order to display the shortcode above, additional spacing was necessary. The real shortcode should have braces without a middle space, like ``{{`` and ``}}``.

(Note: This won't work with Markdown files because they're processed by Hugo.)

{{< list-files folder="files" >}}