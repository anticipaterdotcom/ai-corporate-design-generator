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
- **Persönlichkeit:** freundlich, luftig, optimistisch, unkompliziert, verlässlich

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
      "900": "#0E2A47",
      "700": "#2B2D33",
      "500": "#7A8190",
      "100": "#E5EBF2",
      "0": "#FFFFFF"
    },
    "semantic": {
      "success": "#3CB371",
      "warning": "#E8A33D",
      "danger": "#D7263D",
      "info": "#5BA8D6"
    }
  },
  "font": {
    "heading": "Nunito",
    "body": "Nunito",
    "mono": "JetBrains Mono",
    "fallback": "ui-rounded, \"Quicksand\", \"Segoe UI\", system-ui, sans-serif",
    "scale": {
      "h1": "2.75rem",
      "h2": "2rem",
      "h3": "1.5rem",
      "body": "1rem",
      "caption": "0.8125rem"
    },
    "weight": {
      "regular": 400,
      "medium": 600,
      "bold": 800
    }
  },
  "space": {
    "unit": 4,
    "scale": [
      4,
      8,
      12,
      16,
      24,
      32,
      48,
      64
    ]
  },
  "radius": {
    "sm": 8,
    "md": 12,
    "lg": 20,
    "pill": 999
  },
  "motion": {
    "duration_ms": {
      "fast": 120,
      "base": 220,
      "slow": 380
    },
    "easing": "cubic-bezier(0.22, 0.61, 0.36, 1)"
  },
  "elevation": {
    "sm": "0 2px 6px rgba(14,42,71,0.08)",
    "md": "0 10px 24px rgba(14,42,71,0.12)"
  }
}
```
