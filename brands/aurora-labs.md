---
title: Aurora Labs
branche: KI-Entwicklertools
claim: "Baue mit dem Nordlicht."
anrede: du
primaerfarbe: "#1B1140"
schriftfamilie: "Space Grotesk"
persoenlichkeit:
  - neugierig
  - präzise
  - mutig
  - nahbar
tags:
  - marke
  - ki
  - generiert
ki-agent: true
generiert_von: generate_brand.py
---

# Aurora Labs

## Marken-Kern
- **Mission:** Entwickler:innen die präzisesten Werkzeuge an die Hand geben, um KI-Modelle nicht nur zu trainieren, sondern zu verstehen, zu formen und in Produktion zum Leuchten zu bringen.
- **Werte:** Neugier, Präzision, Mut, Klarheit, Zugänglichkeit
- **Zielgruppe:** KI-Entwickler:innen, ML-Engineers und Research-Teams, die anspruchsvolle Pipelines bauen und einen verlässlichen, schnellen Partner mit Haltung suchen.
- **Persönlichkeit:** neugierig, präzise, mutig, nahbar

## Farbwelt

| Rolle | Name | HEX | RGB | CMYK |
| --- | --- | --- | --- | --- |
| Primär | Polar Indigo | `#1B1140` | 27 / 17 / 64 | 95 / 88 / 30 / 65 |
| Sekundär | Polarnacht | `#2E1F6E` | 46 / 31 / 110 | 80 / 75 / 10 / 35 |
| Akzent | Aurora Glow | `#43E7D0` | 67 / 231 / 208 | 60 / 0 / 30 / 0 |
| Highlight | Polarlicht Cyan | `#7DF9FF` | 125 / 249 / 255 | 40 / 0 / 10 / 0 |
| Highlight | Plasma Magenta | `#C77DFF` | 199 / 125 / 255 | 30 / 60 / 0 / 0 |
| Neutral 900 | Tiefes Sternenblau | `#0A0626` | 10 / 6 / 38 | 90 / 85 / 30 / 80 |
| Neutral 700 | Arktisgrau | `#3A3553` | 58 / 53 / 83 | 60 / 55 / 30 / 30 |
| Neutral 500 | Nebelgrau | `#8A87A6` | 138 / 135 / 166 | 45 / 40 / 20 / 5 |
| Neutral 100 | Polarschnee | `#EDECF7` | 237 / 236 / 247 | 5 / 5 / 0 / 0 |
| Erfolg | Eisgrün | `#43E7D0` | 67 / 231 / 208 | 60 / 0 / 30 / 0 |
| Warnung | Sonnensturm | `#FFB347` | 255 / 179 / 71 | 0 / 30 / 75 / 0 |
| Fehler | Aurora-Rot | `#FF4D6D` | 255 / 77 / 109 | 0 / 80 / 50 / 0 |
| Info | Tundra Blau | `#7DB9FF` | 125 / 185 / 255 | 50 / 25 / 0 / 0 |

## Typografie
- **Headings:** Space Grotesk — geometrische Grotesk mit leicht erhöhter x-Höhe, verleiht Headlines einen technisch-klaren, fast architektonischen Charakter.
- **Body:** Inter — neutrale, hervorragend lesbare Sans für Fließtext, Code-Beschriftungen und UI.
- **Mono:** JetBrains Mono — für Code-Snippets, Token-Bezeichnungen und technische Specs.
- **Skala (rem):** h1 3.0 / h2 2.25 / h3 1.5 / body 1.0 / caption 0.8125.
- **Gewichte:** 400 regular, 500 medium, 700 bold — sparsam einsetzen, höchstens zwei Gewichte pro View.

## Logo & Formensprache
- Die Wortmarke „Aurora Labs“ steht linksbündig in Space Grotesk Medium, mit einem Aurora-Bogen über dem „A“ als Bildmarke — der Bogen darf niemals ohne Wortmarke stehen.
- Die Bildmarke ist eine stilisierte Polarlicht-Kurve aus einem 8 px-Raster, angesetzt über den optischen Mittelpunkt, niemals zentriert auf der Wortmarke.
- Formen folgen einem 12 pt-Raster mit weichen Radien (Standard `radius.md`). Ecken sind niemals eckig, Kanten niemals hart — das Leuchten muss mitschwingen können.
- Das Logo braucht mindestens eine Ruhezone in Höhe des „A“ aus der Wortmarke; auf `color.neutral.100` immer die volle Primärversion, nie mit Glow.

## Bildsprache & Tonalität
- **Bildstil:** Abstrakte Datenvisualisierungen — Tensor-Höhenlinien, Latent-Space-Topografien, leuchtende Punktwolken vor dunklen Flächen. Sanfter Glow, kein hartes Neon. Immer mit echtem Kontextbezug zur KI-Entwicklung.
- **Tonalität:** Locker, aber kompetent. Duzt, erklärt ohne zu belehren, feiert die Neugier der Entwickler:innen und lässt Raum für eigene Experimente.

## Do & Don't
> [!do] Do
> Setze Polar Indigo (`#1B1140`) als dominante Fläche ein und nutze Aurora Glow gezielt für interaktive Zustände, Highlights und Call-to-Action.
> Sprich Entwickler:innen direkt mit „du“ an und schreibe Sätze, die kurz, präzise und ohne Marketing-Bullshit auskommen.
> Halte Bildsprache abstrakt und datennah: Tensor-Linien, Embedding-Cluster, Gradient-Maps — alles andere bricht den Markenkern.
> Nutze Space Grotesk für Headings und Inter für Body, niemals eine serifenlose System-Fallback wie Arial oder Roboto fürs Marketing.

> [!dont] Don't
> Verwende nie reines Schwarz `#000000` als Hintergrund — `#0A0626` hält das Leuchten konsistent.
> Überlade Layouts mit Glow-Filtern, mehr als einer pro View, sonst verliert Aurora Glow seine Wirkung.
> Schreibe in passivischer „Sie“-Form, in Buzzword-Ketten („revolutionär, game-changing, disruptiv“) oder in belehrendem Ton.
> Zeige das Logo auf Fotos ohne mindestens 24 px Abstand zur Bildkante und nie auf stark frequentierten Texturen ohne Overlay.

## Design-Tokens

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

Verwandt: [[Farben]] · [[Typografie]] · [[Design-Tokens]] · [[Barrierefreiheit]] · [[_Marken-Index]]
