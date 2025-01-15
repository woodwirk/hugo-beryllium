---
title: Shortcode - Photo gallery
author: 'woodwirk'
toc: true
refs:
  - https://gohugo.io/content-management/page-bundles/#comparison
resources: 
- src: "public-domain/*"
  name: public-domain
keys:
    - Create an image gallery using Photoswipe and a shortcode. The format depends on your content organization.
    - The most robust way to include an image gallery is also the least organized.
    - Include all photos at the level of the main content file (index.md or _index.md), and use the gallery shortcode {{< gallery >}}
---

Photoswipe provides image gallery functionality. A version is archived in this repository/theme for offline use.

Images will be displayed in a nested layout. Click one to expand it and show at full resolution.

**Snippet:**

```
{ {< gallery folder="public-domain" >} }

# or

{ {< gallery folder="public-domain" title="Name of header">} }
```

**Note:**
In order for Hugo to display the shortcode above without rendering it, additional spacing was necessary. The real shortcode should have braces without a middle space, like ``{{`` and ``}}``, with their respective `<>` characters.

{{< gallery folder="public-domain" title="Gallery" >}}

## Usage

There are now a few ways to use this feature. How you use the shortcode depends on your file structure.

### With a leaf bundle (`index.md` in a folder)

Put photos in subfolders or at the same level as `index.md`.

#### 1. Most explicit

Declare the page resources in the front matter. This includes a `src` and `name`. Reference the name in the shortcode as `{ {< gallery folder="name" >}}`. Doing so allows you to include multiple folders and reference at different points using the name you provide in the front matter. You can also give the gallery a title to appear as a header.

**Files**

```
photo-gallery
|   index.md
|   
\---folder1
        photo1.jpg
        photo2.jpg
        photo3.jpg
        photo4.jpg
```

**Front matter**

```yaml
resources:
    - src: "folder1/*"
    name: name
```

**Markdown**

```md
Here is some content, followed by a gallery.

{ {< gallery folder="name" title="Gallery" >}}
```

#### 2. Moderate

Optionally declare page resources. Include the gallery shortcode with or without a title. You can reference different subfolders of images by specifying a folder with a wildcard. (e.g. folder="photos*" vs folder="bonus*")

**Files**

```
photo-gallery
|   index.md
|   
\---folder1
        photo1.jpg
        photo2.jpg
        photo3.jpg
        photo4.jpg
```

**Front matter**

No photo resources declared.

**Markdown**

```md
Here is some content, followed by a gallery.

{ {< gallery folder="folder1*" title="Gallery" >}}
```

<!-- Check for yourself: -->
<!-- {{< gallery folder="public-domain*" title="Gallery" >}} -->


#### 3. Least explicit

Optionally declare page resources. Include the gallery shortcode with no folder listed (title optional). This will include all photo resources at every level of the file structure.

**Files**

```
photo-gallery
|   index.md
|   photo1.jpg
|   photo2.jpg
|   photo3.jpg
|   
\---folder1
        photo1.jpg
        photo2.jpg
        photo3.jpg
        photo4.jpg
```

**Front matter**

No photo resources declared.

**Markdown**

```md
Here is some content, followed by a gallery.

{ {< gallery >}}
```

<!-- Check for yourself: -->
<!-- {{< gallery >}} -->

### With a branch bundle (`_index.md` at the top)

All photo resources must be in the same folder as `_index.md` to show up on the main page.

Include the gallery shortcode with no folder listed (title optional). Any photos in subfolders will **_not_** be displayed.

**Files**

```
photo-gallery
    _index.md
    photo1.jpg
    photo2.jpg
    photo3.jpg
    photo4.jpg
```

**Front matter**

No photo resources declared.

**Markdown**

```md
Here is some content, followed by a gallery.

{ {< gallery >}}
```