# Aloys Portafaix — personal website

A Jekyll website for research, publications, clinical prototypes, and professional experience. Hosted on GitHub Pages at https://aloyspx.github.io.

## Run locally

Requires Ruby and Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Open http://127.0.0.1:4000/. Jekyll rebuilds after content and stylesheet changes. Restart it after editing `_config.yml`. Stop the server with Ctrl+C.

To build without starting a server:

```bash
bundle exec jekyll build
```

## Edit content

- Homepage: `_pages/about.md`
- Publication index: `_pages/publications.html`; individual papers: `_publications/`
- Project index: `_pages/portfolio.html`; index entries: `_data/projects.yml`; project stories: `_portfolio/`
- CV: `_pages/cv.md`. The print button opens the browser print dialog, which can save a PDF.
- Contact details and profile links: `_config.yml`

## Design and implementation

The main pages use `_layouts/editorial*.html`, `assets/css/editorial.css`, and `assets/js/editorial.js`. Fonts are self-hosted in `assets/fonts/`, with their licenses. Publications remain readable without JavaScript; filtering progressively enhances the index. Videos load on demand and do not autoplay.

`DESIGN.md` and shared `.impeccable/` files record the design system and are excluded from the generated website. Private editorial working notes (`PRODUCT.md` and `CONTENT_SOURCES.md`), local dependencies, editor state, and runtime review files are ignored by Git.

The repository originated from [Academic Pages](https://github.com/academicpages/academicpages.github.io), based on Minimal Mistakes. Existing legacy layouts and routes are retained. See `LICENSE` for the original theme license.
