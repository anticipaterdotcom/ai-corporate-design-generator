---
title: Aurea Finanz
branche: Fintech / digitales Private Banking & Vermögensverwaltung
claim: "Ihr Vermögen, in ruhiger Hand."
anrede: Sie
primaerfarbe: "#10203A"
schriftfamilie: "Canela"
persoenlichkeit:
  - premium
  - diskret
  - präzise
  - souverän
tags:
  - marke
  - ki
ki-agent: true
---

# Aurea Finanz

Digitales Private Banking, das die Diskretion einer traditionsreichen Privatbank
mit der Präzision moderner Vermögensverwaltung verbindet – zurückhaltend im Ton,
kompromisslos in der Sorgfalt.

## Marken-Kern

- **Mission:** anspruchsvolle Vermögen digital, diskret und präzise verwalten.
- **Werte:** Diskretion, Sorgfalt, langfristige Verantwortung, Klarheit.
- **Zielgruppe:** vermögende Privatkund:innen, Unternehmer:innen & Family Offices.
- **Persönlichkeit:** premium, diskret, präzise, souverän – nie protzig.

## Design-Tokens

```json
{
  "color": {
    "primary":   "#10203A",
    "secondary": "#26456E",
    "accent":    "#C9A227",
    "neutral":   { "900": "#1B1712", "700": "#4A443B", "500": "#837B6E", "100": "#F2EFE9", "0": "#FFFFFF" },
    "semantic":  { "success": "#2E7D5B", "warning": "#C8871F", "danger": "#B23A3A", "info": "#2F6FA8" }
  },
  "font": {
    "heading": "Canela",
    "body": "Söhne",
    "mono": "Söhne Mono",
    "fallback": "system-ui, -apple-system, Segoe UI, sans-serif",
    "scale": { "h1": 48, "h2": 32, "h3": 22, "body": 16, "caption": 13 },
    "weight": { "regular": 400, "medium": 500, "bold": 700 }
  },
  "space":  { "unit": 8, "scale": [0, 4, 8, 16, 24, 32, 48, 64] },
  "radius": { "sm": 4, "md": 8, "lg": 16, "pill": 999 },
  "motion": { "duration_ms": { "fast": 150, "base": 250, "slow": 400 }, "easing": "cubic-bezier(0.2, 0, 0, 1)" },
  "elevation": { "sm": "0 1px 2px rgba(27,23,18,.10)", "md": "0 6px 20px rgba(27,23,18,.16)" }
}
```

## Farbwelt

| Rolle | Name | HEX | RGB | CMYK |
| --- | --- | --- | --- | --- |
| Primär | Nachtblau | `#10203A` | 16, 32, 58 | 72, 45, 0, 77 |
| Sekundär | Stahlblau | `#26456E` | 38, 69, 110 | 65, 37, 0, 57 |
| Akzent | Aureum-Gold | `#C9A227` | 201, 162, 39 | 0, 19, 81, 21 |
| Fläche | Alabaster | `#F2EFE9` | 242, 239, 233 | 0, 1, 4, 5 |

Werte kanonisch im JSON oben · Regeln → Farben.

## Typografie

- **Headline:** Canela (elegante Serifen-Display, würdevoll), für Titel & Zahlen.
- **Body:** Söhne (sachliche Grotesk, klar lesbar), Fallback `system-ui`.
- **Skala:** H1 48 / H2 32 / Body 16 px, Zeilenhöhe Body 1.5.
- Bezug → Typografie.

## Logo & Formensprache

- Serifen-Wortmarke „Aurea" mit fein gesetztem Gold-Akzent am „A"-Scheitel.
- Schutzraum = Höhe des „A"; Mindestbreite 26 mm / 104 px.
- Bevorzugt Nachtblau auf Alabaster oder Alabaster auf Nachtblau.
- Formensprache: schmale Linien, präzise Winkel, dezente Gold-Haarlinien.
- Regeln → Logo · Grafische Elemente.

## Bildsprache & Tonalität

- **Bildstil:** reduziert, hochwertig, Materialität (Papier, gebürstetes Metall,
  gerichtetes Licht); Nahaufnahmen von Struktur & Oberfläche statt Menschen –
  keine Klischee-Business-Handshakes, keine Stockfoto-Konferenzen.
- **Tonalität:** souverän, diskret, präzise; **Sie**; ruhige, exakte Sätze; keine
  Superlative, keine Rendite-Versprechen, kein Reichtums-Prahlen.
- **`bild_prompt_bausteine`:** „minimal premium still life, fine paper texture,
  brushed metal and subtle gold detail, soft directional light, deep navy
  background, restrained elegant composition, macro material focus, photographic,
  no text, no people, no handshakes".

## Do & Don't

> [!do] Do
> Nachtblau als ruhige, souveräne Basis, Gold **nur** als Akzent (Linie, Detail,
> Highlight). Alabaster als Fläche. Kontrast Text/Fläche prüfen. Sachlich bleiben.

> [!dont] Don't
> Kein flächiges Gold, keine Reichtums-Klischees (Luxusautos, Zigarren,
> Handshakes), keine Rendite-Versprechen, nie du/Sie mischen.

## Agent-Anweisungen

- **Text:** Anrede **Sie**. Souverän, diskret, präzise. Claim wörtlich:
  „Ihr Vermögen, in ruhiger Hand." Keine Superlative, keine Renditegarantien.
- **UI:** Tokens aus JSON als CSS-Variablen. `color.primary` für Flächen/Header,
  `color.accent` nur für Akzente & Call-to-Action, nie flächig. Radien `md`.
  Kontrast gegen Barrierefreiheit prüfen (Weiß auf `#10203A` ≈ 16:1 ✓,
  Gold auf `#10203A` ≈ 6.7:1 ✓).
- **Bild:** `bild_prompt_bausteine` verwenden; niemals Text ins Bild rendern.

Verwandt: Farben · Typografie · Design-Tokens · _Marken-Index
