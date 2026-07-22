# Contributing

## Propose a new brand

1. **Create a brief:** `cp briefs/_TEMPLATE.yml briefs/your-brand.yml`
2. **Fill it in.** Only `name` is required. The more you provide
   (`branche`, `anrede`, `persoenlichkeit`, `farb_richtung`, `typo_richtung`,
   `bild_richtung`), the more targeted the result. Empty fields are invented by
   the model. You can pin exact colors/fonts with `farb_primary`, `font_heading`, etc.
3. **Open a PR** — with your brief file only. The Action adds the generated files.

> Brief field names are German (`branche` = industry, `anrede` = form of address
> `du`/`Sie`, `persoenlichkeit` = personality, `farb_*` = color, `font_*` = font),
> since the generated brands use German brand voice. See `briefs/_TEMPLATE.yml`.

## What happens next

A maintainer comments on the PR:

```
/generate briefs/your-brand.yml
```

Then the PR receives:
- `brands/your-brand.md` — full profile
- `agents/your-brand.agent.md` — agent instructions
- `tokens/your-brand.tokens.json` — design tokens
- a comment linking the built **Storybook artifact**

## Brief conventions

- `anrede`: `du` or `Sie`
- `persoenlichkeit`: 3–5 personality attributes as a list
- Free-text color/font hints are allowed; the model (or the deterministic
  fallback) derives consistent, accessible tokens from them.

## Quality bar

- Color contrast should meet **WCAG ≥ 4.5:1** for body text.
- Brands are **fictional** — no real companies, logos, or trademarks.
