---
title: Agent-Instructions – Nachtwild
marke: Nachtwild
anrede: du
ki-agent: true
tags:
  - marke
  - agent
  - ki
---

# Agent-Instructions – Nachtwild

Maschinenlesbare Handlungsanweisung für KI-Agenten. Die Tokens unten sind die
kanonische Werte-Quelle (identisch mit dem Profil in `brands/`).

## Kontext
- **Marke:** Nachtwild
- **Branche:** Naturweinbar & Weinhandel
- **Claim (wörtlich verwenden):** „Wein, wie er ist. Nicht wie er sein soll."
- **Anrede:** du
- **Persönlichkeit:** unangepasst, ehrlich, nachtaktiv, handwerklich, unaufgeregt

## Regeln
- **Text:** Anrede „du" konsequent. Claim nur im obigen Wortlaut.
  Ton entsprechend der Persönlichkeit. Keine verbotenen Floskeln, kein Kanalwechsel im Ton.
- **UI:** Ausschließlich die Tokens unten als CSS-Variablen nutzen (keine magischen Werte).
  `color.accent` nur für CTAs/Highlights. Kontrast IMMER gegen WCAG ≥ 4.5:1 prüfen.
- **Bild:** Stil aus dem Markenprofil (`brands/nachtwild.md`) übernehmen;
  keinen Text ins Bild rendern.

## Design-Tokens (kanonisch)
```json
{
  "color": {
    "primary": "#4A1A2F",
    "secondary": "#6B2747",
    "accent": "#D98E48",
    "neutral": {
      "900": "#161013",
      "700": "#3A2A30",
      "500": "#7A6A70",
      "100": "#F5EFE6",
      "0": "#FBF7F1"
    },
    "semantic": {
      "success": "#5C7A3A",
      "warning": "#C99A2E",
      "danger": "#9B2C2C",
      "info": "#6E5B8E"
    }
  },
  "font": {
    "heading": "GT Sectra Display",
    "body": "Söhne Mono",
    "mono": "Söhne Mono",
    "fallback": "Inter Tight, ui-monospace, 'JetBrains Mono', monospace",
    "scale": {
      "h1": "64px",
      "h2": "36px",
      "h3": "24px",
      "body": "16px",
      "caption": "13px"
    },
    "weight": {
      "regular": 400,
      "medium": 500,
      "bold": 700
    }
  },
  "space": {
    "unit": "8px",
    "scale": [
      "4px",
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
    "sm": "4px",
    "md": "8px",
    "lg": "16px",
    "pill": "999px"
  },
  "motion": {
    "duration_ms": {
      "fast": 120,
      "base": 220,
      "slow": 420
    },
    "easing": "cubic-bezier(0.22, 0.61, 0.36, 1)"
  },
  "elevation": {
    "sm": "0 1px 2px rgba(22,16,19,0.45)",
    "md": "0 6px 18px rgba(22,16,19,0.55)"
  }
}
```
