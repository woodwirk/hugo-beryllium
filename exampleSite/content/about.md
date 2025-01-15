---
title: "About"
layout: 'about'
---

This is an example website for rendering notes from plain text files using Hugo and the hugo-beryllium theme. It doubles as the example site documentation.

## Note

Most of this theme was developed using Hugo v0.78.1/extended, which is quite old by the time you're reading this. It has been lightly screened with v0.140. Some features may need revision for full compatibility with current versions of Hugo.

The theme was forked from [@jrutheiser/hugo-lithium-theme](https://github.com/jrutheiser/hugo-lithium-theme) and [@yihui/hugo-lithium](https://github.com/yihui/hugo-lithium). Additionally, it includes the following features, which can be used on a local server.

## Features

- offline fuzzy searching from [fuse.js](https://github.com/krisk/Fuse)
- offline fonts (`woff2`)
- offline photo gallery from [PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)

See more [here](/features).

## Usage

Typical Hugo theme usage. View the example site and docs here: [**https://woodwirk.github.io/hugo-beryllium**](https://woodwirk.github.io/hugo-beryllium)

### Demo the example site locally

Instead of making a new website from scratch, you could also experiment with this theme's example site.

```sh
git clone https://github.com/woodwirk/hugo-beryllium.git
cd hugo-beryllium
hugo server --source="exampleSite" --themesDir="../../"
```

Build docs:

```sh
hugo -d ../docs --baseURL https://woodwirk.github.io/hugo-beryllium/ --minify --source="exampleSite" --themesDir="../../"
```

### Get started with your own site

If you've never used Hugo before, [check out the quick start guide](https://gohugo.io/getting-started/quick-start/).

For example:

1. Install Hugo
1. Install Git
1. Make a home for your website and set up the theme. Run these commands in your terminal:
    ```sh
    hugo new site mysite
    cd mysite
    git init
    git submodule add https://github.com/woodwirk/hugo-beryllium.git themes/hugo-beryllium
    cp themes/hugo-beryllium/exampleSite/config.toml config.toml
    ```

### Use the Front Matter extension in VS Code

I tried to work with Hugo manually for some time. Eventually it became too much to remember each time I came back after a hiatus, and it can be challenging for someone new to get acclimated. [Front Matter](https://frontmatter.codes/) takes care of that and more with a convenient sidebar GUI.

This repository includes helper files for getting started with Front Matter. To take advantage of them, just copy over at least the `frontmatter.json` file into your main website folder. You can also use the `.frontmatter` folder to set up the basis for templates and other features.

```sh
cp themes/hugo-beryllium/frontmatter.json frontmatter.json
```

---
