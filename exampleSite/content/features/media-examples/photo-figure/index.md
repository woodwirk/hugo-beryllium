---
title: Photos as figure with caption
keys:
    - Use the figure shortcode to adjust the image size and include a caption.
---

There are a couple of ways to include a photo or gif in your content.

## Standard Markdown

This is easy and familiar, but it doesn't give you much control over the image.

```
![a photo](pexels-allan-feitor-7555440.jpg)
```

![a photo](pexels-allan-feitor-7555440.jpg)

## Figure shortcode

To adjust the image size, include a figure instead of using Markdown. You can also specify a caption for the image. This theme is configured to center the image and caption.

```
{ {< figure src="pexels-allan-feitor-7555440.jpg" title="A photo from Pexels, in the public domain." width="50%" >}}
# don't forget to remove the space between the first two brackets.
```

{{< figure src="pexels-allan-feitor-7555440.jpg" title="A photo from Pexels, in the public domain." width="50%" >}}

## Hugo image processing

There are also some other options from Hugo for resizing images or performing other operations. See more here: https://gohugo.io/content-management/image-processing/.