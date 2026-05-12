# Brease Next.js Base Template

A minimal Next.js 15 + App Router starter wired up with the
[`brease-next`](https://github.com/designatives/brease-next) SDK.

This is the bare scaffold: slug routing, metadata generation, sitemap,
robots, and a cached page fetcher — but no Header, Footer, or section
components. You add those as you build the site.

## Quickstart

If you scaffolded via the CLI, your `.env.local` is already filled in:

```bash
npm install
npm run dev
```

If you cloned this repo directly:

```bash
cp .env.local.example .env.local
# fill in BREASE_TOKEN, BREASE_ENV, BREASE_DEFAULT_LOCALE
npm install
npm run dev
```

## Project layout

```
app/
  layout.tsx                # Root <html>/<body>, global styles
  [[...slug]]/
    layout.tsx              # BreaseContext wrapper (no Header/Footer)
    page.tsx                # generateMetadata + BreasePage
  sitemap.ts
  robots.ts
  not-found.tsx
lib/
  brease/
    component-map.ts        # empty sectionMap + BreaseContextConfig
    get-page.ts             # cache(fetchPage) — shared fetch
```

## Where to update before going live

- `lib/brease/component-map.ts` — add navigation IDs to `contextData.navigations`
  (e.g. `[{ key: "header", id: "nav-…" }]`) and register section components
  in `componentMap` as you build them.
- `app/[[...slug]]/page.tsx` — replace the `metadataBase` URL with your
  production domain.
- `app/robots.ts` — replace the `https://example.com` site URL.
- `next.config.mjs` — confirm `images.remotePatterns` matches your Brease
  media host(s).

## Reference

Full SDK docs: <https://github.com/designatives/brease-next#readme>
