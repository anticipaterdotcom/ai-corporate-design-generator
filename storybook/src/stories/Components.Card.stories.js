import { currentBrand } from '../brands.js';

export default { title: 'Components/Card' };

const esc = (s) => String(s || '').replace(/[&<>"]/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export const Default = (args, context) => {
  const b = currentBrand(context);
  return `<section class="band"><div class="wrap">
    <div class="card">
      <div class="card__bar"></div>
      <p class="eyebrow card__eyebrow">${esc(b.branche)}</p>
      <h3 class="h3" style="margin:8px 0 12px">${esc(b.name)}</h3>
      <p class="body" style="font-size:15px">${esc(b.claim) || 'A themeable card that draws its colors, radii, shadow and type from the brand tokens.'}</p>
      <div class="row" style="margin-top:16px">
        <span class="badge badge--soft">Featured</span>
        <span class="badge badge--accent">New</span>
      </div>
      <div class="row" style="margin-top:20px">
        <button class="btn btn--primary btn--sm">Action</button>
        <button class="btn btn--ghost btn--sm">Details</button>
      </div>
    </div>
  </div></section>`;
};
