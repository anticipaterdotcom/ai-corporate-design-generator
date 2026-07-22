---
title: Verdant Bio
branche: Naturkosmetik / Bio-Hautpflege
claim: "Weniger, aber ehrlich."
anrede: du
primaerfarbe: "#7C8B6A"
schriftfamilie: "Cormorant Garamond"
persoenlichkeit:
  - minimalistisch
  - natürlich
  - ehrlich
  - achtsam
tags:
  - marke
  - ki
ki-agent: true
---

# Verdant Bio

Zertifizierte Bio-Hautpflege mit kurzer, ehrlicher Rezeptur, die auf leise
Wirksamkeit statt große Versprechen setzt und Ruhe in die tägliche Routine bringt.

## Marken-Kern

- **Mission:** wirksame Naturkosmetik mit wenigen, nachvollziehbaren Inhaltsstoffen zugänglich machen.
- **Werte:** Ehrlichkeit, Achtsamkeit, Nachhaltigkeit, Reduktion aufs Wesentliche.
- **Zielgruppe:** bewusste Menschen, die klare Pflege ohne Marketing-Lärm suchen.
- **Persönlichkeit:** minimalistisch, natürlich, ehrlich, achtsam – nie aufdringlich.

## Design-Tokens

```json
{
  "color": {
    "primary":   "#7C8B6A",
    "secondary": "#C9B29B",
    "accent":    "#B5714E",
    "neutral":   { "900": "#2E251C", "700": "#5C4F42", "500": "#8A7E70", "100": "#F5F1E8", "0": "#FFFFFF" },
    "semantic":  { "success": "#5E8C5A", "warning": "#C9922E", "danger": "#B4574A", "info": "#5A7D8C" }
  },
  "font": {
    "heading": "Cormorant Garamond",
    "body": "Source Sans 3",
    "mono": "Source Code Pro",
    "fallback": "system-ui, -apple-system, Segoe UI, sans-serif",
    "scale": { "h1": 46, "h2": 30, "h3": 22, "body": 16, "caption": 13 },
    "weight": { "regular": 400, "medium": 500, "bold": 700 }
  },
  "space":  { "unit": 8, "scale": [0, 4, 8, 16, 24, 32, 48, 64] },
  "radius": { "sm": 4, "md": 8, "lg": 16, "pill": 999 },
  "motion": { "duration_ms": { "fast": 150, "base": 250, "slow": 400 }, "easing": "cubic-bezier(0.2, 0, 0, 1)" },
  "elevation": { "sm": "0 1px 2px rgba(46,37,28,.08)", "md": "0 6px 20px rgba(46,37,28,.14)" }
}
```

## Farbwelt

| Rolle | Name | HEX | RGB | CMYK |
| --- | --- | --- | --- | --- |
| Primär | Salbeigrün | `#7C8B6A` | 124, 139, 106 | 11, 0, 24, 45 |
| Sekundär | Ton/Clay | `#C9B29B` | 201, 178, 155 | 0, 11, 23, 21 |
| Fläche | Creme Off-White | `#F5F1E8` | 245, 241, 232 | 0, 2, 5, 4 |
| Text | Warm-Dunkelbraun | `#2E251C` | 46, 37, 28 | 0, 19, 39, 82 |

Werte kanonisch im JSON oben · Regeln → Farben.

## Typografie

- **Headline:** Cormorant Garamond (ruhige, elegante Serife), Fallback `Georgia, serif`.
- **Body:** Source Sans 3 (klare humanistische Sans), Fallback `system-ui`.
- **Skala:** H1 46 / H2 30 / Body 16 px, Zeilenhöhe Body 1.6, großzügiger Weißraum.
- Bezug → Typografie.

## Logo & Formensprache

- Wortmarke in Serife, kleingeschrieben, mit reduziertem Blatt-Signet neben dem „V".
- Schutzraum = Höhe des „V"; Mindestbreite 22 mm / 88 px.
- Bevorzugt Warm-Dunkelbraun auf Creme oder Salbeigrün auf Creme.
- Formensprache: organische, weiche Konturen, feine Linien, viel Leere.
- Regeln → Logo · Grafische Elemente.

## Bildsprache & Tonalität

- **Bildstil:** viel Weißraum, natürliches Tageslicht, Texturen (Blätter, Haut, Glas),
  unaufgeregte Kompositionen, ehrlich und wenig retuschiert, echte Haut statt Ideal.
- **Tonalität:** ruhig, klar, ehrlich, achtsam; **du**; kurze Sätze; keine
  Wirkversprechen, keine Superlative, kein Greenwashing.
- **`bild_prompt_bausteine`:** „natural daylight, lots of white space, sage green
  and warm clay palette, botanical textures, leaves skin and glass, minimal calm
  composition, honest unretouched skin, soft matte photographic, no text".

## Do & Don't

> [!do] Do
> Nutze viel Weißraum, Salbeigrün als ruhige Basis, Clay als warmen Sekundärton.
> Zeige echte Textur, nenne Inhaltsstoffe ehrlich. Kontrast Text/Fläche prüfen.

> [!dont] Don't
> Kein greller Neon-Look, keine Wirkversprechen oder Superlative, kein
> überretuschiertes „perfektes" Bild, nie du/Sie mischen.

## Agent-Anweisungen

- **Text:** Anrede **du**. Ruhig, klar, ehrlich, achtsam. Claim wörtlich:
  „Weniger, aber ehrlich." Keine Superlative, keine Heilsversprechen.
- **UI:** Tokens aus JSON als CSS-Variablen. `color.primary` für ruhige Flächen,
  `color.accent` nur für Call-to-Action & Highlights, Text in `neutral.900`. Radien
  `md`. Kontrast gegen Barrierefreiheit prüfen (`#2E251C` auf `#F5F1E8` ≈ 12:1 ✓;
  Salbeigrün nie als Textfarbe auf Creme).
- **Bild:** `bild_prompt_bausteine` verwenden; niemals Text ins Bild rendern.

Verwandt: Farben · Typografie · Design-Tokens · Bildsprache · Barrierefreiheit · _Marken-Index
