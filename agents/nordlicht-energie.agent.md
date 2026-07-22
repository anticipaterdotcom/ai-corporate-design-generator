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
      "900": "#0E1620",
      "700": "#243240",
      "500": "#7A8694",
      "100": "#E3E8EC",
      "0": "#F4F8FA"
    },
    "semantic": {
      "success": "#126E6A",
      "warning": "#D6A21E",
      "danger": "#B03434",
      "info": "#0B2A4A"
    }
  },
  "font": {
    "heading": "Söhne",
    "body": "Söhne",
    "mono": "'IBM Plex Mono', 'Söhne Mono', monospace",
    "fallback": "Inter, 'Helvetica Neue', Arial, sans-serif",
    "scale": {
      "h1": "44px",
      "h2": "32px",
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
    "easing": "cubic-bezier(0.22, 0.61, 0.36, 1)"
  },
  "elevation": {
    "sm": "0 1px 2px rgba(14, 22, 32, 0.08), 0 1px 3px rgba(14, 22, 32, 0.06)",
    "md": "0 4px 12px rgba(14, 22, 32, 0.10), 0 8px 24px rgba(14, 22, 32, 0.08)"
  }
}
```
