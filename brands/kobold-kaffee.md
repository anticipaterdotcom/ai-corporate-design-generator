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
  - generiert
ki-agent: true
generiert_von: generate_brand.py
---

# Kobold Kaffee

## Marken-Kern
- **Mission:** Kleinbäuerliche Kaffeebauern gerecht entlohnen und jede Bohne so frisch wie möglich in die Tasse bringen – vom Direkthandel bis zur Trommelröstung am Tag der Bestellung.
- **Werte:** Transparenz, Handwerk, Verspieltheit, Neugier, Gemeinschaft
- **Zielgruppe:** Kaffeebegeisterte Genießer:innen zwischen 25 und 45 Jahren, die wissen wollen, woher ihr Kaffee kommt, und Frische sowie Abo-Modelle schätzen.
- **Persönlichkeit:** warmherzig, verspielt, handwerklich präzise, wissbegierig, immer eine gute Tasse voraus.

## Farbwelt

| Rolle | Name | HEX | RGB | CMYK |
|---|---|---|---|---|
| Primär | Rösttinte | `#3B2417` | 59 / 36 / 23 | 30 / 60 / 75 / 80 |
| Sekundär | Trommelglut | `#C87941` | 200 / 121 / 65 | 15 / 55 / 80 / 5 |
| Akzent | Wachstumsgrün | `#4FBE8E` | 79 / 190 / 142 | 60 / 0 / 70 / 0 |
| Hellton | Sahnehaube | `#F4ECE1` | 244 / 236 / 225 | 4 / 6 / 10 / 0 |
| Dunkelton | Bohne Schwarz | `#1A100B` | 26 / 16 / 11 | 60 / 70 / 80 / 90 |

## Typografie

- **Headlines:** Fraunces (variable, achsen­optimiert), 600–700, optSize 1.05, weicher Schatten erlaubt, Versalien nur für Kapitälchen-Etiketten.
- **Fließtext:** Inter, 400/500, Zeilenhöhe 1.55, längenbegrenzt auf 60–70 Zeichen pro Zeile.
- **Akzente:** Fraunces Italic für Zitate und Produkt­namen, Inter Tight in Großbuchstaben (Letter­spacing +40) für Sorten-Etiketten.
- **Hierarchie:** H1 56/60, H2 36/42, H3 24/30, Body 16/25, Caption 13/18.
- **Sonderfall:** monospaced Pre-Order-Codes in "JetBrains Mono" – bleibt sparsam, maximal ein Code pro Screen.

## Logo & Formensprache

- Das Wortmarken-Logo besteht aus einem verspielten Kobold-Kopf mit Bohnenohr, eingebettet in eine Wortmarke „Kobold Kaffee" in Fraunces SemiBold.
- Mindestabstand um das Logo = Höhe des Kobold-Kopfes (x-Höhe), niemals kleiner.
- Primärplatzierung auf hellem Untergrund in Rösttinte; auf Fotos als helle Variante (Sahnehaube) freigestellt.
- Formensprache: weiche, organische Rundungen, keine harten 90°-Ecken, abgerundete Eckenradius 12–20 px im Web, 4–8 mm auf Print.

## Bildsprache & Tonalität

- **Bildstil:** Warmes, natürliches Food-Styling mit sichtbarer Textur – Bohne, Crema, Holz des Rösttrommels, Bauernhände. Filme mit warmer Farb­temperatur (5200–5600 K), leichte Körnung, kein Hochglanz-Look.
- **Tonalität:** Per „du", erzählerisch, neugierig und mit einem Augenzwinkern – so wie ein Barista, der dir im Café gegenübersitzt. Kein Fachjargon ohne Erklärung, keine Marketing-Phrasen.

## Do & Don't

> [!do] Do
> Schreib jede Bohne, jede Farm und jedes Röst­datum transparent auf die Tüte – Transparenz ist Teil des Versprechens.
> Nutz warme Erdtöne (Rösttinte, Trommelglut) als Basis und setz Wachstumsgrün gezielt für Aktionen, Fair-Trade-Siegel und Frische-Indikatoren ein.
> Zeig Hände, Werkzeug, Röst­abfälle – die Handwerk­lichkeit muss in jeder Aufnahme sichtbar bleiben.
> Sprich die Kund:innen mit „du" an und erzähl kleine Geschichten aus den Ursprungsländern statt nur Sensorik-Profile.

> [!dont] Don't
> Verwende keine kalten Klinik-Blau­töne, sterile Studio-Ästhetik oder künstliche Coffee-Art-Stockfotos ohne Kontext.
> Überlade das Logo nicht mit Effekten – kein Verlauf, kein Glanz, kein auffälliger Schatten hinter dem Kobold-Kopf.
> Schreib nie „Industrielle Großröstung" oder vergleichbare Phrasen – das widerspricht dem handwerk­lichen Anspruch.
> Setz Akzentfarben nie als Voll­flächen­hinter­grund für Fließtext ein, der Kontrast und die Ruhe der warmen Töne gehen sonst verloren.

## Design-Tokens

```json
{
  "color": {
    "primary": "#3B2417",
    "secondary": "#C87941",
    "accent": "#4FBE8E",
    "neutral": {
      "900": "#1A100B",
      "700": "#3B2417",
      "500": "#7A5A48",
      "100": "#F4ECE1",
      "0": "#FFFFFF"
    },
    "semantic": {
      "success": "#4FBE8E",
      "warning": "#E0A93B",
      "danger": "#C0493B",
      "info": "#3B7BB8"
    }
  },
  "font": {
    "heading": "Fraunces",
    "body": "Inter",
    "mono": "JetBrains Mono",
    "fallback": "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
    "scale": {
      "h1": "56px",
      "h2": "36px",
      "h3": "24px",
      "body": "16px",
      "caption": "13px"
    },
    "weight": {
      "regular": 400,
      "medium": 500,
      "bold": 700
    }
  },
  "space": {
    "unit": "4px",
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
    "sm": "6px",
    "md": "12px",
    "lg": "20px",
    "pill": "999px"
  },
  "motion": {
    "duration_ms": {
      "fast": 160,
      "base": 240,
      "slow": 420
    },
    "easing": "cubic-bezier(0.22, 1, 0.36, 1)"
  },
  "elevation": {
    "sm": "0 1px 2px rgba(26, 16, 11, 0.08), 0 1px 3px rgba(26, 16, 11, 0.06)",
    "md": "0 6px 12px rgba(26, 16, 11, 0.10), 0 2px 4px rgba(26, 16, 11, 0.08)"
  }
}
```

Verwandt: [[Farben]] · [[Typografie]] · [[Design-Tokens]] · [[Barrierefreiheit]] · [[_Marken-Index]]
