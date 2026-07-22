import { currentBrand } from '../brands.js';
import { bestOn, contrast, wcagRating, tokensToVars, resolveFamily, archetype } from '../theme.js';
import IMAGES from '../images.json';
import CONTENT from '../content.json';

export default { title: 'Brand/Guideline' };

const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// --- Security: brand data is untrusted (anyone can open a PR). Any value that
// lands INSIDE a style="..." attribute is validated, so a hostile token/image
// can never break out of the attribute and inject markup/handlers. ---
// Only accept literal CSS hex colors; anything else falls back to a safe value.
const hx = (v, fallback = 'transparent') =>
  (/^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(String(v || '').trim())
    ? String(v).trim() : fallback);
// Only accept https URLs on the image hosts we actually use (Unsplash); reject
// quotes/parens so nothing can escape a url('...') context. Else: no image.
const safeUrl = (u) => {
  const s = String(u || '').trim();
  return /^https:\/\/(images|plus)\.unsplash\.com\/[^"'()\s<>]*$/.test(s) ? s : '';
};
const imgBg = (u) => { const s = safeUrl(u); return s ? `url('${s}')` : 'none'; };

const sec = (no, id, kicker, title) =>
  `<div class="stack" id="${id}"><p class="secno">${no}</p><p class="eyebrow">${esc(kicker)}</p><h2 class="h1">${esc(title)}</h2></div>`;

const ICONS = {
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 6.5 7 .8-5 4.8 1.3 7-6.6-3.6L5.4 21l1.3-7-5-4.8 7-.8z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12l5 5L20 6"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.5-9.5-9A5 5 0 0112 5a5 5 0 019.5 7c-2.5 4.5-9.5 9-9.5 9z"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>',
};

export const Guideline = (args, context) => {
  const b = currentBrand(context);
  const t = b.tokens || {};
  const c = t.color || {};
  const f = t.font || {};
  const n = c.neutral || {};
  const ct = CONTENT[b.slug] || {};
  const persona = b.persoenlichkeit || [];
  const imgs = IMAGES[b.slug] || [];
  const hero = imgs[0];
  const claim = esc(b.claim) || 'Design that carries the brand.';
  const domain = b.slug.replace(/-/g, '') + '.com';
  const values = (ct.werte || '').replace(/\.$/, '').split(/,\s*/).filter(Boolean);
  const wm = esc(b.name);
  const wm1 = esc(b.name.split(' ')[0]);

  const arch = archetype(t);
  const heroUrl = safeUrl(hero);
  const imageHero = !['editorial', 'bold'].includes(arch);
  const heroBg = (imageHero && heroUrl)
    ? `background-image: linear-gradient(100deg, var(--color-primary) 0%, var(--color-primary) 30%, color-mix(in srgb, var(--color-primary) 52%, transparent) 64%, color-mix(in srgb, var(--color-primary) 8%, transparent) 100%), url('${heroUrl}'); background-size: cover; background-position: center right;`
    : '';

  const toc = [
    ['01', 'strategy', 'Strategy'], ['02', 'verbal', 'Verbal identity'], ['03', 'logo', 'Logo'],
    ['04', 'color', 'Color'], ['05', 'type', 'Typography'], ['06', 'icon', 'Icon & shape'],
    ['07', 'motion', 'Motion'], ['08', 'grid', 'Grid & space'], ['09', 'components', 'Components'],
    ['10', 'apps', 'Applications'], ['11', 'a11y', 'Accessibility'], ['12', 'assets', 'Assets'],
  ].map(([no, id, l]) => `<a href="#${id}"><span class="n">${no}</span><span class="l">${l}</span></a>`).join('');

  const namedColors = (ct.farbwelt || []).map((col) => {
    const on = bestOn(col.hex);
    return `<div class="cw"><div class="chip" style="background:${hx(col.hex)};color:${on}"><span class="role">${esc(col.rolle)}</span></div>
      <div class="meta"><div class="nm">${esc(col.name)}</div><div class="hx">${esc(col.hex)}</div></div></div>`;
  }).join('');

  const ramp = ['900', '700', '500', '100', '0'].filter((k) => n[k]).map((k) => {
    const hex = n[k]; const on = bestOn(hex);
    return `<div style="background:${hx(hex)};color:${on}">${k}</div>`;
  }).join('');

  const pair = (label, bg, fg) => {
    const cr = contrast(bg, fg); const pass = cr >= 4.5;
    const sbg = hx(bg, '#fff'); const sfg = hx(fg, '#111');
    return `<div class="pair" style="background:${sbg};color:${sfg}">
      <div class="sample">Aa</div><div style="font-size:12px;opacity:.85">${esc(label)}</div>
      <span class="aa" style="background:${pass ? 'rgba(255,255,255,.25)' : 'rgba(0,0,0,.25)'};color:${sfg}">${wcagRating(cr)} · ${cr.toFixed(1)}:1</span></div>`;
  };

  const misuse = [['stretch', 'Nicht verzerren'], ['recolor', 'Nicht umfärben'], ['rot', 'Nicht drehen'], ['shadow', 'Keine Effekte']]
    .map(([cls, cap]) => `<div class="m ${cls}"><span class="x">✕</span><span class="wm3">${wm1}</span><div class="cap">${cap}</div></div>`).join('');

  const li = (arr) => (arr || []).map((x) => `<li>${esc(x)}</li>`).join('');
  const icons = Object.values(ICONS).map((s) => `<div class="ico">${s}</div>`).join('');
  const scale = f.scale || {};
  const typeRows = Object.entries(scale).sort((a, d) => d[1] - a[1]).map(([k, px]) =>
    `<div class="type-row"><div class="meta">${k} · ${px}px</div><div style="font-family:${px >= (scale.h3 || 22) ? 'var(--font-heading)' : 'var(--font-body)'},var(--font-fallback);font-size:${px}px;line-height:1.1;font-weight:${px >= (scale.h3 || 22) ? 700 : 400}">${wm}</div></div>`).join('');
  // ---- Real, functional downloads via data: URIs (no server needed) ----
  const headFam = resolveFamily(f.heading) || 'serif';
  const svgW = Math.max(320, b.name.length * 34);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgW}" height="120" viewBox="0 0 ${svgW} 120">`
    + `<rect width="100%" height="100%" fill="${hx(c.primary, '#111')}"/>`
    + `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="${headFam}, serif" font-weight="700" font-size="52" fill="${bestOn(c.primary || '#111')}">${esc(b.name)}</text></svg>`;
  const cssVars = tokensToVars(t);
  const css = `/* ${b.name} — design tokens */\n:root {\n`
    + Object.entries(cssVars).map(([k, v]) => `  ${k}: ${v};`).join('\n') + '\n}\n';
  const kit = { name: b.name, slug: b.slug, branche: b.branche, claim: b.claim, anrede: b.anrede,
    positioning: b.positioning, persoenlichkeit: persona, content: ct, tokens: t };
  const uri = (mime, data) => `data:${mime};charset=utf-8,${encodeURIComponent(data)}`;
  const kitHref = uri('application/json', JSON.stringify(kit, null, 2));
  const tokHref = uri('application/json', JSON.stringify(t, null, 2));
  const cssHref = uri('text/css', css);
  const svgHref = uri('image/svg+xml', svg);
  const fontsUrl = 'https://fonts.google.com/specimen/' + (headFam || 'Inter').replace(/ /g, '+');
  const dl = (t2, s2, ic, href, attr) => `<a class="dl" href="${href}" ${attr}><div class="ic2">${ic}</div><div><div class="t">${t2}</div><div class="s">${s2}</div></div></a>`;

  return `
  <section class="hero" data-arch="${arch}" style="${heroBg}">
    <div class="hero__accent"></div>
    <div class="hero__grip stack">
      <p class="eyebrow">${esc(b.branche)} · Brand Guidelines</p>
      <h1 class="display">${wm}</h1>
      <p class="lead">${claim}</p>
      <div class="row" style="margin-top:12px">
        <a class="btn btn--accent btn--lg" href="${kitHref}" download="${b.slug}-brand-kit.json">Download kit</a>
        <a class="btn btn--lg" href="#contents" style="${arch === 'editorial' ? 'background:transparent;color:var(--ink);border-color:color-mix(in srgb,var(--ink) 30%,transparent)' : 'background:transparent;color:var(--on-primary);border-color:color-mix(in srgb,var(--on-primary) 45%,transparent)'}">Contents</a>
      </div>
    </div>
  </section>
  ${arch === 'editorial' && heroUrl ? `<div class="editorial-band" style="background-image:${imgBg(hero)}"></div>` : ''}

  <section class="band" id="contents"><div class="wrap stack">
    <p class="eyebrow">Contents</p><div class="toc">${toc}</div>
  </div></section>

  <section class="band sec"><div class="wrap stack-lg">
    ${sec('01', 'strategy', 'Foundation', 'Brand strategy')}
    <div class="grid" style="grid-template-columns:1.3fr 1fr;gap:clamp(24px,5vw,64px);align-items:start">
      <div class="stack-lg">
        <div class="stack"><p class="eyebrow">Mission</p><p class="statement">${esc(ct.mission) || esc(b.positioning) || claim}</p></div>
        <div>
          ${ct.zielgruppe ? `<div class="factline"><div class="k">Audience</div><div class="v">${esc(ct.zielgruppe)}</div></div>` : ''}
          <div class="factline"><div class="k">Positioning</div><div class="v">${esc((b.positioning || '').replace(/^[-*]\s*\*\*[^*]*\*\*:?\s*/, '').trim()) || claim}</div></div>
          <div class="factline"><div class="k">Personality</div><div class="v">${persona.map(esc).join(' · ') || '—'}</div></div>
        </div>
      </div>
      <div class="stack"><p class="eyebrow">Values</p><ul class="valuelist">${values.map((v) => `<li>${esc(v)}</li>`).join('') || '<li>—</li>'}</ul></div>
    </div>
  </div></section>

  <section class="band sec"><div class="wrap stack-lg">
    ${sec('02', 'verbal', 'Verbal identity', 'How the brand speaks')}
    ${ct.tonalitaet ? `<p class="statement" style="font-size:clamp(22px,3vw,38px);max-width:28ch">${esc(ct.tonalitaet)}</p>` : ''}
    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(180px,1fr))">
      <div class="factline" style="border:0"><div class="k">Tagline</div><div class="v"><strong>${claim}</strong></div></div>
      <div class="factline" style="border:0"><div class="k">Address</div><div class="v">${b.anrede === 'Sie' ? 'formal (Sie)' : 'informal (du)'}</div></div>
    </div>
    <div class="dodont">
      <div class="dd dd--do"><h4>Do</h4><ul>${li(ct.do)}</ul></div>
      <div class="dd dd--dont"><h4>Don’t</h4><ul>${li(ct.dont)}</ul></div>
    </div>
  </div></section>

  <section class="band sec"><div class="wrap stack-lg">
    ${sec('03', 'logo', 'Identity', 'Logo & wordmark')}
    <div class="lockrow">
      <div class="lockup"><span class="wordmark wordmark--sm">${wm}<span class="dot">.</span></span></div>
      <div class="lockrow" style="grid-template-columns:1fr 1fr">
        <div class="lockup lockup--dark"><span class="wordmark wordmark--sm">${wm1}</span></div>
        <div class="lockup lockup--light"><span class="wordmark wordmark--sm">${wm1}</span></div>
      </div>
    </div>
    <div class="grid" style="grid-template-columns:1fr 1fr;gap:24px;align-items:stretch">
      <div class="stack"><p class="eyebrow">Construction &amp; clearspace</p><div class="construct"><span class="wmC">${wm1}</span></div></div>
      <div class="stack"><p class="eyebrow">Misuse</p><div class="misuse">${misuse}</div></div>
    </div>
    ${ct.logo && ct.logo.length ? `<div class="stack"><p class="eyebrow">Rules</p><ul class="valuelist" style="gap:0">${ct.logo.map((l) => `<li style="font-family:var(--fb);font-size:15px;font-weight:400">${esc(l)}</li>`).join('')}</ul></div>` : ''}
  </div></section>

  <section class="band sec"><div class="wrap stack-lg">
    ${sec('04', 'color', 'System', 'Color')}
    <div class="colorbar"><div class="cb-primary"><span class="role">Primary 60%</span></div><div class="cb-secondary"><span class="role">Secondary 30%</span></div><div class="cb-accent"><span class="role">Accent 10%</span></div></div>
    <div class="stack"><p class="eyebrow">Brand palette</p><div class="colorway">${namedColors}</div></div>
    <div class="grid" style="grid-template-columns:1fr 1fr;gap:24px;align-items:start">
      <div class="stack"><p class="eyebrow">Neutrals</p><div class="ramp">${ramp}</div></div>
      <div class="stack"><p class="eyebrow">Gradient</p><div class="gradient"></div></div>
    </div>
  </div></section>

  <section class="band sec"><div class="wrap stack-lg">
    ${sec('05', 'type', 'System', 'Typography')}
    <div class="grid" style="grid-template-columns:1fr 1fr;gap:clamp(24px,4vw,56px);align-items:center">
      <div class="stack"><p class="eyebrow">Headline · ${esc(f.heading)}</p><p class="pullquote">“${claim.replace(/\.$/, '')}<span class="mark">.</span>”</p></div>
      <div class="stack"><p class="eyebrow">Body · ${esc(f.body)}</p><p class="body">Set at ${(scale.body) || 16}px with a 1.65 line height and a measure around 66 characters — the sweet spot for sustained reading across every touchpoint.</p></div>
    </div>
    <div>${typeRows}</div>
  </div></section>

  <section class="band sec"><div class="wrap stack-lg">
    ${sec('06', 'icon', 'System', 'Icon & shape')}
    <div class="grid" style="grid-template-columns:1fr 1fr;gap:24px;align-items:center">
      <div class="stack"><p class="eyebrow">Icons · ${(t.space && 'stroke 2 · grid 24') || ''}</p><div class="iconrow">${icons}</div></div>
      <div class="stack"><p class="eyebrow">Corner language</p><div class="shapes"><div class="shape r-sm"></div><div class="shape r-md"></div><div class="shape r-lg"></div><div class="shape r-pill"></div></div></div>
    </div>
  </div></section>

  <section class="band sec"><div class="wrap stack-lg">
    ${sec('07', 'motion', 'System', 'Motion')}
    <div class="motion-track">
      <div class="row2"><span class="meta">fast · ${(t.motion && t.motion.duration_ms && t.motion.duration_ms.fast) || 150}ms</span><div class="dotrun fast"><i></i></div></div>
      <div class="row2"><span class="meta">base · ${(t.motion && t.motion.duration_ms && t.motion.duration_ms.base) || 250}ms</span><div class="dotrun"><i></i></div></div>
      <div class="row2"><span class="meta">slow · ${(t.motion && t.motion.duration_ms && t.motion.duration_ms.slow) || 400}ms</span><div class="dotrun slow"><i></i></div></div>
    </div>
    <p class="caption">Easing <span class="mono">${(t.motion && t.motion.easing) || 'cubic-bezier(.2,0,0,1)'}</span> · purposeful, unobtrusive, consistent.</p>
  </div></section>

  <section class="band sec"><div class="wrap stack-lg">
    ${sec('08', 'grid', 'System', 'Grid & spacing')}
    <div class="gridsys">${Array.from({ length: 12 }).map(() => '<span></span>').join('')}</div>
    <div class="stack"><p class="eyebrow">8-pt spacing scale</p><div class="stack">${((t.space && t.space.scale) || [0, 4, 8, 16, 24, 32, 48, 64]).map((v, i) => `<div class="row"><span class="caption muted" style="width:110px">space-${i} · ${v}px</span><div class="bar" style="width:${Math.max(v, 2)}px"></div></div>`).join('')}</div></div>
  </div></section>

  <section class="band sec"><div class="wrap stack-lg">
    ${sec('09', 'components', 'System', 'Components')}
    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-items:start">
      <div class="card"><div class="card__bar"></div><p class="eyebrow card__eyebrow">${esc(b.branche)}</p><h3 class="h3" style="margin:6px 0 10px">${wm}</h3><p class="body" style="font-size:15px">${claim}</p><div class="row" style="margin-top:18px"><button class="btn btn--primary btn--sm">Primary</button><button class="btn btn--ghost btn--sm">Details</button></div></div>
      <div class="stack">
        <div class="row"><button class="btn btn--primary">Primary</button><button class="btn btn--accent">Accent</button><button class="btn btn--secondary">Secondary</button><button class="btn btn--ghost">Ghost</button></div>
        <div class="row"><span class="badge badge--primary">Primary</span><span class="badge badge--accent">Accent</span><span class="badge badge--soft">Soft</span><span class="badge badge--success">Success</span><span class="badge badge--warning">Warning</span><span class="badge badge--danger">Danger</span></div>
      </div>
    </div>
  </div></section>

  <section class="band sec"><div class="wrap stack-lg">
    ${sec('10', 'apps', 'In the wild', 'Applications')}
    <div class="apps">
      <div><div class="stage"><div class="bizcard"><div class="wm">${wm}</div><div class="meta">${esc(b.branche)}<br>hello@${domain}<br>${domain}</div></div></div><p class="stage__cap">Business card</p></div>
      <div><div class="stage"><div class="letterhead"><div class="lh-top"><span class="lh-wm">${wm}</span><span style="font-family:var(--font-mono);font-size:10px;color:var(--muted)">${domain}</span></div><div class="lh-lines"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div><p class="stage__cap">Letterhead</p></div>
      <div><div class="stage"><div class="post"><div class="img" style="background-image:${imgBg(imgs[1] || hero)}"></div><div class="veil"></div><div class="inner"><span class="tag">${esc(persona[0] || 'new')}</span><div class="headline">${claim}</div></div></div></div><p class="stage__cap">Social post</p></div>
      <div><div class="stage"><div class="poster"><div class="kicker">${esc(b.branche)}</div><div class="stack" style="gap:14px"><div class="rule"></div><div class="big">${claim}</div></div><div class="kicker">${wm} — ${domain}</div></div></div><p class="stage__cap">Poster</p></div>
      <div><div class="stage"><div class="phone"><div class="notch"></div><div class="appbar">${wm}</div><div class="appimg" style="background-image:${imgBg(imgs[2] || hero)}"></div><div class="appcard"><div class="t">${esc(persona[1] || b.name)}</div><div class="d">${esc(b.branche)}</div></div><div class="appbtn">Get started</div></div></div><p class="stage__cap">App screen</p></div>
      <div><div class="stage"><div class="pack"><div class="p-wm">${wm1}</div><div class="p-dot"></div></div></div><p class="stage__cap">Packaging</p></div>
      <div><div class="stage"><div class="signage">${wm1}</div></div><p class="stage__cap">Signage</p></div>
    </div>
  </div></section>

  <section class="band sec"><div class="wrap stack-lg">
    ${sec('11', 'a11y', 'Quality', 'Accessibility')}
    <p class="body">Every color pairing is measured against WCAG. Body text must reach ≥ 4.5:1.</p>
    <div class="pairings">
      ${pair('Body on paper', n['0'] || '#fff', n['900'] || '#111')}
      ${pair('On primary', c.primary || '#123', bestOn(c.primary || '#123'))}
      ${pair('On accent', c.accent || '#5be0b0', bestOn(c.accent || '#5be0b0'))}
      ${pair('On secondary', c.secondary || '#345', bestOn(c.secondary || '#345'))}
    </div>
  </div></section>

  <section class="band sec"><div class="wrap stack-lg">
    ${sec('12', 'assets', 'Resources', 'Assets & downloads')}
    <div class="downloads">
      ${dl('Wordmark', 'SVG', 'SVG', svgHref, `download="${b.slug}-wordmark.svg"`)}
      ${dl('Design tokens', 'tokens.json', 'JSON', tokHref, `download="${b.slug}.tokens.json"`)}
      ${dl('CSS variables', 'tokens.css', 'CSS', cssHref, `download="${b.slug}.css"`)}
      ${dl(esc(f.heading), 'Google Fonts ↗', 'FONT', fontsUrl, 'target="_top" rel="noopener"')}
      ${dl('Full brand kit', 'brand-kit.json', 'KIT', kitHref, `download="${b.slug}-brand-kit.json"`)}
    </div>
    <p class="caption">All downloads are generated live from the brand's design tokens — no server.</p>
    <p class="caption">${wm} — Brand Guidelines · fictional brand · photography via Unsplash · type via Google Fonts.</p>
  </div></section>`;
};
