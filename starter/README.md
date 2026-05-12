# Brease Next.js Starter

An opinionated Next.js 15 + App Router starter wired up with the
[`brease-next`](https://github.com/designatives/brease-next) SDK.

This is the template repo cloned by `npx brease-next` when you scaffold a
new project.

## Quickstart

If you scaffolded via the CLI, your `.env.local` is already filled in — just
install and run:

```bash
pnpm install
pnpm dev
```

If you cloned this repo directly:

```bash
cp .env.local.example .env.local
# fill in BREASE_TOKEN, BREASE_ENV, BREASE_DEFAULT_LOCALE
pnpm install
pnpm dev
```

## Project layout

```
app/
  layout.tsx                # Root <html>/<body>, global styles
  [[...slug]]/
    layout.tsx              # BreaseContext + Header/Footer
    page.tsx                # generateMetadata + BreasePage
  sitemap.ts
  robots.ts
  not-found.tsx
components/
  layout/
    Header.tsx              # 'use client' — nav + locale switcher
    Footer.tsx
lib/
  brease/
    component-map.ts        # sectionMap + BreaseContextConfig
    get-page.ts             # cache(fetchPage) — shared fetch
```

## Where to update before going live

- `lib/brease/component-map.ts` — replace `REPLACE_WITH_NAV_ID` with the
  navigation IDs from your Brease project.
- `app/[[...slug]]/page.tsx` — replace the `metadataBase` URL with your
  production domain.
- `app/robots.ts` — replace the `https://example.com` site URL.
- `next.config.mjs` — confirm `images.remotePatterns` matches your Brease
  media host(s).

## Adding a section

1. Create a Client Component under `components/section/` with `'use client'`
   at the top.
2. Add it to `componentMap` in `lib/brease/component-map.ts`. The map key
   must match the section `type` defined in your Brease project.
3. Deploy. The next page render will pick it up via `<BreasePage>`.

## Reference

Full SDK docs: <https://github.com/designatives/brease-next#readme>
