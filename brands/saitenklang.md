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
  - generiert
ki-agent: true
generiert_von: generate_brand.py
---

# Saitenklang

## Marken-Kern
- **Mission:** Wir geben jeder Stimme und jedem Sound eine Bühne – vom Wohnzimmer bis zum Festival.
- **Werte:** Klangvielfalt, Entdeckerfreude, Gemeinschaft, kulturelle Wertschätzung, Mut zum Ausdruck.
- **Zielgruppe:** Musikliebhaber:innen zwischen 18 und 40, die aktiv Neues hören, Playlists kuratieren und Künstler:innen aus aller Welt entdecken wollen.
- **Persönlichkeit:** expressiv, energetisch, kulturell neugierig, nahbar.

## Farbwelt

| Rolle | Name | HEX | RGB | CMYK |
|---|---|---|---|---|
| Primary | Tiefviolett | `#3B1E6E` | 59 / 30 / 110 | 70 / 90 / 0 / 30 |
| Secondary | Magenta-Puls | `#E0338C` | 224 / 51 / 140 | 5 / 85 / 0 / 0 |
| Accent | Bernsteinbeat | `#F5A623` | 245 / 166 / 35 | 0 / 35 / 90 / 0 |
| Neutral 900 | Schallplatten-Schwarz | `#15121F` | 21 / 18 / 31 | 80 / 75 / 40 / 70 |
| Neutral 700 | Konzertdunkel | `#2A2640` | 42 / 38 / 64 | 75 / 70 / 30 / 50 |
| Neutral 500 | Rauschen | `#7A7491` | 122 / 116 / 145 | 50 / 45 / 25 / 5 |
| Neutral 100 | Notenpapier | `#F2EFF7` | 242 / 239 / 247 | 4 / 4 / 0 / 0 |
| Neutral 0 | Stille | `#FFFFFF` | 255 / 255 / 255 | 0 / 0 / 0 / 0 |
| Success | Encoregrün | `#1FB57A` | 31 / 181 / 122 | 75 / 0 / 70 / 0 |
| Warning | Crescendogelb | `#F5A623` | 245 / 166 / 35 | 0 / 35 / 90 / 0 |
| Danger | Verstärker-Rot | `#E5333C` | 229 / 51 / 60 | 5 / 90 / 80 / 0 |
| Info | Wellenblau | `#2D7BE5` | 45 / 123 / 229 | 85 / 55 / 0 / 0 |

## Typografie
- **Headline:** Clash Display (Variable, Bold/Semibold) – expressive Display-Schrift mit charaktervollen Schnitten für Titel, Claims und Cover-Headlines.
- **Body:** Inter (Variable, Regular/Medium) – klare, lesbare Sans-Serif für Fließtext, UI und Metadaten.
- **Mono / Akzent:** JetBrains Mono – für Timestamps, Audio-Codes und technische Angaben.
- **Fallback:** „General Sans", „Helvetica Neue", Arial, sans-serif.
- Größen verlaufen in einer modularen Skala (1.250), Splash-Headlines reichen bis 96 px, Body bleibt zwischen 16 und 18 px für angenehme Lesbarkeit auf mobilen wie stationären Geräten.

## Logo & Formensprache
- Das Wortmarken-Logo „saitenklang" wird in Clash Display Semibold, Lowercase, mit einer 8:1-Breite-zu-Höhe-Proportion gesetzt; der zweite Buchstabe „a" trägt eine Note als Glyphenakzent.
- Als Bildmarke dient eine stilisierte Schallwellen-Spirale, die aus drei konzentrischen Bögen aufgebaut ist und in Tiefviolett, Magenta-Puls oder Schwarz vorkommt – niemals als reiner Vollkreis.
- Mindestabstand um das Logo entspricht der Höhe des „k"-Bogens; Größe niemals unter 24 px digital bzw. 12 mm Print.
- Bevorzugte Formensprache: weiche Radien (mind. 8 px), dynamische Wellenlinien, geschwungene Kurven – niemals eckige, harte Kanten, die zur Klangwärme im Widerspruch stehen.

## Bildsprache & Tonalität
- **Bildstil:** Authentische Live-Fotografie mit warmer Farbgebung (Magenta- und Bernsteintonen), Close-ups von Händen an Instrumenten, Konzertszenen mit Bewegungsunschärfe, Künstler:innen-Porträts in natürlicher Umgebung – keine sterilen Stockbilder.
- **Tonalität:** Direkt, enthusiastisch und mit „du"-Ansprache, kurze Sätze, leichte Wortspiele rund um Klang, Frequenz und Bühne; niemals belehrend, immer einladend.

## Do & Don't
> [!do] Do
> Setze den Claim „Dreh die Welt lauter." unverändert in Clash Display Semibold.
> Nutze Tiefviolett als Hauptträger und kombiniere es maximal mit Magenta-Puls und Bernsteinbeat.
> Fotografiere Künstler:innen beim echten Musizieren – mit Emotion, Bewegung, Schweiß.
> Schreib UI-Texte in „du"-Form und halte Microcopy unter 60 Zeichen.
> Verwende Schallwellen- und Notenglyphen als wiederkehrendes Gestaltungselement.

> [!dont] Don't
> Setze das Logo nie in kursiv, gestreckt oder mit Schatteneffekt.
> Verwende keine grellen Neon-Farben außerhalb der definierten Palette.
> Schreibe Sätze wie „Nutzer" – die Community sind Hörer:innen, Künstler:innen und Entdecker:innen.
> Zeige generische Konzertfotos ohne erkennbare Gesichter oder echte Momente.
> Mische Clash Display mit anderen Display-Schriften im selben Layout.

## Design-Tokens

```json
{
  "color": {
    "primary": "#3B1E6E",
    "secondary": "#E0338C",
    "accent": "#F5A623",
    "neutral": {
      "900": "#15121F",
      "700": "#2A2640",
      "500": "#7A7491",
      "100": "#F2EFF7",
      "0": "#FFFFFF"
    },
    "semantic": {
      "success": "#1FB57A",
      "warning": "#F5A623",
      "danger": "#E5333C",
      "info": "#2D7BE5"
    }
  },
  "font": {
    "heading": "Clash Display",
    "body": "Inter",
    "mono": "JetBrains Mono",
    "fallback": "General Sans, Helvetica Neue, Arial, sans-serif",
    "scale": {
      "h1": "64px",
      "h2": "44px",
      "h3": "28px",
      "body": "17px",
      "caption": "13px"
    },
    "weight": {
      "regular": 400,
      "medium": 500,
      "bold": 700
    }
  },
  "space": {
    "unit": 4,
    "scale": [
      "4px",
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "48px",
      "64px",
      "96px"
    ]
  },
  "radius": {
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "pill": "999px"
  },
  "motion": {
    "duration_ms": {
      "fast": 150,
      "base": 240,
      "slow": 420
    },
    "easing": "cubic-bezier(0.22, 1, 0.36, 1)"
  },
  "elevation": {
    "sm": "0 2px 8px rgba(21, 18, 31, 0.12)",
    "md": "0 12px 32px rgba(21, 18, 31, 0.18)"
  }
}
```

Verwandt: [[Farben]] · [[Typografie]] · [[Design-Tokens]] · [[Barrierefreiheit]] · [[_Marken-Index]]
