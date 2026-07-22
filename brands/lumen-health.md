---
title: Lumen Health
branche: Digital Health / Telemedizin
claim: "Gesundheit, die zuhört."
anrede: Sie
primaerfarbe: "#178A8A"
schriftfamilie: "Fraunces"
persoenlichkeit:
  - beruhigend
  - klar
  - zugänglich
  - kompetent
tags:
  - marke
  - ki
ki-agent: true
---

# Lumen Health

Digitale Gesundheitsbegleitung und Telemedizin, die medizinische Kompetenz mit
der Ruhe eines hellen, aufgeräumten Raumes verbindet – nah, klar und nie kalt.

## Marken-Kern

- **Mission:** Gute medizinische Versorgung ruhig, verständlich und für alle
  zugänglich machen – digital, wann immer sie gebraucht wird.
- **Werte:** Empathie, Klarheit, Verlässlichkeit, Barrierefreiheit von Grund auf.
- **Zielgruppe:** Menschen jeden Alters, die unkomplizierte, vertrauensvolle
  Betreuung suchen – auch mit wenig technischer oder medizinischer Vorerfahrung.
- **Persönlichkeit:** beruhigend, klar, zugänglich, kompetent – nie klinisch-kalt.

## Design-Tokens

```json
{
  "color": {
    "primary":   "#178A8A",
    "secondary": "#0F6E6E",
    "accent":    "#FF7A66",
    "neutral":   { "900": "#14252B", "700": "#3B4E56", "500": "#6E828B", "100": "#E3EEF0", "0": "#FFFFFF" },
    "semantic":  { "success": "#1E8A5B", "warning": "#C77A12", "danger": "#C63D3D", "info": "#1F6FB0" }
  },
  "font": {
    "heading": "Fraunces",
    "body": "Nunito Sans",
    "mono": "IBM Plex Mono",
    "fallback": "system-ui, -apple-system, Segoe UI, sans-serif",
    "scale": { "h1": 42, "h2": 28, "h3": 20, "body": 17, "caption": 13 },
    "weight": { "regular": 400, "medium": 500, "bold": 700 }
  },
  "space":  { "unit": 8, "scale": [0, 4, 8, 16, 24, 32, 48, 64] },
  "radius": { "sm": 6, "md": 12, "lg": 20, "pill": 999 },
  "motion": { "duration_ms": { "fast": 150, "base": 250, "slow": 400 }, "easing": "cubic-bezier(0.2, 0, 0, 1)" },
  "elevation": { "sm": "0 1px 2px rgba(20,37,43,.08)", "md": "0 6px 20px rgba(20,37,43,.12)" }
}
```

## Farbwelt

| Rolle | Name | HEX | RGB | CMYK |
| --- | --- | --- | --- | --- |
| Primär | Ruhe-Teal | `#178A8A` | 23, 138, 138 | 83, 0, 0, 46 |
| Sekundär | Tiefes Teal | `#0F6E6E` | 15, 110, 110 | 86, 0, 0, 57 |
| Akzent | Warmes Koralle | `#FF7A66` | 255, 122, 102 | 0, 52, 60, 0 |
| Fläche | Soft-White | `#F4FAFA` | 244, 250, 250 | 2, 0, 0, 2 |
| Neutral | Sanftes Graublau | `#14252B` | 20, 37, 43 | 53, 14, 0, 83 |

Werte kanonisch im JSON oben · Regeln → Farben.

## Typografie

- **Headline:** Fraunces (weiche, optische Serif) – markant, warm, gut lesbar.
- **Body:** Nunito Sans (freundliche, leicht gerundete Grotesk), Fallback `system-ui`.
- **Skala:** H1 42 / H2 28 / Body 17 px, Zeilenhöhe Body 1.6 für ruhiges Lesen.
- Body bewusst großzügig (≥ 17 px) und großzügiger Zeilenabstand → Barrierefreiheit.
- Bezug → Typografie.

## Logo & Formensprache

- Wortmarke „Lumen Health" mit einem weichen Lichtbogen-Punkt über dem „u".
- Schutzraum = Höhe des „L"; Mindestbreite 26 mm / 100 px.
- Bevorzugt Ruhe-Teal auf Soft-White oder Weiß auf Tiefem Teal.
- Formensprache: runde Ecken (`radius.md`), weiche Bögen, viel Weißraum, keine harten Kanten.
- Regeln → Logo · Grafische Elemente.

## Bildsprache & Tonalität

- **Bildstil:** echte Menschen in ruhigen Alltagssituationen, helles weiches Licht,
  viel Luft, divers in Alter und Herkunft, warm statt klinisch-kalt, natürliche Gesten.
- **Tonalität:** empathisch, klar, nüchtern; **Sie**; kurze verständliche Sätze;
  keine medizinischen Heilversprechen, keine Angst-Rhetorik, keine Fachjargon-Hürden.
- **`bild_prompt_bausteine`:** „real diverse people in calm everyday moments, soft
  bright natural light, airy composition with lots of space, warm reassuring mood,
  teal and soft-white palette with warm coral accent, not clinical, photographic,
  no text".

## Do & Don't

> [!do] Do
> Warm und ruhig ansprechen, Wichtiges zusätzlich per Text/Icon kennzeichnen
> (nie Tonalität & Wording nur über Farbe), Kontraste großzügig prüfen,
> Koralle nur als sparsamer **Akzent** mit dunklem Text.

> [!dont] Don't
> Keine Heilversprechen, keine Angst- oder Druck-Rhetorik, keine kalt-klinischen
> Stockbilder, weißer Text auf Koralle vermeiden, nie du/Sie mischen.

## Agent-Anweisungen

- **Text:** Anrede **Sie**. Empathisch, klar, nüchtern. Claim wörtlich:
  „Gesundheit, die zuhört." Keine Heilversprechen, keine Diagnosen, keine
  Angst-Rhetorik; einfache Sprache → Tonalität & Wording.
- **UI:** Tokens aus JSON als CSS-Variablen. `color.primary` für Flächen/Header,
  `color.accent` nur für Call-to-Action & Highlights (immer mit dunklem Text).
  Radien `md`. Bedeutung nie allein über Farbe – immer Label/Icon ergänzen.
  Kontrast gegen Barrierefreiheit prüfen (Body `#14252B` auf Soft-White ≈ 15:1 ✓;
  Weiß auf `#178A8A` ≈ 4.2:1 → nur große Schrift/Buttons, Fließtext auf `#0F6E6E` ≈ 6:1 ✓).
- **Bild:** `bild_prompt_bausteine` verwenden; echte, diverse Menschen, weiches
  Licht; niemals Text ins Bild rendern.

Verwandt: Farben · Typografie · Design-Tokens · Barrierefreiheit · Tonalität & Wording · _Marken-Index
