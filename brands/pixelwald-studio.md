---
title: Pixelwald Studio
branche: Indie-Game-Studio / interaktive Erlebnisse
claim: "Wo Pixel wild wachsen."
anrede: du
primaerfarbe: "#0E0E14"
schriftfamilie: "Chakra Petch"
persoenlichkeit:
  - mutig
  - verspielt
  - technikverliebt
  - community-nah
tags:
  - marke
  - ki
ki-agent: true
---

# Pixelwald Studio

Indie-Game-Studio für mutige, verspielte Spielwelten – Dark-Mode-first, mit
leuchtenden Neon-Akzenten und einer Community, die mitbaut statt nur zuschaut.

## Marken-Kern

- **Mission:** interaktive Erlebnisse bauen, die überraschen, verbinden und Lust
  aufs Selbermachen machen.
- **Werte:** Mut zum Experiment, Handwerk & Tech, Fairness gegenüber Spieler:innen,
  offene Community.
- **Zielgruppe:** neugierige Gamer:innen, Streamer:innen & Bastler:innen, die Indie
  und frische Mechaniken lieben.
- **Persönlichkeit:** mutig, verspielt, technikverliebt, community-nah – nie fad.

## Design-Tokens

```json
{
  "color": {
    "primary":   "#0E0E14",
    "secondary": "#22E0FF",
    "accent":    "#FF2E88",
    "neutral":   { "900": "#F5F5FB", "700": "#B4B4C6", "500": "#6E6E82", "100": "#1A1A26", "0": "#0E0E14" },
    "semantic":  { "success": "#2FD98A", "warning": "#FFC23D", "danger": "#FF4D5E", "info": "#3DA5FF" }
  },
  "font": {
    "heading": "Chakra Petch",
    "body": "Inter",
    "mono": "JetBrains Mono",
    "fallback": "system-ui, -apple-system, Segoe UI, sans-serif",
    "scale": { "h1": 46, "h2": 32, "h3": 22, "body": 16, "caption": 13 },
    "weight": { "regular": 400, "medium": 500, "bold": 700 }
  },
  "space":  { "unit": 8, "scale": [0, 4, 8, 16, 24, 32, 48, 64] },
  "radius": { "sm": 4, "md": 8, "lg": 16, "pill": 999 },
  "motion": { "duration_ms": { "fast": 150, "base": 250, "slow": 400 }, "easing": "cubic-bezier(0.2, 0, 0, 1)" },
  "elevation": { "sm": "0 1px 2px rgba(0,0,0,.40)", "md": "0 8px 28px rgba(255,46,136,.22)" }
}
```

## Farbwelt

| Rolle | Name | HEX | RGB | CMYK |
| --- | --- | --- | --- | --- |
| Primär / Grund | Nachtpixel | `#0E0E14` | 14, 14, 20 | 30, 30, 0, 92 |
| Akzent | Neon-Magenta | `#FF2E88` | 255, 46, 136 | 0, 82, 47, 0 |
| Akzent 2 | Electric-Cyan | `#22E0FF` | 34, 224, 255 | 87, 12, 0, 0 |
| Fläche (Raised) | Karbon | `#1A1A26` | 26, 26, 38 | 32, 32, 0, 85 |

Werte kanonisch im JSON oben · Regeln → Farben.

## Typografie

- **Headline:** Chakra Petch (geometrisch, „techno", kantig-verspielt), Fallback
  `system-ui`.
- **Body:** Inter (klare Sans, hohe Lesbarkeit auf Dunkel); **Code/UI-Zahlen:**
  JetBrains Mono.
- **Skala:** H1 46 / H2 32 / Body 16 px, Zeilenhöhe Body 1.5.
- Bezug → Typografie.

## Logo & Formensprache

- Wortmarke mit einem aus Voxeln „wachsenden" Baum-Glyph vor dem „P".
- Schutzraum = Höhe des „P"; Mindestbreite 24 mm / 96 px.
- Bevorzugt hell auf Nachtpixel; Neon-Magenta oder Cyan nur als Glow-Akzent.
- Formensprache: Pixel-/Voxel-Raster, weiche Glow-Kanten, klare 8-px-Gitter.
- Regeln → Logo · Motion & Animation · Grafische Elemente.

## Bildsprache & Tonalität

- **Bildstil:** leuchtende Neon-Akzente auf tiefem Dunkel, Pixel-/Voxel-Motive,
  weiches Glow & Bloom, verspielte Szenen, viel Kontrast, kein Stockfoto-Look.
- **Tonalität:** frech-motivierend, verspielt, technikverliebt; **du**; kurze
  Sätze, Gaming-Sprache dosiert, nie herablassend, kein Hype-Geschrei.
- **`bild_prompt_bausteine`:** „dark-mode game key art, near-black background,
  glowing neon magenta and electric cyan accents, voxel and pixel motifs, soft
  bloom and glow, playful energetic composition, high contrast, no text".

## Do & Don't

> [!do] Do
> Dunkler Grund (`neutral.0`) als Basis, helle Schrift (`neutral.900`), Neon nur
> als **Akzent** & Glow. Kontrast Text/Fläche prüfen (Barrierefreiheit).

> [!dont] Don't
> Kein Neon flächig (blendet), keine hellen Full-Screen-Flächen, kein
> Kinder-Slang, nie du/Sie mischen, nie Text ins Key-Art rendern.

## Agent-Anweisungen

- **Text:** Anrede **du**. Frech, verspielt, motivierend. Claim wörtlich:
  „Wo Pixel wild wachsen." Gaming-Slang sparsam, nie herablassend.
- **UI:** Dark-first – `neutral.0` (`#0E0E14`) ist der **dunkle Grund**,
  `neutral.100` für Cards, Text **hell** über `neutral.900`/`700`. `color.accent`
  (Magenta) nur für Call-to-Action, `color.secondary` (Cyan) für Highlights/Fokus.
  Neon nie flächig. Radien `md`. Kontrast trotz Dark-Mode **≥ 4.5:1** sichern –
  `neutral.900` auf `neutral.0` ≈ 18:1 ✓ (Barrierefreiheit, Tokens →
  Design-Tokens).
- **Bild:** `bild_prompt_bausteine` verwenden; niemals Text ins Bild rendern.

Verwandt: Farben · Typografie · Design-Tokens · _Marken-Index
