import { currentBrand } from '../brands.js';
import { bestOn, contrast, wcagRating } from '../theme.js';

export default { title: 'Foundations/Colors' };

function swatch(name, hex) {
  if (!hex) return '';
  const on = bestOn(hex);
  const cr = contrast(hex, on);
  const rating = wcagRating(cr);
  const ok = cr >= 4.5;
  const badgeBg = ok ? 'rgba(30,158,106,.16)' : 'rgba(210,75,75,.16)';
  const badgeFg = ok ? '#0d7a4f' : '#b23b3b';
  return `<div class="swatch">
    <div class="swatch__chip" style="background:${hex};color:${on}">
      <span class="badge-aa" style="background:${on === '#FFFFFF' ? 'rgba(0,0,0,.28)' : 'rgba(255,255,255,.6)'};color:${on}">${on === '#FFFFFF' ? 'white text' : 'black text'}</span>
    </div>
    <div class="swatch__meta">
      <div class="swatch__name">${name}</div>
      <div class="swatch__hex">${hex.toUpperCase()}</div>
      <div style="margin-top:8px"><span class="badge-aa" style="background:${badgeBg};color:${badgeFg}">${rating} · ${cr.toFixed(1)}:1</span></div>
    </div>
  </div>`;
}

function group(title, entries) {
  const items = entries.filter(([, v]) => v).map(([k, v]) => swatch(k, v)).join('');
  if (!items) return '';
  return `<div class="stack"><h3 class="h3">${title}</h3><div class="grid swatches">${items}</div></div>`;
}

export const Palette = (args, context) => {
  const c = (currentBrand(context).tokens || {}).color || {};
  const brand = [['Primary', c.primary], ['Secondary', c.secondary], ['Accent', c.accent]];
  const neutral = Object.entries(c.neutral || {}).map(([k, v]) => [`Neutral ${k}`, v]);
  const semantic = Object.entries(c.semantic || {}).map(([k, v]) => [k[0].toUpperCase() + k.slice(1), v]);
  return `<section class="band"><div class="wrap stack-lg">
    <div class="stack"><p class="eyebrow">Foundations</p><h2 class="h1">Colors</h2>
      <p class="body">Each swatch shows the best on-color text and its measured WCAG contrast — body text needs ≥ 4.5:1.</p></div>
    ${group('Brand', brand)}
    ${group('Neutrals', neutral)}
    ${group('Semantic', semantic)}
  </div></section>`;
};
