---
title: Agent-Instructions – Saitenklang
marke: Saitenklang
anrede: du
ki-agent: true
tags:
  - marke
  - agent
  - ki
---

# Agent-Instructions – Saitenklang

Maschinenlesbare Handlungsanweisung für KI-Agenten. Die Tokens unten sind die
kanonische Werte-Quelle (identisch mit dem Profil in `brands/`).

## Kontext
- **Marke:** Saitenklang
- **Branche:** Musik-Streaming / Audio-Plattform
- **Claim (wörtlich verwenden):** „Dreh die Welt lauter."
- **Anrede:** du
- **Persönlichkeit:** expressiv, energetisch, kulturell neugierig, nahbar

## Regeln
- **Text:** Anrede „du" konsequent. Claim nur im obigen Wortlaut.
  Ton entsprechend der Persönlichkeit. Keine verbotenen Floskeln, kein Kanalwechsel im Ton.
- **UI:** Ausschließlich die Tokens unten als CSS-Variablen nutzen (keine magischen Werte).
  `color.accent` nur für CTAs/Highlights. Kontrast IMMER gegen WCAG ≥ 4.5:1 prüfen.
- **Bild:** Stil aus dem Markenprofil (`brands/saitenklang.md`) übernehmen;
  keinen Text ins Bild rendern.

## Design-Tokens (kanonisch)
```json
{
  "color": {
    "primary": "#3B1E6E",
    "secondary": "#E0338C",
    "accent": "#F5A623",
    "neutral": {
      "900": "#14091F",
      "700": "#3A3145",
      "500": "#6B6377",
      "100": "#EFEAF4",
      "0": "#FFFFFF"
    },
    "semantic": {
      "success": "#2FB479",
      "warning": "#F0A32A",
      "danger": "#E0433B",
      "info": "#7B5BD6"
    }
  },
  "font": {
    "heading": "Clash Display",
    "body": "Inter",
    "mono": "JetBrains Mono",
    "fallback": "system-ui, -apple-system, Segoe UI, sans-serif",
    "scale": {
      "h1": 48,
      "h2": 32,
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
    "sm": "0 1px 2px rgba(20,9,31,.12)",
    "md": "0 6px 20px rgba(20,9,31,.20)"
  }
}
```
