import { currentBrand } from '../brands.js';
import { bestOn } from '../theme.js';
import IMAGES from '../images.json';
import CONTENT from '../content.json';

export default { title: 'Brand/Overview' };

const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const sectionHead = (kicker, title) =>
  `<div class="stack"><p class="eyebrow">${esc(kicker)}</p><h2 class="h1">${esc(title)}</h2></div>`;

export const Overview = (args, context) => {
  const b = currentBrand(context);
  const t = b.tokens || {};
  const c = t.color || {};
  const f = t.font || {};
  const ct = CONTENT[b.slug] || {};
  const persona = b.persoenlichkeit || [];
  const imgs = IMAGES[b.slug] || [];
  const hero = imgs[0];
  const claim = esc(b.claim) || 'Design that carries the brand.';
  const domain = b.slug.replace(/-/g, '') + '.com';
  const values = (ct.werte || '').replace(/\.$/, '').split(/,\s*/).filter(Boolean);

  const heroBg = hero
    ? `background-image: linear-gradient(100deg, var(--color-primary) 0%, var(--color-primary) 30%, color-mix(in srgb, var(--color-primary) 52%, transparent) 64%, color-mix(in srgb, var(--color-primary) 8%, transparent) 100%), url('${hero}'); background-size: cover; background-position: center right;`
    : '';

  // ---- Color: named colorway (real names from the brand) ----
  const cwCards = (ct.farbwelt || []).map((col) => {
    const on = bestOn(col.hex);
    return `<div class="cw">
      <div class="chip" style="background:${col.hex};color:${on}"><span class="role">${esc(col.rolle)}</span></div>
      <div class="meta"><div class="nm">${esc(col.name)}</div><div class="hx">${esc(col.hex)}</div></div>
    </div>`;
  }).join('');

  // ---- Logo misuse tiles ----
  const misuse = [
    ['stretch', 'Nicht verzerren'], ['recolor', 'Nicht umfärben'],
    ['rot', 'Nicht drehen'], ['shadow', 'Keine Effekte'],
  ].map(([cls, cap]) => `<div class="m ${cls}"><span class="x">✕</span><span class="wm3">${esc(b.name.split(' ')[0])}</span><div class="cap">${cap}</div></div>`).join('');

  const listItems = (arr) => (arr || []).map((x) => `<li>${esc(x)}</li>`).join('');

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

  <section class="band"><div class="wrap grid" style="grid-template-columns:1.3fr 1fr;gap:clamp(24px,5vw,72px);align-items:start">
    <div class="stack-lg">
      <div class="stack"><p class="eyebrow">Essence</p>
        <p class="statement">${esc(ct.mission) || esc(b.positioning) || claim}</p></div>
      <div>
        ${ct.zielgruppe ? `<div class="factline"><div class="k">Für</div><div class="v">${esc(ct.zielgruppe)}</div></div>` : ''}
        <div class="factline"><div class="k">Persönlichkeit</div><div class="v">${persona.map(esc).join(' · ') || '—'}</div></div>
        <div class="factline"><div class="k">Ansprache</div><div class="v">${b.anrede === 'Sie' ? 'formal (Sie)' : 'informal (du)'}</div></div>
      </div>
    </div>
    <div class="stack">
      <p class="eyebrow">Werte</p>
      <ul class="valuelist">${values.map((v) => `<li>${esc(v)}</li>`).join('') || '<li>—</li>'}</ul>
    </div>
  </div></section>

  <section class="band"><div class="wrap stack-lg">
    ${sectionHead('Identity', 'Logo & wordmark')}
    <div class="grid" style="grid-template-columns:1.2fr 1fr;gap:clamp(20px,3vw,40px);align-items:stretch">
      <div class="lockup"><span class="wordmark">${esc(b.name)}<span class="dot">.</span></span></div>
      <div class="stack">
        <p class="eyebrow">Clearspace</p>
        <div class="clearspace"><div class="box"><span class="wm2">${esc(b.name.split(' ')[0])}</span></div></div>
        <p class="caption">${esc((ct.logo && ct.logo.find((l) => /schutzraum|clearspace|mindest/i.test(l))) || 'Schutzraum ringsum freihalten; Mindestgröße beachten.')}</p>
      </div>
    </div>
    ${ct.logo && ct.logo.length ? `<div class="grid" style="grid-template-columns:1fr 1fr;gap:24px;align-items:start">
      <div class="stack"><p class="eyebrow">Regeln</p><ul class="valuelist" style="gap:0">${ct.logo.map((l) => `<li style="font-family:var(--fb);font-size:15px;font-weight:400">${esc(l)}</li>`).join('')}</ul></div>
      <div class="stack"><p class="eyebrow">Fehlanwendungen</p><div class="misuse">${misuse}</div></div>
    </div>` : ''}
  </div></section>

  <section class="band"><div class="wrap stack-lg">
    ${sectionHead('Color', 'Palette')}
    <div class="colorbar">
      <div class="cb-primary"><span class="role">Primary</span></div>
      <div class="cb-secondary"><span class="role">Secondary</span></div>
      <div class="cb-accent"><span class="role">Accent</span></div>
    </div>
    <div class="colorway">${cwCards || (t.color ? `` : '')}</div>
  </div></section>

  <section class="band"><div class="wrap grid" style="grid-template-columns:1fr 1fr;gap:clamp(24px,5vw,64px);align-items:center">
    <div class="stack">
      <p class="eyebrow">Type &amp; voice</p>
      <p class="pullquote">“${claim.replace(/\.$/, '')}<span class="mark">.</span>”</p>
    </div>
    <div class="stack">
      <p class="caption">Headline · <strong>${esc(f.heading)}</strong> — Body · <strong>${esc(f.body)}</strong></p>
      <div class="specimen" style="font-size:clamp(40px,6vw,72px)">Aa</div>
      <p class="body">Set in ${esc(f.body)} at ${(f.scale && f.scale.body) || 16}px, 1.65 line height — for effortless reading across every touchpoint.</p>
    </div>
  </div></section>

  ${(ct.do && ct.do.length) || (ct.dont && ct.dont.length) ? `<section class="band"><div class="wrap stack-lg">
    ${sectionHead('Voice & tone', 'How the brand speaks')}
    ${ct.tonalitaet ? `<p class="statement" style="font-size:clamp(22px,3vw,36px);max-width:30ch">${esc(ct.tonalitaet)}</p>` : ''}
    <div class="dodont">
      <div class="dd dd--do"><h4>Do</h4><ul>${listItems(ct.do)}</ul></div>
      <div class="dd dd--dont"><h4>Don’t</h4><ul>${listItems(ct.dont)}</ul></div>
    </div>
  </div></section>` : ''}

  ${imgs.length > 1 ? `<section class="band"><div class="wrap stack">
    ${sectionHead('Photography · Bildsprache', 'Image world')}
    ${ct.bildstil ? `<p class="body" style="max-width:70ch">${esc(ct.bildstil)}</p>` : ''}
    <div class="bildwelt">
      ${imgs.slice(1, 5).map((u, i) => `<img loading="lazy" class="${i === 0 ? 'tall' : ''}" src="${u}" alt="${esc(b.name)} mood ${i + 1}">`).join('')}
    </div>
    <p class="caption">Photography via Unsplash — placeholder mood for this fictional brand.</p>
  </div></section>` : ''}

  <section class="band"><div class="wrap stack-lg">
    ${sectionHead('Applications', 'The brand, in the wild')}
    <div class="apps">
      <div><div class="stage"><div class="bizcard"><div class="wm">${esc(b.name)}</div><div class="meta">${esc(b.branche)}<br>hello@${domain}<br>${domain}</div></div></div><p class="stage__cap">Business card</p></div>
      <div><div class="stage"><div class="post"><div class="img" style="background-image:url('${imgs[1] || hero || ''}')"></div><div class="veil"></div><div class="inner"><span class="tag">${esc(persona[0] || 'new')}</span><div class="headline">${claim}</div></div></div></div><p class="stage__cap">Social post</p></div>
      <div><div class="stage"><div class="poster"><div class="kicker">${esc(b.branche)}</div><div class="stack" style="gap:14px"><div class="rule"></div><div class="big">${claim}</div></div><div class="kicker">${esc(b.name)} — ${domain}</div></div></div><p class="stage__cap">Poster</p></div>
      <div><div class="stage"><div class="phone"><div class="notch"></div><div class="appbar">${esc(b.name)}</div><div class="appimg" style="background-image:url('${imgs[2] || hero || ''}')"></div><div class="appcard"><div class="t">${esc(persona[1] || b.name)}</div><div class="d">${esc(b.branche)}</div></div><div class="appbtn">Get started</div></div></div><p class="stage__cap">App screen</p></div>
    </div>
  </div></section>

  <section class="band"><div class="wrap stack-lg">
    ${sectionHead('Components', 'Interface kit')}
    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-items:start">
      <div class="card"><div class="card__bar"></div><p class="eyebrow card__eyebrow">${esc(b.branche)}</p><h3 class="h3" style="margin:6px 0 10px">${esc(b.name)}</h3><p class="body" style="font-size:15px">${claim}</p><div class="row" style="margin-top:18px"><button class="btn btn--primary btn--sm">Primary</button><button class="btn btn--ghost btn--sm">Details</button></div></div>
      <div class="stack">
        <div class="row"><button class="btn btn--primary">Primary</button><button class="btn btn--accent">Accent</button><button class="btn btn--ghost">Ghost</button></div>
        <div class="row"><span class="badge badge--primary">Primary</span><span class="badge badge--accent">Accent</span><span class="badge badge--soft">Soft</span><span class="badge badge--success">Success</span><span class="badge badge--warning">Warning</span><span class="badge badge--danger">Danger</span></div>
        <p class="caption">Switch brand in the toolbar → every section, color, typeface and mockup re-themes live.</p>
      </div>
    </div>
  </div></section>`;
};
