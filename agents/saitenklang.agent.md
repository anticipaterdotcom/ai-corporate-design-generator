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
      "900": "#15121F",
      "700": "#2A2640",
      "500": "#7A7491",
      "100": "#F2EFF7",
      "0": "#FFFFFF"
    },
    "semantic": {
      "success": "#1FB57A",
      "warning": "#F5A623",
      "danger": "#E5333C",
      "info": "#2D7BE5"
    }
  },
  "font": {
    "heading": "Clash Display",
    "body": "Inter",
    "mono": "JetBrains Mono",
    "fallback": "General Sans, Helvetica Neue, Arial, sans-serif",
    "scale": {
      "h1": "64px",
      "h2": "44px",
      "h3": "28px",
      "body": "17px",
      "caption": "13px"
    },
    "weight": {
      "regular": 400,
      "medium": 500,
      "bold": 700
    }
  },
  "space": {
    "unit": 4,
    "scale": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px",
      "96px"
    ]
  },
  "radius": {
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "pill": "999px"
  },
  "motion": {
    "duration_ms": {
      "fast": 150,
      "base": 240,
      "slow": 420
    },
    "easing": "cubic-bezier(0.22, 1, 0.36, 1)"
  },
  "elevation": {
    "sm": "0 2px 8px rgba(21, 18, 31, 0.12)",
    "md": "0 12px 32px rgba(21, 18, 31, 0.18)"
  }
}
```
