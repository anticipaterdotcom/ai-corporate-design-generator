---
title: Kobold Kaffee
branche: Specialty-Kaffeerösterei (Direkthandel & Abo)
claim: "Handgeröstet, koboldfrisch."
anrede: du
primaerfarbe: "#3B2417"
schriftfamilie: "Fraunces"
persoenlichkeit:
  - warm
  - verspielt
  - handwerklich
  - neugierig
tags:
  - marke
  - ki
ki-agent: true
---

# Kobold Kaffee

Kleine Direkthandels-Rösterei, die handwerkliche Röstkunst mit koboldhaftem
Spieltrieb verbindet – warmes Licht, ehrliche Bohnen und ein Augenzwinkern in
jeder Tasse.

## Marken-Kern

- **Mission:** außergewöhnliche Bohnen aus fairem Direkthandel frisch rösten und
  als unkompliziertes Abo bis vor die Tür bringen.
- **Werte:** Handwerk, Transparenz entlang der Lieferkette, Freude am Entdecken.
- **Zielgruppe:** neugierige Kaffee-Genießer:innen, die Herkunft und Röstgrad
  schätzen und gern Neues probieren.
- **Persönlichkeit:** warm, verspielt, handwerklich, neugierig – nie belehrend.

## Design-Tokens

```json
{
  "color": {
    "primary":   "#3B2417",
    "secondary": "#C87941",
    "accent":    "#4FBE8E",
    "neutral":   { "900": "#241610", "700": "#4A3527", "500": "#7A6555", "100": "#F0E7D6", "0": "#FFFFFF" },
    "semantic":  { "success": "#3FA76E", "warning": "#D8952B", "danger": "#C0472F", "info": "#3E7C8C" }
  },
  "font": {
    "heading": "Fraunces",
    "body": "Inter",
    "mono": "JetBrains Mono",
    "fallback": "system-ui, -apple-system, Segoe UI, sans-serif",
    "scale": { "h1": 46, "h2": 32, "h3": 22, "body": 16, "caption": 13 },
    "weight": { "regular": 400, "medium": 500, "bold": 700 }
  },
  "space":  { "unit": 8, "scale": [0, 4, 8, 16, 24, 32, 48, 64] },
  "radius": { "sm": 4, "md": 8, "lg": 16, "pill": 999 },
  "motion": { "duration_ms": { "fast": 150, "base": 250, "slow": 400 }, "easing": "cubic-bezier(0.2, 0, 0, 1)" },
  "elevation": { "sm": "0 1px 2px rgba(36,22,16,.12)", "md": "0 6px 20px rgba(36,22,16,.18)" }
}
```

## Farbwelt

| Rolle | Name | HEX | RGB | CMYK |
| --- | --- | --- | --- | --- |
| Primär | Espresso-Braun | `#3B2417` | 59, 36, 23 | 0, 39, 61, 77 |
| Sekundär | Kupfer | `#C87941` | 200, 121, 65 | 0, 40, 68, 22 |
| Akzent | Minz-Grün | `#4FBE8E` | 79, 190, 142 | 58, 0, 25, 25 |
| Fläche | Creme | `#F4ECDD` | 244, 236, 221 | 0, 3, 9, 4 |

Werte kanonisch im JSON oben · Regeln → Farben.

## Typografie

- **Headline:** Fraunces (warme, weiche Serife mit Charakter), Fallback `Georgia`.
- **Body:** Inter (humanistische Sans, ruhig lesbar), Fallback `system-ui`.
- **Mono:** JetBrains Mono für Preise, Röstdaten & Codes.
- **Skala:** H1 46 / H2 32 / Body 16 px, Zeilenhöhe Body 1.5.
- Bezug → Typografie.

## Logo & Formensprache

- Wortmarke in Fraunces, das Punkt-i als kleine Kobold-Mütze oder Kaffeebohne.
- Schutzraum = Höhe des „K"; Mindestbreite 22 mm / 88 px.
- Bevorzugt Espresso-Braun auf Creme oder Creme auf Espresso-Braun.
- Formensprache: runde Bohnenformen, weiche Kupfer-Bögen, dampfende Kringel.
- Key-Visual: verspielte Kobold-Illustration am Röstofen möglich.
- Regeln → Logo · Grafische Elemente.

## Bildsprache & Tonalität

- **Bildstil:** handwerkliche Röststuben, warmes goldenes Licht, Hände an Bohnen
  und Trommel, Nahaufnahmen frisch gerösteter Bohnen; optional charmante
  Kobold-Illustrationen als Key-Visual – nie steril, nie Stockfoto-Klischee.
- **Tonalität:** warm, verspielt, neugierig; **du**; kurze einladende Sätze,
  gern ein Augenzwinkern; Fachwissen locker erklärt, nie belehrend.
- **`bild_prompt_bausteine`:** „artisan coffee roastery, warm golden light,
  hands roasting fresh beans, espresso-brown and copper palette with mint accent,
  cozy craft atmosphere, close-up on roasted beans, playful kobold illustration
  optional, photographic, no text".

## Do & Don't

> [!do] Do
> Warmes Licht und echtes Handwerk zeigen, Espresso-Braun als Basis, Kupfer für
> Wärme, Minz-Grün nur als **Akzent** (Buttons, Frische-Hinweise). Kontrast
> Text/Fläche prüfen.

> [!dont] Don't
> Keine kalten Stockfotos, kein flächiges Minz-Grün, keine belehrenden
> Barista-Vorträge, nie du/Sie mischen.

## Agent-Anweisungen

- **Text:** Anrede **du**. Warm, verspielt, neugierig. Claim wörtlich:
  „Handgeröstet, koboldfrisch." Fachbegriffe locker erklären, kein Belehr-Ton.
- **UI:** Tokens aus JSON als CSS-Variablen. `color.primary` für Flächen/Header,
  `color.secondary` für Wärme-Akzente, `color.accent` nur für Call-to-Action &
  Frische-Highlights. Radien `md`. Kontrast gegen Barrierefreiheit prüfen
  (Creme `#F4ECDD` auf `#3B2417` ≈ 11:1 ✓).
- **Bild:** `bild_prompt_bausteine` verwenden; niemals Text ins Bild rendern.

Verwandt: Farben · Typografie · Design-Tokens · Logo · Barrierefreiheit · _Marken-Index
