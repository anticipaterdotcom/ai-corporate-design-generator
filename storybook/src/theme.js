// Wandelt ein Design-Token-Objekt (siehe vault/20-Bausteine/Design-Tokens.md)
// in CSS Custom Properties um und wendet sie auf ein Element an.

export function tokensToVars(t = {}) {
  const v = {};
  const c = t.color || {};
  if (c.primary) v['--color-primary'] = c.primary;
  if (c.secondary) v['--color-secondary'] = c.secondary;
  if (c.accent) v['--color-accent'] = c.accent;

  const n = c.neutral || {};
  for (const k of Object.keys(n)) v[`--color-neutral-${k}`] = n[k];

  const s = c.semantic || {};
  for (const k of Object.keys(s)) v[`--color-${k}`] = s[k];

  const f = t.font || {};
  if (f.heading) v['--font-heading'] = f.heading;
  if (f.body) v['--font-body'] = f.body;
  if (f.mono) v['--font-mono'] = f.mono;
  v['--font-fallback'] = f.fallback || 'system-ui, -apple-system, Segoe UI, sans-serif';

  const sc = f.scale || {};
  for (const k of Object.keys(sc)) v[`--font-${k}`] = `${sc[k]}px`;

  const w = f.weight || {};
  for (const k of Object.keys(w)) v[`--weight-${k}`] = `${w[k]}`;

  const sp = t.space || {};
  if (sp.unit != null) v['--space-unit'] = `${sp.unit}px`;
  (sp.scale || []).forEach((val, i) => {
    v[`--space-${i}`] = `${val}px`;
  });

  const r = t.radius || {};
  for (const k of Object.keys(r)) v[`--radius-${k}`] = `${r[k]}px`;

  const m = t.motion || {};
  const d = m.duration_ms || {};
  for (const k of Object.keys(d)) v[`--motion-${k}`] = `${d[k]}ms`;
  if (m.easing) v['--motion-easing'] = m.easing;

  const e = t.elevation || {};
  for (const k of Object.keys(e)) v[`--elevation-${k}`] = e[k];

  return v;
}

export function applyVars(el, vars) {
  for (const [k, val] of Object.entries(vars)) {
    if (val != null) el.style.setProperty(k, val);
  }
}
