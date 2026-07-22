---
title: Agent-Instructions – Nordlicht Energie
marke: Nordlicht Energie
anrede: Sie
ki-agent: true
tags:
  - marke
  - agent
  - ki
---

# Agent-Instructions – Nordlicht Energie

Maschinenlesbare Handlungsanweisung für KI-Agenten. Die Tokens unten sind die
kanonische Werte-Quelle (identisch mit dem Profil in `brands/`).

## Kontext
- **Marke:** Nordlicht Energie
- **Branche:** Ökostrom / Erneuerbare Energien
- **Claim (wörtlich verwenden):** „Strom, so klar wie der Norden."
- **Anrede:** Sie
- **Persönlichkeit:** vertrauenswürdig, klar, vorausschauend, ruhig

## Regeln
- **Text:** Anrede „Sie" konsequent. Claim nur im obigen Wortlaut.
  Ton entsprechend der Persönlichkeit. Keine verbotenen Floskeln, kein Kanalwechsel im Ton.
- **UI:** Ausschließlich die Tokens unten als CSS-Variablen nutzen (keine magischen Werte).
  `color.accent` nur für CTAs/Highlights. Kontrast IMMER gegen WCAG ≥ 4.5:1 prüfen.
- **Bild:** Stil aus dem Markenprofil (`brands/nordlicht-energie.md`) übernehmen;
  keinen Text ins Bild rendern.

## Design-Tokens (kanonisch)
```json
{
  "color": {
    "primary": "#0B2A4A",
    "secondary": "#126E6A",
    "accent": "#5BE0B0",
    "neutral": {
      "900": "#0A1622",
      "700": "#324155",
      "500": "#647587",
      "100": "#EAF0F4",
      "0": "#FFFFFF"
    },
    "semantic": {
      "success": "#1E9E6A",
      "warning": "#E0A22B",
      "danger": "#D24B4B",
      "info": "#2E7BC4"
    }
  },
  "font": {
    "heading": "Söhne",
    "body": "Söhne",
    "mono": "Söhne Mono",
    "fallback": "system-ui, -apple-system, Segoe UI, sans-serif",
    "scale": {
      "h1": 44,
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
    "sm": "0 1px 2px rgba(10,22,34,.10)",
    "md": "0 6px 20px rgba(10,22,34,.16)"
  }
}
```
