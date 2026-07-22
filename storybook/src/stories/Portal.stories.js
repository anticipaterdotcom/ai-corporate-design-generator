import { BRAND_LIST } from '../brands.js';
import { resolveFamily } from '../theme.js';
import IMAGES from '../images.json';

export default { title: 'Portal/Gallery' };

const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Absolute URL to the Storybook MANAGER (not the story iframe) so a card click
// with target="_top" opens the full UI on the selected brand's guideline —
// works both inside the manager and when viewing the portal iframe directly.
function managerUrl(slug) {
  let base = '';
  try {
    const l = window.location;
    base = l.origin + l.pathname.replace(/iframe\.html.*$/, '');
  } catch (e) { base = './'; }
  return `${base}?path=/story/brand-guideline--guideline&globals=brand:${slug}`;
}

export const AllBrands = () => {
  const cards = BRAND_LIST.map((b) => {
    const t = b.tokens || {};
    const c = t.color || {};
    const img = (IMAGES[b.slug] || [])[0] || '';
    const heading = resolveFamily((t.font || {}).heading) || 'Inter';
    const dots = ['primary', 'secondary', 'accent']
      .map((k) => c[k] ? `<span class="pcard__dot" style="background:${c[k]}"></span>` : '')
      .join('');
    return `<a class="pcard" href="${managerUrl(b.slug)}" target="_top" data-slug="${b.slug}">
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
      <p style="font-size:18px;color:#5B6470;max-width:60ch;margin:0">${BRAND_LIST.length} AI-generated corporate designs. Click a brand to open its full guideline — strategy, logo, colour, type, components, applications & downloads. Fictional brands.</p>
    </div>
    <div class="portal__grid">${cards}</div>
    <p style="max-width:1200px;margin:28px auto 0;color:#8A93A0;font-size:13px">Photography via Unsplash. Fonts via Google Fonts.</p>
  </div>`;
};
