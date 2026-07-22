---
title: Agent-Instructions – Wolke7 Reisen
marke: Wolke7 Reisen
anrede: du
ki-agent: true
tags:
  - marke
  - agent
  - ki
---

# Agent-Instructions – Wolke7 Reisen

Maschinenlesbare Handlungsanweisung für KI-Agenten. Die Tokens unten sind die
kanonische Werte-Quelle (identisch mit dem Profil in `brands/`).

## Kontext
- **Marke:** Wolke7 Reisen
- **Branche:** Reise-Buchungsplattform / Online-Reisebüro
- **Claim (wörtlich verwenden):** „Ab auf Wolke 7."
- **Anrede:** du
- **Persönlichkeit:** freundlich, luftig, optimistisch, unkompliziert

## Regeln
- **Text:** Anrede „du" konsequent. Claim nur im obigen Wortlaut.
  Ton entsprechend der Persönlichkeit. Keine verbotenen Floskeln, kein Kanalwechsel im Ton.
- **UI:** Ausschließlich die Tokens unten als CSS-Variablen nutzen (keine magischen Werte).
  `color.accent` nur für CTAs/Highlights. Kontrast IMMER gegen WCAG ≥ 4.5:1 prüfen.
- **Bild:** Stil aus dem Markenprofil (`brands/wolke7-reisen.md`) übernehmen;
  keinen Text ins Bild rendern.

## Design-Tokens (kanonisch)
```json
{
  "color": {
    "primary": "#2FA8E0",
    "secondary": "#FDE9CE",
    "accent": "#FF6F61",
    "neutral": {
      "900": "#0D2C40",
      "700": "#3A5A70",
      "500": "#6E8697",
      "100": "#EAF4FA",
      "0": "#FFFFFF"
    },
    "semantic": {
      "success": "#2FBF71",
      "warning": "#F5A623",
      "danger": "#D64535",
      "info": "#2E7BC4"
    }
  },
  "font": {
    "heading": "Nunito",
    "body": "Nunito",
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
    "sm": "0 1px 2px rgba(13,44,64,.10)",
    "md": "0 6px 20px rgba(13,44,64,.16)"
  }
}
```
