---
title: Steinbruch Bau
branche: Bau / Architektur / Hoch- und Tiefbau
claim: "Auf Fels gebaut."
anrede: Sie
primaerfarbe: "#4A4E54"
schriftfamilie: "Aktiv Grotesk"
persoenlichkeit:
  - bodenständig
  - robust
  - klar
  - verlässlich
tags:
  - marke
  - ki
  - generiert
ki-agent: true
generiert_von: generate_brand.py
---

# Steinbruch Bau

## Marken-Kern
- **Mission:** Steinbruch Bau plant, errichtet und saniert Bauwerke mit der Beständigkeit von Naturstein – präzise Ingenieurskunst, die Generationen überdauert.
- **Werte:** Bodenständigkeit, Robustheit, Klarheit, Verlässlichkeit, Handwerklichkeit
- **Zielgruppe:** Öffentliche Auftraggeber, kommunale Bauherren, Projektentwickler und industrielle Investoren im Hoch- und Tiefbau (Entscheider, 35–65 Jahre)
- **Persönlichkeit:** bodenständig, robust, klar, verlässlich

## Farbwelt

| Rolle | Name | HEX | RGB | CMYK |
|---|---|---|---|---|
| Primär | Schiefergrau | `#4A4E54` | 74 / 78 / 84 | 50 / 40 / 35 / 60 |
| Sekundär | Tiefbasalt | `#1C1E22` | 28 / 30 / 34 | 80 / 70 / 60 / 80 |
| Akzent | Quarzit-Gelb | `#F2C200` | 242 / 194 / 0 | 0 / 20 / 100 / 0 |
| Hellton | Kalkweiss | `#F4F2EC` | 244 / 242 / 236 | 3 / 3 / 6 / 0 |
| Funktionsfarbe Erfolg | Moosgrün | `#5A7A4E` | 90 / 122 / 78 | 50 / 25 / 70 / 30 |
| Funktionsfarbe Warnung | Lehmorange | `#D9822B` | 217 / 130 / 43 | 10 / 55 / 95 / 5 |

## Typografie

- **Headings:** Aktiv Grotesk – geometrisch, technisch, mit kompromissloser Klarheit. Eng gesetzt, mittlere bis fette Gewichte.
- **Body:** Inter – optimierte Lesbarkeit am Bildschirm und im Druck, ruhiger Rhythmus für lange Fachtexte.
- **Hierarchie:** H1 56/60 · H2 40/46 · H3 28/34 · Body 16/26 · Caption 13/18.
- **Sonderfälle:** Zahlen und technische Masse grundsätzlich in `Inter` tabular, niemals in einer dekorativen Schrift.

## Logo & Formensprache

- Wortmarke „Steinbruch Bau" in Aktiv Grotesk Bold, Buchstabenabstand +20, ausschliesslich in Schiefergrau, Tiefbasalt oder Kalkweiss.
- Begleitendes Signet: Quadrat mit abgeschnittener Ecke als stilisierter Quaderbruch – niemals frei stehend ohne Wortmarke.
- Minimaler Schutzraum um das Logo entspricht der Höhe des „S" in „Steinbruch" in alle Richtungen.
- Geometrische Formen: harte Kanten, Quadrate, Rechtecke im 4-mm-Raster; keine runden Verläufe, keine Verzierungen.

## Bildsprache & Tonalität

- **Bildstil:** Dokumentarisch, ehrlich, mit Tageslicht. Rohbau, Beton, Naturstein, Werkzeuge, Hände, Baustellen bei Arbeit. Warme Sättigung, kühler Schatten.
- **Tonalität:** Sachlich, kompetent, respektvoll im Sie, ohne Marketing-Pathos. Kurze Sätze, konkrete Zahlen, klare Zusagen.

## Do & Don't

> [!do] Do
> Quarzit-Gelb ausschliesslich für Akzente, Sicherheitsmarkierungen und Call-to-Action-Elemente verwenden.
> Auf allen Drucksachen einen einfarbigen Hintergrund (Schiefergrau oder Kalkweiss) einsetzen, nie Verläufe.
> Bildmotive zeigen reale Bauprozesse mit erkennbaren Personen und Massstab.
> Siezen konsequent durchhalten, auch in Social-Media-Antworten und auf Baustellenbeschilderungen.
> Schriftkombination Aktiv Grotesk / Inter ohne Dekorschriften verwenden.

> [!dont] Don't
> Keine Stockfotos mit lächelnden Models in Hardhüten ohne Bezug zur eigenen Baustelle einsetzen.
> Quarzit-Gelb nicht als Hintergrund für lange Textblöcke verwenden – es ist eine Akzentfarbe.
> Keine Rundungen, Schatten oder 3D-Effekte in Logos, Icons oder Headern.
> Nicht von „Steinbruch Bau" ohne den abgeschnittenen Quader als Signet-Variante sprechen.
> Keine Helvetica, Arial oder Roboto als Ersatz für Aktiv Grotesk / Inter verwenden.

## Design-Tokens

```json
{
  "color": {
    "primary": "#4A4E54",
    "secondary": "#1C1E22",
    "accent": "#F2C200",
    "neutral": {
      "900": "#1C1E22",
      "700": "#3A3D42",
      "500": "#6E7075",
      "100": "#F4F2EC",
      "0": "#FFFFFF"
    },
    "semantic": {
      "success": "#5A7A4E",
      "warning": "#D9822B",
      "danger": "#B23A2A",
      "info": "#3A6B8A"
    }
  },
  "font": {
    "heading": "Aktiv Grotesk",
    "body": "Inter",
    "mono": "JetBrains Mono",
    "fallback": "Aktiv Grotesk, Inter, Helvetica Neue, sans-serif",
    "scale": {
      "h1": "56px",
      "h2": "40px",
      "h3": "28px",
      "body": "16px",
      "caption": "13px"
    },
    "weight": {
      "regular": "400",
      "medium": "500",
      "bold": "700"
    }
  },
  "space": {
    "unit": "8px",
    "scale": [
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
    "sm": "0px",
    "md": "2px",
    "lg": "4px",
    "pill": "999px"
  },
  "motion": {
    "duration_ms": {
      "fast": "150",
      "base": "240",
      "slow": "400"
    },
    "easing": "cubic-bezier(0.2, 0.8, 0.2, 1)"
  },
  "elevation": {
    "sm": "0 1px 2px rgba(28, 30, 34, 0.12)",
    "md": "0 4px 12px rgba(28, 30, 34, 0.18)"
  }
}
```

Verwandt: [[Farben]] · [[Typografie]] · [[Design-Tokens]] · [[Barrierefreiheit]] · [[_Marken-Index]]
