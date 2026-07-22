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
  - verlässlich
tags:
  - marke
  - ki
  - generiert
ki-agent: true
generiert_von: generate_brand.py
---

# Wolke7 Reisen

## Marken-Kern
- **Mission:** Reisen so leicht machen wie das Liegen auf einer Wolke – von der Inspiration bis zur Buchung in wenigen Momenten.
- **Werte:** Leichtigkeit, Vertrauen, Klarheit, Herzlichkeit, Neugier
- **Zielgruppe:** Reiselustige zwischen 25 und 55 Jahren, die unkompliziert und digital Städte, Strände und Natur entdecken wollen.
- **Persönlichkeit:** freundlich, luftig, optimistisch, unkompliziert, verlässlich

## Farbwelt

| Rolle | Name | HEX | RGB | CMYK |
| --- | --- | --- | --- | --- |
| Primär | Wolkenblau | `#2FA8E0` | 47, 168, 224 | 79, 25, 0, 12 |
| Sekundär | Sonnencreme | `#FDE9CE` | 253, 233, 206 | 2, 8, 19, 1 |
| Akzent | Koffeinrot | `#FF6F61` | 255, 111, 97 | 0, 57, 62, 0 |
| Tiefenhimmel | Mitternachtsblau | `#0E2A47` | 14, 42, 71 | 81, 41, 0, 72 |
| Text | Anthrazitwolke | `#2B2D33` | 43, 45, 51 | 16, 12, 0, 80 |
| Hintergrund | Porzellanweiß | `#FFFFFF` | 255, 255, 255 | 0, 0, 0, 0 |
| Erfolg | Palmengrün | `#3CB371` | 60, 179, 113 | 47, 0, 37, 30 |
| Warnung | Bernsteinsonne | `#E8A33D` | 232, 163, 61 | 0, 30, 74, 9 |
| Fehler | Signalrot | `#D7263D` | 215, 38, 61 | 0, 82, 72, 16 |
| Info | Lagunenblau | `#5BA8D6` | 91, 168, 214 | 57, 21, 0, 16 |

## Typografie

**Heading:** Nunito, Fallback `ui-rounded, "Quicksand", "Segoe UI", system-ui, sans-serif`
**Body:** Nunito, Fallback `ui-rounded, "Quicksand", "Segoe UI", system-ui, sans-serif`
**Mono (für Buchungscodes, IDs):** `"JetBrains Mono", ui-monospace, "SFMono-Regular", monospace`

Skala (rem): H1 2.75 · H2 2 · H3 1.5 · Body 1 · Caption 0.8125. Gewichte: regular 400, medium 600, bold 800. Headings fallen durch das freundlich-runde `Nunito` auf; Lauftext bleibt in 400/600 für hohe Lesbarkeit.

## Logo & Formensprache

- Das Logo kombiniert die Wortmarke "Wolke7" mit einer stilisierten Wolkenform, deren rechter Bogen zu einer aufsteigenden "7" ausläuft – niemals getrennt, immer mit 0,75× Wortmarkenhöhe als Schutzraum.
- Primärlogo in Wolkenblau auf Porzellanweiß, invertiert in Porzellanweiß auf Mitternachtsblau. Akzentfarbe nur als kleines Highlight im Wolkenbogen erlaubt.
- Ecken konsequent rund: Karten radius-lg, Buttons radius-pill, Eingabefelder radius-md. Scharfe Kanten nur in Datentabellen.
- Minimalistische Iconografie mit gleichmäßigem 1,5-px-Strich, gefüllte Akzente nur in Koffeinrot für aktive Zustände.

## Bildsprache & Tonalität

- **Bildstil:** Helles, natürliches Tageslicht; sanfte Aufsicht auf Reiseziele mit Himmel im oberen Drittel; Wolkenformationen als verbindendes Stilelement über alle Motive; warme, leicht entsättigte Farben mit blauer und cremefarbener Dominanz; echte Menschen, kein Stock-Look.
- **Tonalität:** Wir sprechen unsere Reisenden mit "du" an, warm, kurz, mit einem Augenzwinkern – Sätze wie "Pack die Sonnencreme ein" oder "Dein Trip nach Lissabon wartet schon". Keine Floskeln, keine Imperative im Befehlston.

## Do & Don't

> [!do] Do
> Setze Wolkenblau als Hauptfarbe auf allen Buchungsflächen ein, damit der "Wolke-7"-Moment sofort spürbar wird.
> Runde Radien (mind. 8 px) bei Karten, Buttons und Eingabefeldern – die Formensprache bleibt weich und einladend.
> Fotografiere Reiseziele mit sichtbarem Himmel und echten Reisenden, um Leichtigkeit und Glaubwürdigkeit zu verbinden.
> Nutze Sonnencreme als großzügige Hintergrundfläche in Onboarding- und Inspirations-Bereichen, um Wärme zu erzeugen.
> Behalte eine klare Hierarchie: eine Akzentfarbe pro Bildschirm, mehr lenkt ab und unterbricht den ruhigen Wolken-Look.

> [!dont] Don't
> Verwende die Markenfarben nicht auf grellen, hochgesättigten Stockfotos – das bricht die sanfte Tonalität der Marke.
> Setze Koffeinrot nicht als Flächenfarbe ein, sondern ausschließlich als sparsames Highlight für aktive Zustände oder kleine Akzente.
> Vermeide eckige Formen, harte Schatten oder Glasmorphismen – sie passen nicht zur leichten, luftigen Markenwelt.
> Schreibe nicht in der Sie-Form und vermeide reißerische Slogans wie "Billigste Reise!" – der Ton bleibt freundlich und augenzwinkernd.
> Überlade das Logo nicht mit Effekten, Verläufen oder Schatten – das Logo wirkt am besten in seiner klaren, runden Form.

## Design-Tokens

```json
{
  "color": {
    "primary": "#2FA8E0",
    "secondary": "#FDE9CE",
    "accent": "#FF6F61",
    "neutral": {
      "900": "#0E2A47",
      "700": "#2B2D33",
      "500": "#7A8190",
      "100": "#E5EBF2",
      "0": "#FFFFFF"
    },
    "semantic": {
      "success": "#3CB371",
      "warning": "#E8A33D",
      "danger": "#D7263D",
      "info": "#5BA8D6"
    }
  },
  "font": {
    "heading": "Nunito",
    "body": "Nunito",
    "mono": "JetBrains Mono",
    "fallback": "ui-rounded, \"Quicksand\", \"Segoe UI\", system-ui, sans-serif",
    "scale": {
      "h1": "2.75rem",
      "h2": "2rem",
      "h3": "1.5rem",
      "body": "1rem",
      "caption": "0.8125rem"
    },
    "weight": {
      "regular": 400,
      "medium": 600,
      "bold": 800
    }
  },
  "space": {
    "unit": 4,
    "scale": [
      4,
      8,
      12,
      16,
      24,
      32,
      48,
      64
    ]
  },
  "radius": {
    "sm": 8,
    "md": 12,
    "lg": 20,
    "pill": 999
  },
  "motion": {
    "duration_ms": {
      "fast": 120,
      "base": 220,
      "slow": 380
    },
    "easing": "cubic-bezier(0.22, 0.61, 0.36, 1)"
  },
  "elevation": {
    "sm": "0 2px 6px rgba(14,42,71,0.08)",
    "md": "0 10px 24px rgba(14,42,71,0.12)"
  }
}
```

Verwandt: [[Farben]] · [[Typografie]] · [[Design-Tokens]] · [[Barrierefreiheit]] · [[_Marken-Index]]
