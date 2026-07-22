---
title: Agent-Instructions – Aurora Labs
marke: Aurora Labs
anrede: du
ki-agent: true
tags:
  - marke
  - agent
  - ki
---

# Agent-Instructions – Aurora Labs

Maschinenlesbare Handlungsanweisung für KI-Agenten. Die Tokens unten sind die
kanonische Werte-Quelle (identisch mit dem Profil in `brands/`).

## Kontext
- **Marke:** Aurora Labs
- **Branche:** KI-Entwicklertools
- **Claim (wörtlich verwenden):** „Baue mit dem Nordlicht."
- **Anrede:** du
- **Persönlichkeit:** neugierig, präzise, mutig, nahbar

## Regeln
- **Text:** Anrede „du" konsequent. Claim nur im obigen Wortlaut.
  Ton entsprechend der Persönlichkeit. Keine verbotenen Floskeln, kein Kanalwechsel im Ton.
- **UI:** Ausschließlich die Tokens unten als CSS-Variablen nutzen (keine magischen Werte).
  `color.accent` nur für CTAs/Highlights. Kontrast IMMER gegen WCAG ≥ 4.5:1 prüfen.
- **Bild:** Stil aus dem Markenprofil (`brands/aurora-labs.md`) übernehmen;
  keinen Text ins Bild rendern.

## Design-Tokens (kanonisch)
```json
{
  "color": {
    "primary": "#1B1140",
    "secondary": "#2E1F6E",
    "accent": "#43E7D0",
    "neutral": {
      "900": "#0A0626",
      "700": "#3A3553",
      "500": "#8A87A6",
      "100": "#EDECF7",
      "0": "#FFFFFF"
    },
    "semantic": {
      "success": "#43E7D0",
      "warning": "#FFB347",
      "danger": "#FF4D6D",
      "info": "#7DB9FF"
    },
    "highlight": {
      "cyan": "#7DF9FF",
      "magenta": "#C77DFF"
    }
  },
  "font": {
    "heading": "Space Grotesk",
    "body": "Inter",
    "mono": "JetBrains Mono",
    "fallback": "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
    "scale": {
      "h1": "3rem",
      "h2": "2.25rem",
      "h3": "1.5rem",
      "body": "1rem",
      "caption": "0.8125rem"
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
      "96px",
      "128px"
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
      "fast": 120,
      "base": 220,
      "slow": 420
    },
    "easing": "cubic-bezier(0.22, 1, 0.36, 1)"
  },
  "elevation": {
    "sm": "0 1px 2px rgba(10, 6, 38, 0.4), 0 0 12px rgba(67, 231, 208, 0.08)",
    "md": "0 8px 24px rgba(10, 6, 38, 0.55), 0 0 32px rgba(67, 231, 208, 0.16)"
  },
  "accessibility": {
    "contrast_check": "Polarweiss (#EDECF7) auf Polar Indigo (#1B1140) erreicht ca. 14.8:1 (AAA); Aurora Glow (#43E7D0) auf Polar Indigo erreicht ca. 9.6:1 (AAA) und ist als Akzentfarbe auf dunklen Flächen uneingeschränkt nutzbar."
  }
}
```
