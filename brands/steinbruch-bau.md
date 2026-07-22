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
ki-agent: true
---

# Steinbruch Bau

Hoch- und Tiefbauunternehmen, das Solidität ausstrahlt und die Härte des Materials
mit der Klarheit eines sauberen Bauplans verbindet.

## Marken-Kern

- **Mission:** Bauwerke schaffen, die Generationen tragen – termintreu, sauber und ehrlich kalkuliert.
- **Werte:** Verlässlichkeit, Sicherheit, handwerkliche Qualität, Wort gilt.
- **Zielgruppe:** öffentliche Auftraggeber, Bauträger & Industrie im Hoch- und Tiefbau.
- **Persönlichkeit:** bodenständig, robust, klar, verlässlich – nie großspurig.

## Design-Tokens

```json
{
  "color": {
    "primary":   "#4A4E54",
    "secondary": "#1C1E22",
    "accent":    "#F2C200",
    "neutral":   { "900": "#14161A", "700": "#3A3D42", "500": "#6A6E75", "100": "#E8E9EB", "0": "#FFFFFF" },
    "semantic":  { "success": "#3E8E41", "warning": "#E0A22B", "danger": "#C0392B", "info": "#2E7BC4" }
  },
  "font": {
    "heading": "Aktiv Grotesk",
    "body": "Inter",
    "mono": "IBM Plex Mono",
    "fallback": "system-ui, -apple-system, Segoe UI, sans-serif",
    "scale": { "h1": 46, "h2": 32, "h3": 22, "body": 16, "caption": 13 },
    "weight": { "regular": 400, "medium": 500, "bold": 700 }
  },
  "space":  { "unit": 8, "scale": [0, 4, 8, 16, 24, 32, 48, 64] },
  "radius": { "sm": 2, "md": 4, "lg": 8, "pill": 999 },
  "motion": { "duration_ms": { "fast": 150, "base": 250, "slow": 400 }, "easing": "cubic-bezier(0.2, 0, 0, 1)" },
  "elevation": { "sm": "0 1px 2px rgba(20,22,26,.12)", "md": "0 6px 20px rgba(20,22,26,.20)" }
}
```

## Farbwelt

| Rolle | Name | HEX | RGB | CMYK |
| --- | --- | --- | --- | --- |
| Primär | Beton-Grau | `#4A4E54` | 74, 78, 84 | 12, 7, 0, 67 |
| Sekundär | Stahl-Anthrazit | `#1C1E22` | 28, 30, 34 | 17, 11, 0, 87 |
| Akzent | Baustellen-Gelb | `#F2C200` | 242, 194, 0 | 0, 20, 100, 5 |
| Fläche | Betonweiß | `#E8E9EB` | 232, 233, 235 | 1, 1, 0, 8 |

Werte kanonisch im JSON oben · Regeln → Farben.

## Typografie

- **Headline:** Aktiv Grotesk, industrielle Grotesk, gern in **Versalien**, Fallback `system-ui`.
- **Body:** Inter (robuste Sans), ruhig und gut lesbar; Bezug → Typografie.
- **Skala:** H1 46 / H2 32 / Body 16 px, Zeilenhöhe Body 1.5, Laufweite Versalien +2 %.

## Logo & Formensprache

- Wortmarke in Versalien, kantig gesetzt, mit gebrochener Bruchkante als Bildzeichen.
- Schutzraum = Höhe des „S"; Mindestbreite 24 mm / 96 px.
- Bevorzugt Beton-Grau auf Betonweiß oder Betonweiß auf Stahl-Anthrazit.
- Formensprache: rechte Winkel, klare Kanten, Diagonalstreifen (Warnband) nur als Akzent.
- Regeln → Logo · Grafische Elemente.

## Bildsprache & Tonalität

- **Bildstil:** echte Baustellen, Material (Beton, Stahl, Holz), Struktur & Textur,
  Menschen bei der Arbeit; ehrlich, kräftig, natürliches Licht statt Studio-Glanz.
- **Tonalität:** sachlich-handfest, klar, verlässlich; **Sie**; kurze, direkte Sätze;
  keine Superlative, keine Hochglanz-Klischees, keine Angst-Rhetorik.
- **`bild_prompt_bausteine`:** „real construction site, raw concrete and steel and
  timber, close-up material texture, workers in action, honest documentary style,
  natural daylight, concrete-grey palette with a single safety-yellow accent,
  photographic, no text".

## Do & Don't

> [!do] Do
> Beton-Grau und Anthrazit als solide Basis, Baustellen-Gelb nur als **Akzent** auf
> Dunkel/Schwarz (Buttons, Warnband, Highlights). Kontrast Text/Fläche prüfen.

> [!dont] Don't
> Kein Gelb als Textfarbe auf Weiß (zu geringer Kontrast), keine gestockten
> Klischeebilder, kein Marketing-Sprech, nie du/Sie mischen.

## Agent-Anweisungen

- **Text:** Anrede **Sie**. Handfest, klar, verlässlich. Claim wörtlich:
  „Auf Fels gebaut." Keine Superlative, keine Angst- oder Schuld-Rhetorik.
- **UI:** Tokens aus JSON als CSS-Variablen. `color.primary`/`secondary` für Flächen
  & Header, `color.accent` nur für Call-to-Action & Highlights – Gelb stets mit
  dunklem Text (`neutral.900`), nie als Text auf Weiß. Radien `sm`/`md` (kantig).
  Kontrast gegen Barrierefreiheit prüfen (Weiß auf `#4A4E54` ≈ 8:1 ✓,
  `#14161A` auf `#F2C200` ≈ 12:1 ✓).
- **Bild:** `bild_prompt_bausteine` verwenden; niemals Text ins Bild rendern.

Verwandt: Farben · Typografie · Design-Tokens · Logo · Anwendungen · Barrierefreiheit · _Marken-Index
