# Contributing

Anyone with a (free) GitHub account can propose a brand — **fork** this public
repo and open a pull request. There is no account-less / fully anonymous path:
GitHub always ties a PR to an account, which keeps contributions accountable.
You contribute a **brief**, not code or generated files.

## Propose a new brand

1. **Fork** this repository (external contributors) — or branch it, if you have
   write access.
2. **Create a brief:** `cp briefs/_TEMPLATE.yml briefs/your-brand.yml`
3. **Fill it in.** Only `name` is required. The more you provide
   (`branche`, `anrede`, `persoenlichkeit`, `farb_richtung`, `typo_richtung`,
   `bild_richtung`), the more targeted the result. Empty fields are invented by
   the model. You can pin exact colors/fonts with `farb_primary`, `font_heading`, etc.
4. **Open a PR against `main`** — with your brief file **only**. A maintainer
   runs the engine, which adds the generated files and a live preview.

> Brief field names are German (`branche` = industry, `anrede` = form of address
> `du`/`Sie`, `persoenlichkeit` = personality, `farb_*` = color, `font_*` = font),
> since the generated brands use German brand voice. See `briefs/_TEMPLATE.yml`.

## What happens next — preview before merge

A maintainer reviews the brief and triggers the **private, self-hosted** engine,
which generates from your brief (grounded in 35 real styleguides):
- `brands/your-brand.md` — full profile
- `agents/your-brand.agent.md` — agent instructions
- `tokens/your-brand.tokens.json` — design tokens

The engine then publishes a **live preview for your PR** at
`https://anticipaterdotcom.github.io/ai-corporate-design-generator/pr-preview/pr-<N>/`
so it can be reviewed *before* anything is merged. Merging to `main` (which updates
the root site) is a separate, deliberate step. This public repo runs **no CI and no
runner** of its own — all compute happens on the maintainers' self-hosted runners.

## Is it safe to accept outside PRs? Yes — see [SECURITY.md](SECURITY.md)

- **Nothing runs automatically** on your PR: generation, preview and deploy are all
  maintainer-triggered. A PR cannot execute code on our runners or read any secret.
- **All brand data is validated** before it can reach the live site (colors must be
  literal hex, images must be Unsplash URLs, text is screened for injection).
- The renderer treats every brand value as untrusted and escapes it.

So opening the repo to forks adds reach, not risk.

## Brief conventions

- `anrede`: `du` or `Sie`
- `persoenlichkeit`: 3–5 personality attributes as a list
- Free-text color/font hints are allowed; the model (or the deterministic
  fallback) derives consistent, accessible tokens from them.

## Quality bar

- Color contrast should meet **WCAG ≥ 4.5:1** for body text.
- Brands are **fictional** — no real companies, logos, or trademarks.
