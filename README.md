# `brease-next-templates`

Templates cloned by `npx brease-next` to scaffold a new Next.js + Brease
CMS project.

## Templates

| Folder | What's in it |
| --- | --- |
| [`base/`](./base) | Bare CMS wiring — slug routing, metadata, sitemap, robots, cached page fetcher. No Header, Footer, or section components. Bring your own design. |
| [`starter/`](./starter) | Full opinionated starter — gray corporate theme, responsive Header with locale switcher and mobile menu, CMS-driven Footer section, plus 11 ready-to-use section components (heros, services, logos, news, team, contact form, rich-text body). |

## How the CLI selects a template

The `npx brease-next` CLI uses [`giget`](https://github.com/unjs/giget) to
download a subdir of this repo. It supports the standard
`github:owner/repo/SUBDIR#ref` syntax — point it at `base` or `starter`:

```bash
# starter (full)
BREASE_TEMPLATE_REPO=github:designatives/brease-next-templates/starter npx brease-next

# base (minimal)
BREASE_TEMPLATE_REPO=github:designatives/brease-next-templates/base npx brease-next
```

The CLI prompt in `brease-next` should be updated to ask the user which
template to use and pass the matching subdir to `downloadTemplate(...)`.

## Versioning

Both templates pin `brease-next` to a compatible minor. When the SDK ships
a new minor, bump both templates' `package.json` and tag the repo with the
matching version (`v0.2.x`); `giget` resolves `#v<sdk-version>` first and
falls back to `#main`.

## Reference

SDK README: <https://github.com/designatives/brease-next#readme>
