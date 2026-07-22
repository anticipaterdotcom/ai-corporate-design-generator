import { currentBrand } from '../brands.js';

export default {
  title: 'Foundations/Farben',
};

function swatch(name, hex) {
  return `<div class="swatch">
    <div class="swatch__chip" style="background:${hex}"></div>
    <div class="swatch__meta"><div class="swatch__name">${name}</div><div class="swatch__hex">${hex}</div></div>
  </div>`;
}

function group(title, entries) {
  const items = entries.filter(([, v]) => v).map(([k, v]) => swatch(k, v)).join('');
  if (!items) return '';
  return `<h3 class="t-h3">${title}</h3><div class="swatch-grid">${items}</div>`;
}

export const Palette = (args, context) => {
  const c = (currentBrand(context).tokens || {}).color || {};
  const brand = [['primary', c.primary], ['secondary', c.secondary], ['accent', c.accent]];
  const neutral = Object.entries(c.neutral || {}).map(([k, v]) => [`neutral ${k}`, v]);
  const semantic = Object.entries(c.semantic || {}).map(([k, v]) => [k, v]);
  return `<div class="stack">
    <h1 class="t-h1">Farben</h1>
    ${group('Marke', brand)}
    ${group('Neutrals', neutral)}
    ${group('Semantisch', semantic)}
  </div>`;
};
