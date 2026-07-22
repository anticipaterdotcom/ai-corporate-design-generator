---
title: Agent-Instructions – Lumen Health
marke: Lumen Health
anrede: Sie
ki-agent: true
tags:
  - marke
  - agent
  - ki
---

# Agent-Instructions – Lumen Health

Maschinenlesbare Handlungsanweisung für KI-Agenten. Die Tokens unten sind die
kanonische Werte-Quelle (identisch mit dem Profil in `brands/`).

## Kontext
- **Marke:** Lumen Health
- **Branche:** Digital Health / Telemedizin
- **Claim (wörtlich verwenden):** „Gesundheit, die zuhört."
- **Anrede:** Sie
- **Persönlichkeit:** beruhigend, klar, zugänglich, kompetent

## Regeln
- **Text:** Anrede „Sie" konsequent. Claim nur im obigen Wortlaut.
  Ton entsprechend der Persönlichkeit. Keine verbotenen Floskeln, kein Kanalwechsel im Ton.
- **UI:** Ausschließlich die Tokens unten als CSS-Variablen nutzen (keine magischen Werte).
  `color.accent` nur für CTAs/Highlights. Kontrast IMMER gegen WCAG ≥ 4.5:1 prüfen.
- **Bild:** Stil aus dem Markenprofil (`brands/lumen-health.md`) übernehmen;
  keinen Text ins Bild rendern.

## Design-Tokens (kanonisch)
```json
{
  "color": {
    "primary": "#178A8A",
    "secondary": "#0F6E6E",
    "accent": "#FF7A66",
    "neutral": {
      "900": "#14252B",
      "700": "#3B4E56",
      "500": "#6E828B",
      "100": "#E3EEF0",
      "0": "#FFFFFF"
    },
    "semantic": {
      "success": "#1E8A5B",
      "warning": "#C77A12",
      "danger": "#C63D3D",
      "info": "#1F6FB0"
    }
  },
  "font": {
    "heading": "Fraunces",
    "body": "Nunito Sans",
    "mono": "IBM Plex Mono",
    "fallback": "system-ui, -apple-system, Segoe UI, sans-serif",
    "scale": {
      "h1": 42,
      "h2": 28,
      "h3": 20,
      "body": 17,
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
    "sm": 6,
    "md": 12,
    "lg": 20,
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
    "sm": "0 1px 2px rgba(20,37,43,.08)",
    "md": "0 6px 20px rgba(20,37,43,.12)"
  }
}
```
