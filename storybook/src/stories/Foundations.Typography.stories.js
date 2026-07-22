import { currentBrand } from '../brands.js';
import { resolveFamily } from '../theme.js';

export default { title: 'Foundations/Typography' };

const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export const Specimen = (args, context) => {
  const b = currentBrand(context);
  const f = (b.tokens || {}).font || {};
  const scale = f.scale || {};
  const order = ['h1', 'h2', 'h3', 'body', 'caption'];
  const keys = Object.keys(scale).sort((a, c) => (scale[c] || 0) - (scale[a] || 0));
  const rows = (order.filter((k) => scale[k]).concat(keys.filter((k) => !order.includes(k))))
    .map((k) => {
      const px = scale[k];
      const isHead = px >= (scale.h3 || 22);
      return `<div class="type-row">
        <div class="meta">${k}<br>${px}px</div>
        <div style="font-family:${isHead ? 'var(--font-heading),var(--font-fallback)' : 'var(--font-body),var(--font-fallback)'};font-size:${px}px;line-height:1.1;font-weight:${isHead ? 700 : 400}">Design that carries the brand</div>
      </div>`;
    }).join('');

  const note = (name) => name && resolveFamily(name) !== name
    ? ` <span class="mono caption">(rendered with ${esc(resolveFamily(name))})</span>` : '';

  return `<section class="band"><div class="wrap stack-lg">
    <div class="stack"><p class="eyebrow">Foundations</p><h2 class="h1">Typography</h2></div>
    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr))">
      <div class="tile"><p class="caption">Headline</p><p class="specimen" style="font-size:64px;margin-top:6px">Ag</p><p class="caption" style="margin-top:8px"><strong>${esc(f.heading)}</strong>${note(f.heading)}</p></div>
      <div class="tile"><p class="caption">Body</p><p style="font-family:var(--font-body),var(--font-fallback);font-size:48px;margin-top:6px">Ag</p><p class="caption" style="margin-top:8px"><strong>${esc(f.body)}</strong>${note(f.body)}</p></div>
      <div class="tile"><p class="caption">Mono</p><p class="mono" style="font-size:44px;margin-top:6px">Ag</p><p class="caption" style="margin-top:8px"><strong>${esc(f.mono)}</strong>${note(f.mono)}</p></div>
    </div>
    <div><h3 class="h3" style="margin-bottom:8px">Scale</h3>${rows}</div>
    <div class="stack"><h3 class="h3">Paragraph</h3>
      <p class="body">Good typography is invisible: it lets the message lead. This paragraph is set in the body face at ${(scale.body) || 16}px with a 1.65 line height and a measure capped around 66 characters — the sweet spot for sustained reading. Weights, sizes and rhythm all come straight from the brand's design tokens.</p>
    </div>
  </div></section>`;
};
