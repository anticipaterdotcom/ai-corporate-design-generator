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
- **Persönlichkeit:** premium, diskret, präzise, souverän

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
      "900": "#1B1712",
      "700": "#4A443B",
      "500": "#837B6E",
      "100": "#F2EFE9",
      "0": "#FFFFFF"
    },
    "semantic": {
      "success": "#2E7D5B",
      "warning": "#C8871F",
      "danger": "#B23A3A",
      "info": "#2F6FA8"
    }
  },
  "font": {
    "heading": "Canela",
    "body": "Söhne",
    "mono": "Söhne Mono",
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
    "sm": "0 1px 2px rgba(27,23,18,.10)",
    "md": "0 6px 20px rgba(27,23,18,.16)"
  }
}
```
