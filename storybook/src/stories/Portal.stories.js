import { BRAND_LIST } from '../brands.js';
import { resolveFamily } from '../theme.js';
import IMAGES from '../images.json';

export default { title: 'Portal/Gallery' };

const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export const AllBrands = () => {
  const cards = BRAND_LIST.map((b) => {
    const t = b.tokens || {};
    const c = t.color || {};
    const img = (IMAGES[b.slug] || [])[0] || '';
    const heading = resolveFamily((t.font || {}).heading) || 'Inter';
    const dots = ['primary', 'secondary', 'accent']
      .map((k) => c[k] ? `<span class="pcard__dot" style="background:${c[k]}"></span>` : '')
      .join('');
    // Link switches the brand global and opens its overview (works in the deployed manager).
    const href = `?path=/story/brand-guideline--guideline&globals=brand:${b.slug}`;
    return `<a class="pcard" href="${href}" target="_top">
      <div class="pcard__img" style="background-image:url('${img}')"></div>
      <div class="pcard__body">
        <div class="pcard__eyebrow">${esc(b.branche)}</div>
        <div class="pcard__name" style="font-family:'${heading}', system-ui, sans-serif">${esc(b.name)}</div>
        <p class="pcard__claim">${esc(b.claim)}</p>
        <div class="pcard__dots">${dots}</div>
      </div>
    </a>`;
  }).join('');

  return `<div class="portal">
    <div class="portal__head">
      <div class="pcard__eyebrow">AI Corporate Design Generator</div>
      <h1 style="font-size:clamp(30px,5vw,52px);line-height:1.05;letter-spacing:-.02em;margin:8px 0 10px;font-weight:800">Brand&nbsp;Portal</h1>
      <p style="font-size:18px;color:#5B6470;max-width:60ch;margin:0">${BRAND_LIST.length} AI-generated corporate designs. Open one to see its full guideline — colors, typography, components and image world — all driven by design tokens. Fictional brands.</p>
    </div>
    <div class="portal__grid">${cards}</div>
    <p style="max-width:1200px;margin:28px auto 0;color:#8A93A0;font-size:13px">Photography via Unsplash. Fonts via Google Fonts.</p>
  </div>`;
};
