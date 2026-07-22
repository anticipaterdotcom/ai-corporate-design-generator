import { currentBrand } from '../brands.js';

export default { title: 'Foundations/Spacing & Radii' };

export const Scale = (args, context) => {
  const t = currentBrand(context).tokens || {};
  const space = (t.space && t.space.scale) || [];
  const radius = t.radius || {};

  const spacing = space.map((v, i) => `
    <div class="type-row" style="grid-template-columns:120px 1fr;padding:12px 0">
      <div class="meta">space-${i}<br>${v}px</div>
      <div class="row"><div class="bar" style="width:${Math.max(v, 2)}px"></div></div>
    </div>`).join('');

  const radii = Object.entries(radius).map(([k, v]) => `
    <div class="tile" style="text-align:center">
      <div class="radius-demo" style="border-radius:${Math.min(v, 46)}px">${v}px</div>
      <p class="caption" style="margin-top:10px">radius-${k}</p>
    </div>`).join('');

  return `<section class="band"><div class="wrap stack-lg">
    <div class="stack"><p class="eyebrow">Foundations</p><h2 class="h1">Spacing &amp; Radii</h2>
      <p class="body">An 8-point spacing rhythm keeps layouts predictable; the radius set gives the brand its shape language.</p></div>
    <div><h3 class="h3" style="margin-bottom:6px">Spacing scale</h3>${spacing}</div>
    <div class="stack"><h3 class="h3">Corner radii</h3>
      <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(140px,1fr))">${radii}</div></div>
  </div></section>`;
};
