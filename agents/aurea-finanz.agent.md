---
title: Agent-Instructions – Aurea Finanz
marke: Aurea Finanz
anrede: Sie
ki-agent: true
tags:
  - marke
  - agent
  - ki
---

# Agent-Instructions – Aurea Finanz

Maschinenlesbare Handlungsanweisung für KI-Agenten. Die Tokens unten sind die
kanonische Werte-Quelle (identisch mit dem Profil in `brands/`).

## Kontext
- **Marke:** Aurea Finanz
- **Branche:** Fintech / digitales Private Banking & Vermögensverwaltung
- **Claim (wörtlich verwenden):** „Ihr Vermögen, in ruhiger Hand."
- **Anrede:** Sie
- **Persönlichkeit:** premium, diskret, präzise, souverän, zeitlos

## Regeln
- **Text:** Anrede „Sie" konsequent. Claim nur im obigen Wortlaut.
  Ton entsprechend der Persönlichkeit. Keine verbotenen Floskeln, kein Kanalwechsel im Ton.
- **UI:** Ausschließlich die Tokens unten als CSS-Variablen nutzen (keine magischen Werte).
  `color.accent` nur für CTAs/Highlights. Kontrast IMMER gegen WCAG ≥ 4.5:1 prüfen.
- **Bild:** Stil aus dem Markenprofil (`brands/aurea-finanz.md`) übernehmen;
  keinen Text ins Bild rendern.

## Design-Tokens (kanonisch)
```json
{
  "color": {
    "primary": "#10203A",
    "secondary": "#26456E",
    "accent": "#C9A227",
    "neutral": {
      "900": "#0A1424",
      "700": "#3D4A5C",
      "500": "#8A93A2",
      "100": "#EDE9DF",
      "0": "#F7F4EC"
    },
    "semantic": {
      "success": "#1F6B4A",
      "warning": "#B8761F",
      "danger": "#8A1C2B",
      "info": "#4A6B8A"
    }
  },
  "font": {
    "heading": "Canela",
    "body": "Söhne",
    "mono": "JetBrains Mono",
    "fallback": "ui-serif, Georgia, serif / ui-sans-serif, system-ui, sans-serif",
    "scale": {
      "h1": "48px",
      "h2": "36px",
      "h3": "28px",
      "body": "16px",
      "caption": "13px"
    },
    "weight": {
      "regular": 400,
      "medium": 500,
      "bold": 600
    }
  },
  "space": {
    "unit": 8,
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
    "sm": "4px",
    "md": "12px",
    "lg": "20px",
    "pill": "999px"
  },
  "motion": {
    "duration_ms": {
      "fast": 160,
      "base": 260,
      "slow": 420
    },
    "easing": "cubic-bezier(0.22, 0.61, 0.36, 1)"
  },
  "elevation": {
    "sm": "0 1px 2px rgba(10, 20, 36, 0.08)",
    "md": "0 8px 24px rgba(10, 20, 36, 0.12)"
  }
}
```
