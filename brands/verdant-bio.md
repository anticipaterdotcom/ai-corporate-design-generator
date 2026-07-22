---
title: Verdant Bio
branche: Naturkosmetik / Bio-Hautpflege
claim: "Weniger, aber ehrlich."
anrede: du
primaerfarbe: "#7C8B6A"
schriftfamilie: "Cormorant Garamond, 'EB Garamond', Georgia, serif"
persoenlichkeit:
  - minimalistisch
  - natürlich
  - ehrlich
  - achtsam
  - klar
tags:
  - marke
  - ki
  - generiert
ki-agent: true
generiert_von: generate_brand.py
---

# Verdant Bio

## Marken-Kern
- **Mission:** Wir pflegen Haut mit so wenigen, so reinen Zutaten wie möglich – biologisch, wirksam, rückverfolgbar.
- **Werte:** Transparenz, Achtsamkeit, Reduktion, Natürlichkeit, Verantwortung
- **Zielgruppe:** Bewusste Frauen und Männer 25–45, die Inhaltsstoffe lesen können, Minimalismus leben und hochwertige, ehrliche Pflege suchen.
- **Persönlichkeit:** minimalistisch, natürlich, ehrlich, achtsam, klar

## Farbwelt
| Rolle | Name | HEX | RGB | CMYK |
|---|---|---|---|---|
| Primär | Salbeigrün | `#7C8B6A` | 124, 139, 106 | 33, 18, 47, 31 |
| Sekundär | Sandbeige | `#C9B29B` | 201, 178, 155 | 18, 25, 36, 12 |
| Akzent | Terrakotta | `#B5714E` | 181, 113, 78 | 25, 55, 70, 15 |
| Neutral 900 | Eichenrinde | `#2E2A23` | 46, 42, 35 | 0, 9, 24, 82 |
| Neutral 100 | Leinen | `#F2EEE6` | 242, 238, 230 | 4, 4, 8, 0 |
| Semantik Erfolg | Moosgrün | `#5C7A4E` | 92, 122, 78 | 47, 22, 70, 30 |
| Semantik Warnung | Honiggelb | `#C89B3C` | 200, 155, 60 | 12, 30, 90, 5 |
| Semantik Fehler | Ziegelrot | `#A0432F` | 160, 67, 47 | 18, 75, 80, 20 |
| Semantik Info | Quellblau | `#6B8A8E` | 107, 138, 142 | 45, 20, 30, 12 |

## Typografie
Headings: **Cormorant Garamond** (Serif, 300/400/500) – elegante Reduktion, botanische Anmutung. Body: **Source Sans 3** (Sans, 300/400/600) – sachlich, lesbar, modern. Code/Lieferanten-Etiketten: **JetBrains Mono**. Fallback-Stack: `Cormorant Garamond, 'EB Garamond', Georgia, serif` bzw. `'Source Sans 3', 'Inter', system-ui, sans-serif`. Skala (rem, fluid via clamp): h1 3.5, h2 2.5, h3 1.75, body 1, caption 0.8125. Gewichte: regular 400, medium 500, bold 600. Headings tight (line-height 1.1, letter-spacing -0.01em), Body 1.55.

## Logo & Formensprache
- Wortmarke „Verdant Bio" in Cormorant Garamond Medium, „Bio" in Source Sans 3 small-caps, Abstand = 0.5× Höhe des „d".
- Zeichenminimum: Ein einfaches, offenes Blatt-Symbol (geometrisch, keine Verzierungen), nie als Badge mit Claims im Alltag einsetzen.
- Formen: organisch-runde Radien (min. 12 px), großzügige Weißräume, niemals harte Kanten, keine Verläufe außer 6 %-Noise-Texturen auf Hintergründen.
- Verpackung/Hintergrund: ungebrochene, sanfte Tönungen aus der Palette; das Logo immer auf Leinen oder Salbeigrün mit 24 px Sicherheitsabstand.

## Bildsprache & Tonalität
- **Bildstil:** Natürliches Tageslicht, matt, leicht überbelichtet; Hände mit Produkten auf unbehandeltem Holz, Stein oder Leinen; sichtbare Texturen (Erde, Blätter, Wasser); keine Models mit perfekter Haut, stattdessen reale, ruhige Gesichter. Farblook entsättigt, Körnung erlaubt.
- **Tonalität:** Ruhig, direkt, ohne Marketingsprech. Du-Ansprache. Sätze kurz. Inhaltsstoffe werden beim Namen genannt, Wirkungen ehrlich beschrieben ("pflegt", nicht "revolutioniert").

## Do & Don't
> [!do] Do
> Inhaltsstoffe immer mit INCI und Herkunft nennen – z. B. „Sheabutter aus Ghana, kaltgepresst".
> Auf Verpackung und Website ausschließlich die Palette Salbeigrün, Sandbeige, Terrakotta, Leinen und Eichenrinde verwenden.
> Großzügige Weißräume lassen, Headings in Cormorant Garamond, Body in Source Sans 3.
> Produktfotos bei echtem Tageslicht, mit sichtbarer Textur, ohne künstliches Glühen.
> Mit „du" sprechen, kurze Sätze, keine Superlative.

> [!dont] Don't
> Keine synthetischen Farben, Pink-, Lila- oder Glitzer-Akzente, keine auffälligen Verläufe verwenden.
> Keine künstlichen Stockfotos mit Models, die „perfekte" Haut präsentieren.
> Keine Aromen wie „revolutionär", „magic", „Anti-Aging-Wunder" oder nicht belegte Wirkversprechen.
> Kein Mischen mit anderen Schriftfamilien oder fetten Display-Fonts.
> Kein Überladen mit Icons, Badges oder Siegel-Stürmen – maximal ein anerkanntes Bio-Siegel pro Touchpoint.

## Design-Tokens

```json
{
  "color": {
    "primary": "#7C8B6A",
    "secondary": "#C9B29B",
    "accent": "#B5714E",
    "neutral": {
      "900": "#2E2A23",
      "700": "#5A5448",
      "500": "#8A8275",
      "100": "#F2EEE6",
      "0": "#FFFFFF"
    },
    "semantic": {
      "success": "#5C7A4E",
      "warning": "#C89B3C",
      "danger": "#A0432F",
      "info": "#6B8A8E"
    }
  },
  "font": {
    "heading": "Cormorant Garamond, 'EB Garamond', Georgia, serif",
    "body": "'Source Sans 3', Inter, system-ui, sans-serif",
    "mono": "'JetBrains Mono', ui-monospace, monospace",
    "fallback": "Georgia, 'Times New Roman', serif",
    "scale": {
      "h1": "3.5rem",
      "h2": "2.5rem",
      "h3": "1.75rem",
      "body": "1rem",
      "caption": "0.8125rem"
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
      0,
      4,
      8,
      12,
      16,
      24,
      32,
      48,
      64,
      96
    ]
  },
  "radius": {
    "sm": 6,
    "md": 12,
    "lg": 24,
    "pill": 999
  },
  "motion": {
    "duration_ms": {
      "fast": 160,
      "base": 240,
      "slow": 420
    },
    "easing": "cubic-bezier(0.22, 0.61, 0.36, 1)"
  },
  "elevation": {
    "sm": "0 1px 2px rgba(46,42,35,0.08), 0 1px 1px rgba(46,42,35,0.04)",
    "md": "0 6px 18px rgba(46,42,35,0.10), 0 2px 6px rgba(46,42,35,0.06)"
  }
}
```

Verwandt: [[Farben]] · [[Typografie]] · [[Design-Tokens]] · [[Barrierefreiheit]] · [[_Marken-Index]]
