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
  const persona = b.persoenlichkeit || [];
  const imgs = IMAGES[b.slug] || [];
  const hero = imgs[0];
  const claim = esc(b.claim) || 'Design that carries the brand.';

  const heroBg = hero
    ? `background-image: linear-gradient(100deg, var(--color-primary) 0%, var(--color-primary) 30%, color-mix(in srgb, var(--color-primary) 52%, transparent) 64%, color-mix(in srgb, var(--color-primary) 8%, transparent) 100%), url('${hero}'); background-size: cover; background-position: center right;`
    : '';

  const cells = [
    paletteCell('Primary', c.primary), paletteCell('Secondary', c.secondary),
    paletteCell('Accent', c.accent), paletteCell('Ink', n['900']), paletteCell('Paper', n['0']),
  ].join('');

  const chips = persona.map((p) => `<span class="chip">${esc(p)}</span>`).join('');

  // Business card contact lines
  const domain = b.slug.replace(/-/g, '') + '.com';

  return `
  <section class="hero" style="${heroBg}">
    <div class="hero__accent"></div>
    <div class="hero__grip stack">
      <p class="eyebrow">${esc(b.branche)}</p>
      <h1 class="display">${esc(b.name)}</h1>
      <p class="lead">${claim}</p>
      <div class="row" style="margin-top:12px">
        <button class="btn btn--accent btn--lg">Get started</button>
        <button class="btn btn--lg" style="background:transparent;color:var(--on-primary);border-color:color-mix(in srgb,var(--on-primary) 45%,transparent)">Guidelines</button>
      </div>
    </div>
  </section>

  <section class="band"><div class="wrap grid" style="grid-template-columns:1.4fr 1fr;gap:clamp(24px,5vw,72px);align-items:center">
    <div class="stack">
      <p class="eyebrow">Positioning</p>
      <p class="manifesto">${esc(b.positioning) || claim}</p>
    </div>
    <div class="stack">
      <p class="eyebrow">Personality</p>
      <div class="chips">${chips || '<span class="chip">markant</span>'}</div>
      <p class="caption" style="margin-top:8px">Voice — <strong>${b.anrede === 'Sie' ? 'formal (Sie)' : 'informal (du)'}</strong></p>
    </div>
  </div></section>

  <section class="band"><div class="wrap stack">
    <p class="eyebrow">Color · in use</p>
    <h2 class="h2">Palette &amp; proportion</h2>
    <div class="colorbar">
      <div class="cb-primary"><span class="role">Primary · ${c.primary || ''}</span></div>
      <div class="cb-secondary"><span class="role">Secondary</span></div>
      <div class="cb-accent"><span class="role">Accent</span></div>
    </div>
    <div class="palette" style="margin-top:14px">${cells}</div>
  </div></section>

  <section class="band"><div class="wrap grid" style="grid-template-columns:1fr 1fr;gap:clamp(24px,5vw,64px);align-items:center">
    <div class="stack">
      <p class="eyebrow">Voice</p>
      <p class="pullquote">“${claim.replace(/\.$/, '')}<span class="mark">.</span>”</p>
    </div>
    <div class="stack">
      <p class="caption">Set in <strong>${esc(f.heading)}</strong> — the headline face. Body copy in
      <strong>${esc(f.body)}</strong>.</p>
      <p class="body">The quick brown fox jumps over the lazy dog — a specimen of the body face at
      ${(f.scale && f.scale.body) || 16}px with a comfortable 1.65 line height for effortless reading.</p>
    </div>
  </div></section>

  <section class="band"><div class="wrap stack-lg">
    <div class="stack"><p class="eyebrow">Applications</p><h2 class="h1">The brand, in the wild</h2></div>
    <div class="apps">
      <div>
        <div class="stage">
          <div class="bizcard">
            <div class="wm">${esc(b.name)}</div>
            <div class="meta">${esc(b.branche)}<br>hello@${domain}<br>${domain}</div>
          </div>
        </div>
        <p class="stage__cap">Business card</p>
      </div>
      <div>
        <div class="stage">
          <div class="post">
            <div class="img" style="background-image:url('${imgs[1] || hero || ''}')"></div>
            <div class="veil"></div>
            <div class="inner">
              <span class="tag">${esc((persona[0] || 'new').toString())}</span>
              <div class="headline">${claim}</div>
            </div>
          </div>
        </div>
        <p class="stage__cap">Social post</p>
      </div>
      <div>
        <div class="stage">
          <div class="poster">
            <div class="kicker">${esc(b.branche)}</div>
            <div class="stack" style="gap:14px">
              <div class="rule"></div>
              <div class="big">${claim}</div>
            </div>
            <div class="kicker">${esc(b.name)} — ${domain}</div>
          </div>
        </div>
        <p class="stage__cap">Poster</p>
      </div>
      <div>
        <div class="stage">
          <div class="phone">
            <div class="notch"></div>
            <div class="appbar">${esc(b.name)}</div>
            <div class="appimg" style="background-image:url('${imgs[2] || hero || ''}')"></div>
            <div class="appcard">
              <div class="t">${esc(persona[1] || b.name)}</div>
              <div class="d">${esc(b.branche)}</div>
            </div>
            <div class="appbtn">Get started</div>
          </div>
        </div>
        <p class="stage__cap">App screen</p>
      </div>
    </div>
  </div></section>

  ${imgs.length > 1 ? `<section class="band"><div class="wrap stack">
    <p class="eyebrow">Image world · Bildsprache</p>
    <h2 class="h2">Photography</h2>
    <div class="bildwelt">
      ${imgs.slice(1, 5).map((u, i) => `<img loading="lazy" class="${i === 0 ? 'tall' : ''}" src="${u}" alt="${esc(b.name)} mood ${i + 1}">`).join('')}
    </div>
    <p class="caption">Photography via Unsplash — placeholder mood for this fictional brand.</p>
  </div></section>` : ''}

  <section class="band"><div class="wrap stack-lg">
    <div class="stack"><p class="eyebrow">Components</p><h2 class="h2">Interface kit</h2></div>
    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-items:start">
      <div class="card">
        <div class="card__bar"></div>
        <p class="eyebrow card__eyebrow">${esc(b.branche)}</p>
        <h3 class="h3" style="margin:6px 0 10px">${esc(b.name)}</h3>
        <p class="body" style="font-size:15px">${claim}</p>
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
        <p class="caption">Switch brand in the toolbar → every mockup, color and typeface re-themes live.</p>
      </div>
    </div>
  </div></section>`;
};
