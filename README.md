# Hugo Beryllium

This theme started out as a derivative of [the `hugo-lithium` theme from Yihui Xie](https://github.com/yihui/hugo-lithium). I changed the intent enough that I thought it was no longer lithium, so here it is: `hugo-beryllium`.

## Features
- Offline search (`fuse.js`)
- Offline fonts updated
- Visual aids for content grouping (sections, tags, categories, or other taxonomies)
    - Color specified in config file
- Front matter references listed on content pages
- Media features (photo gallery via PhotoSwipe)

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

# Usage

## Demo the example site

From the `hugo-beryllium` folder:

```sh
hugo server --source="exampleSite" --themesDir="../../"
```

Build:

```sh
hugo -d ../docs --minify --source="exampleSite" --themesDir="../../" 
```

## Folders

By default, all folders with content (sections) will show up on the home page grid. Sub-folders (sub-sections) will appear for each section page.

## Content

See the example site's "Hugo Usage" page or Hugo's documentation of [page bundles](https://gohugo.io/content-management/page-bundles/) for content organization. 

Photos, audio, and PDF media are supported, as demonstrated in the example site.

*If pages aren't showing at all on the site, check that the page you want to publish is not a draft.*

## Settings

- Updated since
- Taxonomy colors