import { currentBrand } from '../brands.js';

export default {
  title: 'Foundations/Spacing & Radien',
};

export const SpacingUndRadien = (args, context) => {
  const t = currentBrand(context).tokens || {};
  const space = (t.space && t.space.scale) || [];
  const radius = t.radius || {};

  const spacingRows = space.map((v, i) => `
    <div class="row">
      <span class="t-caption muted" style="width:120px">--space-${i} · ${v}px</span>
      <div class="spacing-bar" style="width:${Math.max(v, 2)}px"></div>
    </div>`).join('');

  const radiusItems = Object.entries(radius).map(([k, v]) => `
    <div style="text-align:center">
      <div class="radius-demo" style="border-radius:${v}px">${v}px</div>
      <div class="t-caption muted">${k}</div>
    </div>`).join('');

  return `<div class="stack">
    <h1 class="t-h1">Spacing &amp; Radien</h1>
    <h3 class="t-h3">Spacing-Skala</h3>
    <div class="stack">${spacingRows}</div>
    <h3 class="t-h3">Radien</h3>
    <div class="row" style="gap:var(--space-4)">${radiusItems}</div>
  </div>`;
};
