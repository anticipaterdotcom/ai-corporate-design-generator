---
title: Agent-Instructions – Pixelwald Studio
marke: Pixelwald Studio
anrede: du
ki-agent: true
tags:
  - marke
  - agent
  - ki
---

# Agent-Instructions – Pixelwald Studio

Maschinenlesbare Handlungsanweisung für KI-Agenten. Die Tokens unten sind die
kanonische Werte-Quelle (identisch mit dem Profil in `brands/`).

## Kontext
- **Marke:** Pixelwald Studio
- **Branche:** Indie-Game-Studio / interaktive Erlebnisse
- **Claim (wörtlich verwenden):** „Wo Pixel wild wachsen."
- **Anrede:** du
- **Persönlichkeit:** mutig, verspielt, technikverliebt, community-nah

## Regeln
- **Text:** Anrede „du" konsequent. Claim nur im obigen Wortlaut.
  Ton entsprechend der Persönlichkeit. Keine verbotenen Floskeln, kein Kanalwechsel im Ton.
- **UI:** Ausschließlich die Tokens unten als CSS-Variablen nutzen (keine magischen Werte).
  `color.accent` nur für CTAs/Highlights. Kontrast IMMER gegen WCAG ≥ 4.5:1 prüfen.
- **Bild:** Stil aus dem Markenprofil (`brands/pixelwald-studio.md`) übernehmen;
  keinen Text ins Bild rendern.

## Design-Tokens (kanonisch)
```json
{
  "color": {
    "primary": "#0E0E14",
    "secondary": "#22E0FF",
    "accent": "#FF2E88",
    "neutral": {
      "900": "#F5F5FB",
      "700": "#B4B4C6",
      "500": "#6E6E82",
      "100": "#1A1A26",
      "0": "#0E0E14"
    },
    "semantic": {
      "success": "#2FD98A",
      "warning": "#FFC23D",
      "danger": "#FF4D5E",
      "info": "#3DA5FF"
    }
  },
  "font": {
    "heading": "Chakra Petch",
    "body": "Inter",
    "mono": "JetBrains Mono",
    "fallback": "system-ui, -apple-system, Segoe UI, sans-serif",
    "scale": {
      "h1": 46,
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
    "sm": "0 1px 2px rgba(0,0,0,.40)",
    "md": "0 8px 28px rgba(255,46,136,.22)"
  }
}
```
