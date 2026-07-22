---
title: Nordlicht Energie
branche: Ökostrom / Erneuerbare Energien
claim: "Strom, so klar wie der Norden."
anrede: Sie
primaerfarbe: "#0B2A4A"
schriftfamilie: "Söhne"
persoenlichkeit:
  - vertrauenswürdig
  - klar
  - vorausschauend
  - ruhig
tags:
  - marke
  - ki
ki-agent: true
---

# Nordlicht Energie

Regionaler Ökostrom-Versorger, der Verlässlichkeit ausstrahlt und die Ruhe einer
nordischen Nacht mit dem Aufbruchssignal eines Polarlichts verbindet.

## Marken-Kern

- **Mission:** 100 % erneuerbare Energie einfach und transparent zugänglich machen.
- **Werte:** Verlässlichkeit, Transparenz, Verantwortung für kommende Generationen.
- **Zielgruppe:** umweltbewusste Haushalte & KMU im norddeutschen Raum.
- **Persönlichkeit:** vertrauenswürdig, klar, vorausschauend, ruhig – nie laut.

## Design-Tokens

```json
{
  "color": {
    "primary":   "#0B2A4A",
    "secondary": "#126E6A",
    "accent":    "#5BE0B0",
    "neutral":   { "900": "#0A1622", "700": "#324155", "500": "#647587", "100": "#EAF0F4", "0": "#FFFFFF" },
    "semantic":  { "success": "#1E9E6A", "warning": "#E0A22B", "danger": "#D24B4B", "info": "#2E7BC4" }
  },
  "font": {
    "heading": "Söhne",
    "body": "Söhne",
    "mono": "Söhne Mono",
    "fallback": "system-ui, -apple-system, Segoe UI, sans-serif",
    "scale": { "h1": 44, "h2": 30, "h3": 22, "body": 16, "caption": 13 },
    "weight": { "regular": 400, "medium": 500, "bold": 700 }
  },
  "space":  { "unit": 8, "scale": [0, 4, 8, 16, 24, 32, 48, 64] },
  "radius": { "sm": 4, "md": 8, "lg": 16, "pill": 999 },
  "motion": { "duration_ms": { "fast": 150, "base": 250, "slow": 400 }, "easing": "cubic-bezier(0.2, 0, 0, 1)" },
  "elevation": { "sm": "0 1px 2px rgba(10,22,34,.10)", "md": "0 6px 20px rgba(10,22,34,.16)" }
}
```

## Farbwelt

| Rolle | Name | HEX | RGB | CMYK |
| --- | --- | --- | --- | --- |
| Primär | Nachtblau | `#0B2A4A` | 11, 42, 74 | 85, 43, 0, 71 |
| Sekundär | Nordsee-Teal | `#126E6A` | 18, 110, 106 | 84, 0, 4, 57 |
| Akzent | Polarlicht-Grün | `#5BE0B0` | 91, 224, 176 | 59, 0, 21, 12 |
| Fläche | Eisweiß | `#EAF0F4` | 234, 240, 244 | 4, 2, 0, 4 |

Werte kanonisch im JSON oben · Regeln → Farben.

## Typografie

- **Headline & Body:** Söhne (grotesk, sachlich-nordisch), Fallback `system-ui`.
- **Skala:** H1 44 / H2 30 / Body 16 px, Zeilenhöhe Body 1.5.
- Bezug → Typografie.

## Logo & Formensprache

- Wortmarke mit stilisiertem Polarlicht-Bogen über dem „i".
- Schutzraum = Höhe des „N"; Mindestbreite 24 mm / 96 px.
- Bevorzugt Nachtblau auf Eisweiß oder Weiß auf Nachtblau.
- Formensprache: weiche Bögen, Verläufe von Teal zu Polarlicht-Grün.
- Regeln → Logo · Grafische Elemente.

## Bildsprache & Tonalität

- **Bildstil:** weite nordische Landschaften, klares kühles Licht, echte Anlagen
  (Wind/Solar) statt Symbolbilder, viel Himmel, ruhige Komposition.
- **Tonalität:** sachlich-kompetent, ruhig, ermutigend; **Sie**; kurze klare Sätze;
  keine Öko-Klischees, keine Angst-Rhetorik.
- **`bild_prompt_bausteine`:** „nordic landscape, cool clear daylight, deep teal
  and aurora-green palette, calm wide composition, real renewable energy
  infrastructure, subtle mist, photographic, no text".

## Do & Don't

> [!do] Do
> Zahlen transparent machen (Herkunft des Stroms), Nachtblau als ruhige Basis,
> Polarlicht-Grün nur als **Akzent**. Kontrast Text/Fläche prüfen.

> [!dont] Don't
> Kein grelles „Öko-Grün" flächig, keine gestockten Klischeebilder, kein
> Alarm-Ton, nie du/Sie mischen.

## Agent-Anweisungen

- **Text:** Anrede **Sie**. Ruhig, sachlich, ermutigend. Claim wörtlich:
  „Strom, so klar wie der Norden." Keine Angst- oder Schuld-Rhetorik.
- **UI:** Tokens aus JSON als CSS-Variablen. `color.primary` für Flächen/Header,
  `color.accent` nur für Call-to-Action & Highlights. Radien `md`. Kontrast gegen
  Barrierefreiheit prüfen (Weiß auf `#0B2A4A` ≈ 12:1 ✓).
- **Bild:** `bild_prompt_bausteine` verwenden; niemals Text ins Bild rendern.

Verwandt: Farben · Typografie · Design-Tokens · _Marken-Index
