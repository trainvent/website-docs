# Plan: Trainvent docs site

Goal: a product docs site in the style of docs.waveshare.com for Trainvent hardware and software projects, starting with `Raspberry_Pi_5_Setup`.

## Stack

- **Docusaurus** (docs.waveshare.com is built on it): top-nav category dropdowns, collapsible product sidebar, breadcrumbs, "On this page" TOC, prev/next cards, dark mode, EN/DE language switch, `Ctrl K` search.
- Search: `@easyops-cn/docusaurus-search-local` first; Algolia DocSearch later if needed.
- Hosting: GitHub Pages at `docs.trainvent.com`, same as `www.trainvent.com`.

## Structure

```
Top nav:   All Documents | Raspberry Pi ▾ | ESP32 ▾ | Software ▾ | 🌐 EN/DE | GitHub | ☀ | Search
Sidebar:   products in the chosen category
Product:   Overview (photo, features, buy links) → guides → Resources (files, repos, datasheets) → FAQ
```

Example:

```
docs/raspberry-pi/pi-5-case/
  index.md          Overview + buy links (Shop, Etsy)
  case-build.md     from case/Instructions.md
  fan-control.md    from fan/Instructions.md
  resources.md      STL files, GitHub repo, Pi 5 datasheets
i18n/de/...         German versions (from Bauanleitung.md)
```

"All Documents" is a landing page with a card grid of all products.

## Content source

Same as Waveshare: docs are written here. Each project repo keeps code, CAD and firmware, and its README links to its docs page. The Resources page links back to the repo (and its folders, e.g. STL files).

## Steps

1. Scaffold Docusaurus, i18n EN/DE, local search, GitHub Pages workflow.
2. Show 2-3 rough visual directions (Trainvent branding), then build the chosen one.
3. Product page template and "All Documents" landing.
4. Migrate Raspberry Pi 5 Case docs (EN + DE).
5. DNS for `docs.trainvent.com`, deploy.
6. Add ESP32-C6-ePaper-1.54, ESPal (now public) and Hexaclamp.

Hardware only for now. Software can be added later as its own top-nav category.
