---
title: Saitenklang
branche: Musik-Streaming / Audio-Plattform
claim: "Dreh die Welt lauter."
anrede: du
primaerfarbe: "#3B1E6E"
schriftfamilie: "Clash Display"
persoenlichkeit:
  - expressiv
  - energetisch
  - kulturell neugierig
  - nahbar
tags:
  - marke
  - ki
ki-agent: true
---

# Saitenklang

Musik-Streaming-Plattform, die Entdeckerlust und Konzertenergie ins Wohnzimmer
holt und jeden Sound wie einen Auftritt unter Bühnenlicht feiert.

## Marken-Kern

- **Mission:** Musik jeder Szene entdeckbar machen und Fans mit den Klängen verbinden, die sie bewegen.
- **Werte:** Vielfalt, Leidenschaft, Nähe zur Kultur, Fairness gegenüber Kunstschaffenden.
- **Zielgruppe:** neugierige Hörer:innen zwischen 16 und 40, die Szenen, Playlists & Live-Momente lieben.
- **Persönlichkeit:** expressiv, energetisch, kulturell neugierig, nahbar – nie beliebig.

## Design-Tokens

```json
{
  "color": {
    "primary":   "#3B1E6E",
    "secondary": "#E0338C",
    "accent":    "#F5A623",
    "neutral":   { "900": "#14091F", "700": "#3A3145", "500": "#6B6377", "100": "#EFEAF4", "0": "#FFFFFF" },
    "semantic":  { "success": "#2FB479", "warning": "#F0A32A", "danger": "#E0433B", "info": "#7B5BD6" }
  },
  "font": {
    "heading": "Clash Display",
    "body": "Inter",
    "mono": "JetBrains Mono",
    "fallback": "system-ui, -apple-system, Segoe UI, sans-serif",
    "scale": { "h1": 48, "h2": 32, "h3": 22, "body": 16, "caption": 13 },
    "weight": { "regular": 400, "medium": 500, "bold": 700 }
  },
  "space":  { "unit": 8, "scale": [0, 4, 8, 16, 24, 32, 48, 64] },
  "radius": { "sm": 4, "md": 8, "lg": 16, "pill": 999 },
  "motion": { "duration_ms": { "fast": 150, "base": 250, "slow": 400 }, "easing": "cubic-bezier(0.2, 0, 0, 1)" },
  "elevation": { "sm": "0 1px 2px rgba(20,9,31,.12)", "md": "0 6px 20px rgba(20,9,31,.20)" }
}
```

## Farbwelt

| Rolle | Name | HEX | RGB | CMYK |
| --- | --- | --- | --- | --- |
| Primär | Bühnenviolett | `#3B1E6E` | 59, 30, 110 | 46, 73, 0, 57 |
| Sekundär | Magenta-Beat | `#E0338C` | 224, 51, 140 | 0, 77, 37, 12 |
| Akzent | Amber-Spot | `#F5A623` | 245, 166, 35 | 0, 32, 86, 4 |
| Fläche | Nachtbühne | `#14091F` | 20, 9, 31 | 35, 71, 0, 88 |

Werte kanonisch im JSON oben · Regeln → Farben.

## Typografie

- **Headline:** Clash Display (ausdrucksstark, energetisch), Fallback `system-ui`.
- **Body:** Inter (klare, ruhige Sans), Fallback `system-ui`.
- **Skala:** H1 48 / H2 32 / Body 16 px, Zeilenhöhe Body 1.5.
- Bezug → Typografie.

## Logo & Formensprache

- Wortmarke, in der der Aufstrich des „S" als schwingende Saite ausläuft.
- Schutzraum = Höhe des „S"; Mindestbreite 24 mm / 96 px.
- Bevorzugt Weiß auf Bühnenviolett oder Magenta auf Nachtbühne.
- Formensprache: schwingende Kurven, Klangwellen, Verlauf Violett→Magenta.
- Regeln → Logo · Grafische Elemente.

## Bildsprache & Tonalität

- **Bildstil:** Konzertlicht, Bewegungsunschärfe, Menschen & Musik, Farbverläufe
  Violett→Magenta, dynamische Perspektiven, echte Szenen statt Stock-Klischees.
- **Tonalität:** expressiv, energetisch, kulturell neugierig, nahbar; **du**;
  kurze, schwungvolle Sätze; keine Fach-Arroganz, kein Hype ohne Substanz.
- **`bild_prompt_bausteine`:** „live concert lighting, motion blur, people and
  music, deep violet to magenta gradient, amber spotlights, dynamic energetic
  composition, photographic, no text".

## Do & Don't

> [!do] Do
> Verlauf Violett→Magenta als Key-Visual (siehe Grafische Elemente),
> Amber-Spot nur als **Akzent** für CTAs. Kontrast Text/Fläche prüfen.

> [!dont] Don't
> Keine flächigen Amber-Flächen, keine leblosen Stockfotos, kein
> generischer Hype-Ton, nie du/Sie mischen.

## Agent-Anweisungen

- **Text:** Anrede **du**. Expressiv, energetisch, nahbar. Claim wörtlich:
  „Dreh die Welt lauter." Kein Fach-Jargon, kein hohler Hype.
- **UI:** Tokens aus JSON als CSS-Variablen. `color.primary` für Flächen/Header,
  `color.accent` nur für Call-to-Action & Highlights, Verlauf Violett→Magenta als
  Key-Visual. Radien `md`. Kontrast gegen Barrierefreiheit prüfen (Weiß auf
  `#3B1E6E` ≈ 13:1 ✓). Bewegung → Motion & Animation.
- **Bild:** `bild_prompt_bausteine` verwenden; niemals Text ins Bild rendern.

Verwandt: Farben · Typografie · Design-Tokens · Grafische Elemente · _Marken-Index
