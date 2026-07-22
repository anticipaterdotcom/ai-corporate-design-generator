---
title: Agent-Instructions – Verdant Bio
marke: Verdant Bio
anrede: du
ki-agent: true
tags:
  - marke
  - agent
  - ki
---

# Agent-Instructions – Verdant Bio

Maschinenlesbare Handlungsanweisung für KI-Agenten. Die Tokens unten sind die
kanonische Werte-Quelle (identisch mit dem Profil in `brands/`).

## Kontext
- **Marke:** Verdant Bio
- **Branche:** Naturkosmetik / Bio-Hautpflege
- **Claim (wörtlich verwenden):** „Weniger, aber ehrlich."
- **Anrede:** du
- **Persönlichkeit:** minimalistisch, natürlich, ehrlich, achtsam

## Regeln
- **Text:** Anrede „du" konsequent. Claim nur im obigen Wortlaut.
  Ton entsprechend der Persönlichkeit. Keine verbotenen Floskeln, kein Kanalwechsel im Ton.
- **UI:** Ausschließlich die Tokens unten als CSS-Variablen nutzen (keine magischen Werte).
  `color.accent` nur für CTAs/Highlights. Kontrast IMMER gegen WCAG ≥ 4.5:1 prüfen.
- **Bild:** Stil aus dem Markenprofil (`brands/verdant-bio.md`) übernehmen;
  keinen Text ins Bild rendern.

## Design-Tokens (kanonisch)
```json
{
  "color": {
    "primary": "#7C8B6A",
    "secondary": "#C9B29B",
    "accent": "#B5714E",
    "neutral": {
      "900": "#2E251C",
      "700": "#5C4F42",
      "500": "#8A7E70",
      "100": "#F5F1E8",
      "0": "#FFFFFF"
    },
    "semantic": {
      "success": "#5E8C5A",
      "warning": "#C9922E",
      "danger": "#B4574A",
      "info": "#5A7D8C"
    }
  },
  "font": {
    "heading": "Cormorant Garamond",
    "body": "Source Sans 3",
    "mono": "Source Code Pro",
    "fallback": "system-ui, -apple-system, Segoe UI, sans-serif",
    "scale": {
      "h1": 46,
      "h2": 30,
      "h3": 22,
      "body": 16,
      "caption": 13
    },
    "weight": {
      "regular": 400,
      "medium": 500,
      "bold": 700
    }
  },
  "space": {
    "unit": 8,
    "scale": [
      0,
      4,
      8,
      16,
      24,
      32,
      48,
      64
    ]
  },
  "radius": {
    "sm": 4,
    "md": 8,
    "lg": 16,
    "pill": 999
  },
  "motion": {
    "duration_ms": {
      "fast": 150,
      "base": 250,
      "slow": 400
    },
    "easing": "cubic-bezier(0.2, 0, 0, 1)"
  },
  "elevation": {
    "sm": "0 1px 2px rgba(46,37,28,.08)",
    "md": "0 6px 20px rgba(46,37,28,.14)"
  }
}
```
