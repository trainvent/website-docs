# website-docs

Documentation for Trainvent projects, published at [docs.trainvent.com](https://docs.trainvent.com).

## Develop

```bash
npm install
npm start               # English
npm start -- --locale de  # German
npm run build
```

## Add a product

1. Add pages under `docs/<category>/<product>/` (`index.md` is the overview, plus guides and `resources.md`).
2. Add the German versions under `i18n/de/docusaurus-plugin-content-docs/current/` at the same path.
3. Add a card to `src/data/products.ts`.
4. For a new category, add a sidebar in `sidebars.ts` and a navbar item in `docusaurus.config.ts`.

Pushes to `main` deploy to GitHub Pages.

## Change the look

Each look is one file in `src/css/themes/` (colours, borders, sidebar and navbar styling). To switch, set `SITE_THEME` in `docusaurus.config.ts` to the file name. To make a new look, copy `classic.css` and edit it.
