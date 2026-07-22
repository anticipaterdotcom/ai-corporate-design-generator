---
title: Agent-Instructions – Kobold Kaffee
marke: Kobold Kaffee
anrede: du
ki-agent: true
tags:
  - marke
  - agent
  - ki
---

# Agent-Instructions – Kobold Kaffee

Maschinenlesbare Handlungsanweisung für KI-Agenten. Die Tokens unten sind die
kanonische Werte-Quelle (identisch mit dem Profil in `brands/`).

## Kontext
- **Marke:** Kobold Kaffee
- **Branche:** Specialty-Kaffeerösterei (Direkthandel & Abo)
- **Claim (wörtlich verwenden):** „Handgeröstet, koboldfrisch."
- **Anrede:** du
- **Persönlichkeit:** warm, verspielt, handwerklich, neugierig

## Regeln
- **Text:** Anrede „du" konsequent. Claim nur im obigen Wortlaut.
  Ton entsprechend der Persönlichkeit. Keine verbotenen Floskeln, kein Kanalwechsel im Ton.
- **UI:** Ausschließlich die Tokens unten als CSS-Variablen nutzen (keine magischen Werte).
  `color.accent` nur für CTAs/Highlights. Kontrast IMMER gegen WCAG ≥ 4.5:1 prüfen.
- **Bild:** Stil aus dem Markenprofil (`brands/kobold-kaffee.md`) übernehmen;
  keinen Text ins Bild rendern.

## Design-Tokens (kanonisch)
```json
{
  "color": {
    "primary": "#3B2417",
    "secondary": "#C87941",
    "accent": "#4FBE8E",
    "neutral": {
      "900": "#1A100B",
      "700": "#3B2417",
      "500": "#7A5A48",
      "100": "#F4ECE1",
      "0": "#FFFFFF"
    },
    "semantic": {
      "success": "#4FBE8E",
      "warning": "#E0A93B",
      "danger": "#C0493B",
      "info": "#3B7BB8"
    }
  },
  "font": {
    "heading": "Fraunces",
    "body": "Inter",
    "mono": "JetBrains Mono",
    "fallback": "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    "scale": {
      "h1": "56px",
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
    "unit": "4px",
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
    "sm": "6px",
    "md": "12px",
    "lg": "20px",
    "pill": "999px"
  },
  "motion": {
    "duration_ms": {
      "fast": 160,
      "base": 240,
      "slow": 420
    },
    "easing": "cubic-bezier(0.22, 1, 0.36, 1)"
  },
  "elevation": {
    "sm": "0 1px 2px rgba(26, 16, 11, 0.08), 0 1px 3px rgba(26, 16, 11, 0.06)",
    "md": "0 6px 12px rgba(26, 16, 11, 0.10), 0 2px 4px rgba(26, 16, 11, 0.08)"
  }
}
```
