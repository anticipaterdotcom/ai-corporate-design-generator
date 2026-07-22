# Beitragen

## Eine neue Marke vorschlagen

1. **Brief anlegen:** `cp briefs/_TEMPLATE.yml briefs/deine-marke.yml`
2. **Ausfüllen.** Pflicht ist nur `name`. Je mehr du angibst
   (`branche`, `anrede`, `persoenlichkeit`, `farb_richtung`, `typo_richtung`,
   `bild_richtung`), desto gezielter das Ergebnis. Leerfelder erfindet das Modell.
   Exakte Farben/Schriften kannst du mit `farb_primary`, `font_heading` etc. erzwingen.
3. **PR öffnen** – nur mit deiner Brief-Datei. Generierte Dateien fügt die Action hinzu.

## Was passiert dann

Ein:e Maintainer:in kommentiert im PR:

```
/generate briefs/deine-marke.yml
```

Danach erscheinen im PR:
- `brands/deine-marke.md` – vollständiges Profil
- `agents/deine-marke.agent.md` – Agent-Instructions
- `tokens/deine-marke.tokens.json` – Design-Tokens
- ein Kommentar mit Link zum gebauten **Storybook-Artifact**

## Brief-Konventionen

- `anrede`: `du` oder `Sie`
- `persoenlichkeit`: 3–5 Attribute als Liste
- Farb-/Schrift-Freitext ist erlaubt; das Modell (bzw. der deterministische
  Fallback) leitet daraus konsistente, barrierearme Tokens ab.

## Qualitätsanspruch

- Farbkontraste sollen **WCAG ≥ 4.5:1** für Fließtext erfüllen.
- Marken sind **fiktiv** – keine realen Unternehmen, Logos oder Markenrechte.
