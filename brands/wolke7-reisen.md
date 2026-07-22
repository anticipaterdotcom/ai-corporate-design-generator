---
title: Wolke7 Reisen
branche: Reise-Buchungsplattform / Online-Reisebüro
claim: "Ab auf Wolke 7."
anrede: du
primaerfarbe: "#2FA8E0"
schriftfamilie: "Nunito"
persoenlichkeit:
  - freundlich
  - luftig
  - optimistisch
  - unkompliziert
tags:
  - marke
  - ki
ki-agent: true
---

# Wolke7 Reisen

Leichtfüßige Online-Reiseplattform, die das Buchen so unbeschwert macht wie den
ersten Blick aus dem Flugzeugfenster – heller Himmel, gute Laune, kein Ballast.

## Marken-Kern

- **Mission:** Reisen für alle einfach, transparent und in Minuten buchbar machen.
- **Werte:** Leichtigkeit, Ehrlichkeit, Vorfreude, Nahbarkeit.
- **Zielgruppe:** spontane Städtereisende, Familien & Paare, die unkompliziert los wollen.
- **Persönlichkeit:** freundlich, luftig, optimistisch, unkompliziert – nie aufdringlich.

## Design-Tokens

```json
{
  "color": {
    "primary":   "#2FA8E0",
    "secondary": "#FDE9CE",
    "accent":    "#FF6F61",
    "neutral":   { "900": "#0D2C40", "700": "#3A5A70", "500": "#6E8697", "100": "#EAF4FA", "0": "#FFFFFF" },
    "semantic":  { "success": "#2FBF71", "warning": "#F5A623", "danger": "#D64535", "info": "#2E7BC4" }
  },
  "font": {
    "heading": "Nunito",
    "body": "Nunito",
    "mono": "JetBrains Mono",
    "fallback": "system-ui, -apple-system, Segoe UI, sans-serif",
    "scale": { "h1": 46, "h2": 32, "h3": 22, "body": 16, "caption": 13 },
    "weight": { "regular": 400, "medium": 500, "bold": 700 }
  },
  "space":  { "unit": 8, "scale": [0, 4, 8, 16, 24, 32, 48, 64] },
  "radius": { "sm": 6, "md": 12, "lg": 20, "pill": 999 },
  "motion": { "duration_ms": { "fast": 150, "base": 250, "slow": 400 }, "easing": "cubic-bezier(0.2, 0, 0, 1)" },
  "elevation": { "sm": "0 1px 2px rgba(13,44,64,.10)", "md": "0 6px 20px rgba(13,44,64,.16)" }
}
```

## Farbwelt

| Rolle | Name | HEX | RGB | CMYK |
| --- | --- | --- | --- | --- |
| Primär | Himmelblau | `#2FA8E0` | 47, 168, 224 | 79, 25, 0, 12 |
| Akzent | Koralle | `#FF6F61` | 255, 111, 97 | 0, 56, 62, 0 |
| Sekundär | Sand/Creme | `#FDE9CE` | 253, 233, 206 | 0, 8, 19, 1 |
| Text | Dunkelblau | `#0D2C40` | 13, 44, 64 | 80, 31, 0, 75 |

Werte kanonisch im JSON oben · Regeln → Farben.

## Typografie

- **Headline & Body:** Nunito (freundliche, leicht gerundete Sans), Fallback `system-ui`.
- **Skala:** H1 46 / H2 32 / Body 16 px, Zeilenhöhe Body 1.5.
- Bezug → Typografie.

## Logo & Formensprache

- Wortmarke „Wolke7" mit weicher Wolken-Rundung über der „7".
- Schutzraum = Höhe der „7"; Mindestbreite 24 mm / 96 px.
- Bevorzugt Himmelblau auf Weiß oder Weiß auf Himmelblau.
- Formensprache: weiche Rundungen, leichte Wolken- und Bogenformen, viel Luft.
- Regeln → Logo · Grafische Elemente.

## Bildsprache & Tonalität

- **Bildstil:** helle Reisemomente, Himmel/Küste/Städte, echte Menschen im Sonnenlicht,
  viel Weite und Leichtigkeit, natürliche Farben statt Katalog-Kitsch.
- **Tonalität:** freundlich, optimistisch, unkompliziert; **du**; kurze, luftige Sätze;
  echte Vorfreude wecken, keine Druck- oder Angst-Rhetorik, keine Fake-Rabatte.
- **`bild_prompt_bausteine`:** „bright travel moment, warm sunlight, open sky and
  coastline or city, real happy people, airy weightless composition, soft sky-blue
  and coral palette, natural light, photographic, no text".

## Do & Don't

> [!do] Do
> Vorfreude wecken, Himmelblau als luftige Basis, Koralle nur als **Akzent** für
> Call-to-Action & Highlights. Auf CTAs dunkelblauen Text nutzen und Kontrast prüfen.

> [!dont] Don't
> Kein Countdown-Druck, keine gestockten Klischee-Strandbilder, kein Fließtext auf
> Koralle/Himmelblau, nie du/Sie mischen.

## Agent-Anweisungen

- **Text:** Anrede **du**. Freundlich, optimistisch, unkompliziert. Claim wörtlich:
  „Ab auf Wolke 7." Keine Dringlichkeits- oder Angst-Rhetorik.
- **UI:** Tokens aus JSON als CSS-Variablen. `color.primary` für Flächen/Header,
  `color.accent` nur für Call-to-Action & Highlights. Radien `md`. Kontrast gegen
  Barrierefreiheit prüfen: Himmelblau (≈2.7:1) und Koralle (≈2.7:1) erreichen auf
  Weiß **nicht** 4.5:1 → nie für Fließtext; auf CTA-Flächen Dunkelblau `#0D2C40`
  setzen (≈5.4:1 ✓), Fließtext in `neutral.900` auf Weiß (≈13:1 ✓).
- **Bild:** `bild_prompt_bausteine` verwenden; niemals Text ins Bild rendern.

Verwandt: Farben · Typografie · Design-Tokens · Bildsprache · Barrierefreiheit · _Marken-Index
