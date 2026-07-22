---
title: Agent-Instructions – Steinbruch Bau
marke: Steinbruch Bau
anrede: Sie
ki-agent: true
tags:
  - marke
  - agent
  - ki
---

# Agent-Instructions – Steinbruch Bau

Maschinenlesbare Handlungsanweisung für KI-Agenten. Die Tokens unten sind die
kanonische Werte-Quelle (identisch mit dem Profil in `brands/`).

## Kontext
- **Marke:** Steinbruch Bau
- **Branche:** Bau / Architektur / Hoch- und Tiefbau
- **Claim (wörtlich verwenden):** „Auf Fels gebaut."
- **Anrede:** Sie
- **Persönlichkeit:** bodenständig, robust, klar, verlässlich

## Regeln
- **Text:** Anrede „Sie" konsequent. Claim nur im obigen Wortlaut.
  Ton entsprechend der Persönlichkeit. Keine verbotenen Floskeln, kein Kanalwechsel im Ton.
- **UI:** Ausschließlich die Tokens unten als CSS-Variablen nutzen (keine magischen Werte).
  `color.accent` nur für CTAs/Highlights. Kontrast IMMER gegen WCAG ≥ 4.5:1 prüfen.
- **Bild:** Stil aus dem Markenprofil (`brands/steinbruch-bau.md`) übernehmen;
  keinen Text ins Bild rendern.

## Design-Tokens (kanonisch)
```json
{
  "color": {
    "primary": "#4A4E54",
    "secondary": "#1C1E22",
    "accent": "#F2C200",
    "neutral": {
      "900": "#1C1E22",
      "700": "#3A3D42",
      "500": "#6E7075",
      "100": "#F4F2EC",
      "0": "#FFFFFF"
    },
    "semantic": {
      "success": "#5A7A4E",
      "warning": "#D9822B",
      "danger": "#B23A2A",
      "info": "#3A6B8A"
    }
  },
  "font": {
    "heading": "Aktiv Grotesk",
    "body": "Inter",
    "mono": "JetBrains Mono",
    "fallback": "Aktiv Grotesk, Inter, Helvetica Neue, sans-serif",
    "scale": {
      "h1": "56px",
      "h2": "40px",
      "h3": "28px",
      "body": "16px",
      "caption": "13px"
    },
    "weight": {
      "regular": "400",
      "medium": "500",
      "bold": "700"
    }
  },
  "space": {
    "unit": "8px",
    "scale": [
      "8px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px",
      "96px"
    ]
  },
  "radius": {
    "sm": "0px",
    "md": "2px",
    "lg": "4px",
    "pill": "999px"
  },
  "motion": {
    "duration_ms": {
      "fast": "150",
      "base": "240",
      "slow": "400"
    },
    "easing": "cubic-bezier(0.2, 0.8, 0.2, 1)"
  },
  "elevation": {
    "sm": "0 1px 2px rgba(28, 30, 34, 0.12)",
    "md": "0 4px 12px rgba(28, 30, 34, 0.18)"
  }
}
```
