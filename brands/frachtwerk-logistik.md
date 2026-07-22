---
title: Frachtwerk Logistik
branche: Logistik / Fracht / Supply Chain
claim: "Fracht, die ankommt."
anrede: Sie
primaerfarbe: "#F25C05"
schriftfamilie: "Roboto Condensed"
persoenlichkeit:
  - robust
  - zuverlässig
  - direkt
  - effizient
tags:
  - marke
  - ki
ki-agent: true
---

# Frachtwerk Logistik

Bundesweiter Fracht- und Supply-Chain-Dienstleister, der Waren termintreu bewegt
und dabei die Verlässlichkeit einer eingespielten Umschlaghalle ausstrahlt.

## Marken-Kern

- **Mission:** Güterströme planbar, transparent und pünktlich ans Ziel bringen.
- **Werte:** Termintreue, Verlässlichkeit, Effizienz, klare Kommunikation.
- **Zielgruppe:** Industrie, Handel & KMU mit regelmäßigem Versand- und Umschlagbedarf.
- **Persönlichkeit:** robust, zuverlässig, direkt, effizient – nie umständlich.

## Design-Tokens

```json
{
  "color": {
    "primary":   "#F25C05",
    "secondary": "#2B2F36",
    "accent":    "#F2A900",
    "neutral":   { "900": "#16181D", "700": "#2B2F36", "500": "#6B7280", "100": "#EDEFF2", "0": "#FFFFFF" },
    "semantic":  { "success": "#2E9E5B", "warning": "#E0A22B", "danger": "#D2402F", "info": "#2E7BC4" }
  },
  "font": {
    "heading": "Roboto Condensed",
    "body": "Inter",
    "mono": "IBM Plex Mono",
    "fallback": "system-ui, -apple-system, Segoe UI, sans-serif",
    "scale": { "h1": 46, "h2": 32, "h3": 22, "body": 16, "caption": 13 },
    "weight": { "regular": 400, "medium": 500, "bold": 700 }
  },
  "space":  { "unit": 8, "scale": [0, 4, 8, 16, 24, 32, 48, 64] },
  "radius": { "sm": 2, "md": 6, "lg": 12, "pill": 999 },
  "motion": { "duration_ms": { "fast": 120, "base": 220, "slow": 360 }, "easing": "cubic-bezier(0.2, 0, 0, 1)" },
  "elevation": { "sm": "0 1px 2px rgba(22,24,29,.12)", "md": "0 6px 20px rgba(22,24,29,.20)" }
}
```

## Farbwelt

| Rolle | Name | HEX | RGB | CMYK |
| --- | --- | --- | --- | --- |
| Primär | Signal-Orange | `#F25C05` | 242, 92, 5 | 0, 62, 98, 5 |
| Sekundär | Stahl-Anthrazit | `#2B2F36` | 43, 47, 54 | 20, 13, 0, 79 |
| Akzent | Signal-Amber | `#F2A900` | 242, 169, 0 | 0, 30, 100, 5 |
| Fläche | Hellgrau | `#EDEFF2` | 237, 239, 242 | 2, 1, 0, 5 |
| Text | Anthrazit | `#16181D` | 22, 24, 29 | 24, 17, 0, 89 |

Werte kanonisch im JSON oben · Regeln → Farben.

## Typografie

- **Headline:** Roboto Condensed (kräftige, schmallaufende Grotesk) – robust,
  direkt, gut für Versalien-Labels; Fallback `system-ui`.
- **Body:** Inter (klare, gut lesbare Sans), Zeilenhöhe Body 1.5.
- **Skala:** H1 46 / H2 32 / Body 16 px; Headlines gern in Bold/Versalien.
- Bezug → Typografie.

## Logo & Formensprache

- Wortmarke in kondensierten Versalien; „W" als Bildmarke aus zwei diagonalen
  Frachtbalken (Verweis auf Umschlag/Route).
- Schutzraum = Höhe des „F"; Mindestbreite 26 mm / 100 px.
- Bevorzugt Anthrazit auf Hellgrau oder Weiß auf Anthrazit; Orange als Signal.
- Formensprache: kräftige Diagonalen, rechte Winkel, funktionale Balken, kleine Radien.
- Regeln → Logo · Grafische Elemente.

## Bildsprache & Tonalität

- **Bildstil:** reale Logistik – Container, LKW, Umschlaghallen, Kranbrücken;
  Nacht/Dämmerung, starke Diagonalen, funktional und dokumentarisch statt verspielt.
- **Tonalität:** sachlich-direkt, konkret, effizient; **Sie**; kurze klare Sätze;
  keine Superlative, kein Fachjargon-Nebel, keine Stockfoto-Klischees.
- **`bild_prompt_bausteine`:** „real logistics scene, shipping containers, freight
  trucks, cargo terminal at dusk, strong diagonal lines, industrial steel and
  signal-orange accents, functional documentary photography, no text".

## Do & Don't

> [!do] Do
> Anthrazit als ruhige Basis, Orange als **Signal** (CTA, Status, Wegeführung) auf
> dunklem Grund oder groß genug einsetzen. Diagonalen bewusst führen. Kontrast prüfen.

> [!dont] Don't
> Kein Orange als kleiner Fließtext auf Hell (≈ 2.9:1 ✗), keine verspielten Icons,
> keine leeren Superlative, nie du/Sie mischen.

## Agent-Anweisungen

- **Text:** Anrede **Sie**. Direkt, sachlich, effizient. Claim wörtlich:
  „Fracht, die ankommt." Konkrete Angaben (Termine, Routen, Maße) statt Werbefloskeln.
- **UI:** Tokens aus JSON als CSS-Variablen. `color.secondary` für Header/Flächen,
  `color.primary` (Orange) nur für CTA, Status & Highlights – auf Orange am besten
  Anthrazit-Text (`#16181D` ≈ 5.3:1 ✓), Weiß nur großflächig (≈ 3.3:1). Radien `sm`/`md`.
  Kontrast gegen Barrierefreiheit prüfen (Weiß auf `#2B2F36` ≈ 13:1 ✓).
- **Bild:** `bild_prompt_bausteine` verwenden; niemals Text ins Bild rendern.

Verwandt: Farben · Typografie · Design-Tokens · Logo · Anwendungen · Barrierefreiheit · _Marken-Index
