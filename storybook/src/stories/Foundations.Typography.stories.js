import { currentBrand } from '../brands.js';

export default {
  title: 'Foundations/Typografie',
};

export const Skala = (args, context) => {
  const f = (currentBrand(context).tokens || {}).font || {};
  const scale = f.scale || {};
  const rows = Object.entries(scale)
    .sort((a, b) => b[1] - a[1])
    .map(([k, px]) => `<div style="border-bottom:1px solid var(--color-neutral-100);padding:var(--space-2) 0">
        <span class="t-caption muted" style="display:inline-block;width:120px">${k} · ${px}px</span>
        <span style="font-family:var(--font-heading),var(--font-fallback);font-size:${px}px">Wieselflink ${k}</span>
      </div>`)
    .join('');

  return `<div class="stack">
    <h1 class="t-h1">Typografie</h1>
    <p class="t-body">Headline: <strong>${f.heading || '—'}</strong> · Body: <strong>${f.body || '—'}</strong> · Mono: <strong>${f.mono || '—'}</strong>.
    <br><span class="t-caption">Hinweis: echte Schriftdateien werden im Storybook nicht geladen – gezeigt wird die Skala mit Fallback-Font.</span></p>
    ${rows}
    <h3 class="t-h3">Fließtext</h3>
    <p class="t-body">Der schnelle braune Fuchs springt über den faulen Hund. Typografie trägt Ton und Persönlichkeit der Marke und sichert Lesbarkeit über alle Kanäle.</p>
  </div>`;
};
