# Hugo Beryllium

This theme started out as a derivative of [the `hugo-lithium` theme from Yihui Xie](https://github.com/yihui/hugo-lithium). I changed the intent enough that I thought it was no longer lithium, so here it is: `hugo-beryllium`.

## Features
- Offline search (`fuse.js`)
- Offline fonts updated
- Visual aids for content grouping (sections, tags, categories, or other taxonomies)
    - Color specified in config file
- Front matter references listed on content pages
- Media features (photo gallery via PhotoSwipe)
- Recipe content layout

### Changes
- Offline fonts updated. Only Lato for content but Merriweather retained
- Logo can be referenced from anywhere under `static`

### Features from `hugo-lithium`

- Blog
- Responsive
- Disqus
- Google Analytics
- Google web fonts (Merriweather and Lato)
- MathJax
- highlight.js
- Support for [MathJax](https://bookdown.org/yihui/blogdown/output-format.html) (for rendering LaTeX math expressions) and highlight.js (for syntax highlighting).
    - For both libraries, you can specify the CDN host (e.g., CloudFlare, BootCDN, ...).
    - For highlight.js, you can specify additional languages (e.g., `r`, `yaml`, `tex`, ...).
- Google web fonts (embedded in the theme so that visitors from countries where Google is banned can still see the typefaces).
- Improved Hugo's built-in Disqus template, so that you can actually view the comments even when you are previewing the website locally.
- Replaced the variable `.Permalink` with `.RelPermalink`, and function `absURL` with `relURL` where necessary. It is a bad idea to use full absolute links (with the protocol and domain) in general. For example, `.Permalink` and `absURL` may generate URLs of the form `http://www.example.com/foo/bar.html`, but `/foo/bar.html` is more portable.

## License

The original themes were released under the MIT License by [Jonathan Rutheiser](https://github.com/jrutheiser/hugo-lithium-theme/blob/master/LICENSE.md) and [Yihui Xie](https://github.com/yihui/hugo-lithium/blob/master/LICENSE.md). This version is also released under the MIT License and includes the unmodified fuse.js software licensed under the Apache 2.0 License.

## Usage

Typical Hugo theme usage. View the example site and docs here: [**https://woodwirk.github.io/hugo-beryllium**](https://woodwirk.github.io/hugo-beryllium)

### Get started

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

### Demo the example site locally

Instead of making a new website from scratch, you could also experiment with this theme's example site.

```sh
git clone https://github.com/woodwirk/hugo-beryllium.git
cd hugo-beryllium
hugo server --source="exampleSite" --themesDir="../../"
```

Build:

```sh
hugo -d ../docs --baseURL https://woodwirk.github.io/hugo-beryllium/ --minify --source="exampleSite" --themesDir="../../"
```

### Use the Front Matter extension in VS Code

I tried to work with Hugo manually for some time. Eventually it became too much to remember each time I came back after a hiatus, and it can be challenging for someone new to get acclimated. [Front Matter](https://frontmatter.codes/) takes care of that and more with a convenient sidebar GUI.

This repository includes helper files for getting started with Front Matter. To take advantage of them, just copy over at least the `frontmatter.json` file into your main website folder. You can also use the `.frontmatter` folder to set up the basis for templates and other features.

```sh
cp themes/hugo-beryllium/frontmatter.json frontmatter.json
```