import { currentBrand } from '../brands.js';

export default {
  title: 'Marke/Übersicht',
};

const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export const Uebersicht = (args, context) => {
  const b = currentBrand(context);
  const t = b.tokens || {};
  const c = t.color || {};
  const chips = ['primary', 'secondary', 'accent']
    .filter((k) => c[k])
    .map((k) => `<div class="swatch"><div class="swatch__chip" style="background:${c[k]}"></div>
      <div class="swatch__meta"><div class="swatch__name">${k}</div><div class="swatch__hex">${c[k]}</div></div></div>`)
    .join('');

  return `
    <div class="stack">
      <div class="hero stack">
        <div class="t-caption" style="opacity:.8">${esc(b.branche)}</div>
        <h1 class="t-h1">${esc(b.name)}</h1>
        <p class="t-body">${esc(b.claim)}</p>
        <div class="row">
          <button class="btn btn--accent">Jetzt starten</button>
          <button class="btn btn--ghost" style="color:var(--color-neutral-0);border-color:var(--color-neutral-0)">Mehr erfahren</button>
        </div>
      </div>
      <h3 class="t-h3">Kernpalette</h3>
      <div class="swatch-grid">${chips}</div>
      <p class="t-caption">Anrede: <strong>${esc(b.anrede)}</strong> · Umschalten oben rechts in der Toolbar (Marke).</p>
    </div>`;
};
