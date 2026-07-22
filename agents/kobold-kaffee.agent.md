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
      "900": "#241610",
      "700": "#4A3527",
      "500": "#7A6555",
      "100": "#F0E7D6",
      "0": "#FFFFFF"
    },
    "semantic": {
      "success": "#3FA76E",
      "warning": "#D8952B",
      "danger": "#C0472F",
      "info": "#3E7C8C"
    }
  },
  "font": {
    "heading": "Fraunces",
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
    "sm": "0 1px 2px rgba(36,22,16,.12)",
    "md": "0 6px 20px rgba(36,22,16,.18)"
  }
}
```
