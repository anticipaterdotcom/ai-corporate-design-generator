import { currentBrand } from '../brands.js';
import { bestOn } from '../theme.js';
import IMAGES from '../images.json';

export default { title: 'Brand/Overview' };

const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

function paletteCell(role, hex) {
  if (!hex) return '';
  const on = bestOn(hex);
  return `<div class="palette__cell" style="background:${hex};color:${on}">
    <span class="role">${role}</span><span class="hex">${hex.toUpperCase()}</span>
  </div>`;
}

export const Overview = (args, context) => {
  const b = currentBrand(context);
  const t = b.tokens || {};
  const c = t.color || {};
  const f = t.font || {};
  const n = c.neutral || {};
  const imgs = IMAGES[b.slug] || [];
  const hero = imgs[0];
  const mood = imgs.slice(1, 5);

  const cells = [
    paletteCell('Primary', c.primary),
    paletteCell('Secondary', c.secondary),
    paletteCell('Accent', c.accent),
    paletteCell('Ink', n['900']),
    paletteCell('Paper', n['0']),
  ].join('');

  const heroBg = hero
    ? `background-image: linear-gradient(100deg, var(--color-primary) 0%, var(--color-primary) 32%, color-mix(in srgb, var(--color-primary) 55%, transparent) 66%, color-mix(in srgb, var(--color-primary) 12%, transparent) 100%), url('${hero}'); background-size: cover; background-position: center right;`
    : '';

  const moodGrid = mood.length
    ? `<section class="band"><div class="wrap stack">
        <p class="eyebrow">Image world · Bildsprache</p>
        <h2 class="h2">Photography</h2>
        <div class="bildwelt">
          ${mood.map((u, i) => `<img loading="lazy" class="${i === 0 ? 'tall' : ''}" src="${u}" alt="${esc(b.name)} mood ${i + 1}">`).join('')}
        </div>
        <p class="caption">Photography via Unsplash — placeholder mood for this fictional brand.</p>
      </div></section>`
    : '';

  return `
  <section class="hero" style="${heroBg}">
    <div class="hero__accent"></div>
    <div class="hero__grip stack">
      <p class="eyebrow">${esc(b.branche)}</p>
      <h1 class="display">${esc(b.name)}</h1>
      <p class="lead">${esc(b.claim)}</p>
      <div class="row" style="margin-top:12px">
        <button class="btn btn--accent btn--lg">Get started</button>
        <button class="btn btn--lg" style="background:transparent;color:var(--on-primary);border-color:color-mix(in srgb,var(--on-primary) 45%,transparent)">Learn more</button>
      </div>
    </div>
  </section>

  <section class="band"><div class="wrap stack">
    <p class="eyebrow">Color</p>
    <h2 class="h2">Core palette</h2>
    <div class="palette">${cells}</div>
  </div></section>

  ${moodGrid}

  <section class="band"><div class="wrap grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr));align-items:start">
    <div class="stack">
      <p class="eyebrow">Type</p>
      <h2 class="h2">Typography</h2>
      <p class="specimen" style="font-size:clamp(44px,6vw,80px)">Aa</p>
      <p class="caption">Headline · <strong>${esc(f.heading)}</strong> · Body · <strong>${esc(f.body)}</strong></p>
    </div>
    <div class="stack" style="align-self:center">
      <p class="body">The quick brown fox jumps over the lazy dog. Body copy is set in
      <strong>${esc(f.body)}</strong> at ${(f.scale && f.scale.body) || 16}px with a comfortable
      1.65 line height for effortless reading across every touchpoint.</p>
      <p class="caption">Voice: <strong>${b.anrede === 'Sie' ? 'formal (Sie)' : 'informal (du)'}</strong></p>
    </div>
  </div></section>

  <section class="band"><div class="wrap stack-lg">
    <div class="stack"><p class="eyebrow">Components</p><h2 class="h2">In context</h2></div>
    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-items:start">
      <div class="card">
        <div class="card__bar"></div>
        <p class="eyebrow card__eyebrow">${esc(b.branche)}</p>
        <h3 class="h3" style="margin:6px 0 10px">${esc(b.name)}</h3>
        <p class="body" style="font-size:15px">${esc(b.claim)}</p>
        <div class="row" style="margin-top:18px">
          <button class="btn btn--primary btn--sm">Primary</button>
          <button class="btn btn--ghost btn--sm">Details</button>
        </div>
      </div>
      <div class="stack">
        <div class="row">
          <button class="btn btn--primary">Primary</button>
          <button class="btn btn--accent">Accent</button>
          <button class="btn btn--ghost">Ghost</button>
        </div>
        <div class="row">
          <span class="badge badge--primary">Primary</span>
          <span class="badge badge--accent">Accent</span>
          <span class="badge badge--soft">Soft</span>
          <span class="badge badge--success">Success</span>
          <span class="badge badge--warning">Warning</span>
          <span class="badge badge--danger">Danger</span>
        </div>
        <p class="caption">Switch brand in the toolbar → the whole page re-themes with its real fonts and photography.</p>
      </div>
    </div>
  </div></section>`;
};
