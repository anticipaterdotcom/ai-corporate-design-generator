// Turns a design-token object into CSS custom properties, resolves real web
// fonts, and computes accessible text colors + WCAG contrast — the same rules
// documented in the knowledge base (Farben, Typografie, Barrierefreiheit).

// Commercial fonts -> close, freely loadable Google Fonts equivalents.
export const GOOGLE_FONT_MAP = {
  'Söhne': 'Manrope',
  'Söhne Mono': 'JetBrains Mono',
  'Canela': 'Playfair Display',
  'Clash Display': 'Space Grotesk',
  'Aktiv Grotesk': 'Archivo',
  // weitere kommerzielle Fonts, die die KI wählen kann -> nahe Google-Äquivalente
  'GT Sectra': 'Fraunces',
  'GT Sectra Display': 'Fraunces',
  'GT America': 'Inter',
  'Neue Haas Grotesk': 'Inter',
  'Neue Haas Unica': 'Inter',
  'Helvetica Now': 'Inter',
  'Reckless': 'Playfair Display',
  'Ivar': 'Lora',
  'Tiempos': 'Lora',
  'Recoleta': 'DM Serif Display',
  'Grotesque': 'Space Grotesk',
};

export function resolveFamily(name) {
  if (!name) return null;
  // KI liefert teils ganze CSS-Stacks ("X, 'Y', serif") — nur die erste Familie nehmen
  const first = String(name).split(',')[0].trim().replace(/^['"]|['"]$/g, '');
  return GOOGLE_FONT_MAP[first] || first;
}

// Layout-Archetyp aus der Headline-Schrift ableiten -> pro Marke ein anderes Layout,
// nicht nur andere Farbe.
const ARCHETYPES = {
  editorial: ['Fraunces', 'Canela', 'Cormorant Garamond', 'Playfair Display', 'EB Garamond',
    'Lora', 'DM Serif Display', 'Instrument Serif', 'Source Serif 4', 'Spectral'],
  technical: ['Chakra Petch', 'Space Grotesk', 'Clash Display', 'Unbounded', 'Orbitron', 'Rajdhani', 'Sora'],
  bold: ['Roboto Condensed', 'Archivo', 'Aktiv Grotesk', 'Oswald', 'Anton', 'Bebas Neue', 'Barlow Condensed'],
  friendly: ['Nunito', 'Nunito Sans', 'Quicksand', 'Baloo 2', 'Fredoka', 'Poppins'],
};

export function archetype(tokens = {}) {
  const raw = String((tokens.font || {}).heading || '').split(',')[0].trim().replace(/^['"]|['"]$/g, '');
  const resolved = resolveFamily(raw); // e.g. "GT Sectra Display" -> "Fraunces"
  for (const [k, list] of Object.entries(ARCHETYPES)) {
    if (list.includes(raw) || list.includes(resolved)) return k;
  }
  return 'corporate';
}

export function googleFontsHref(families) {
  const uniq = [...new Set(families.filter(Boolean))];
  if (!uniq.length) return null;
  const q = uniq
    .map((f) => 'family=' + encodeURIComponent(f).replace(/%20/g, '+') + ':wght@400;500;700')
    .join('&');
  return 'https://fonts.googleapis.com/css2?' + q + '&display=swap';
}

// ---- WCAG contrast (per the Barrierefreiheit note) ------------------------
function _chan(c) {
  c /= 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}
function _lum(hex) {
  const n = String(hex).replace('#', '');
  if (n.length < 6) return 0;
  const r = parseInt(n.slice(0, 2), 16), g = parseInt(n.slice(2, 4), 16), b = parseInt(n.slice(4, 6), 16);
  return 0.2126 * _chan(r) + 0.7152 * _chan(g) + 0.0722 * _chan(b);
}
export function contrast(h1, h2) {
  const L1 = _lum(h1), L2 = _lum(h2);
  const hi = Math.max(L1, L2), lo = Math.min(L1, L2);
  return (hi + 0.05) / (lo + 0.05);
}
export function bestOn(bg) {
  return contrast(bg, '#FFFFFF') >= contrast(bg, '#111111') ? '#FFFFFF' : '#111111';
}
export function wcagRating(cr) {
  if (cr >= 7) return 'AAA';
  if (cr >= 4.5) return 'AA';
  if (cr >= 3) return 'AA large';
  return 'fail';
}

// ---- Tokens -> CSS variables ---------------------------------------------
export function tokensToVars(t = {}) {
  const v = {};
  const c = t.color || {};
  if (c.primary) v['--color-primary'] = c.primary;
  if (c.secondary) v['--color-secondary'] = c.secondary;
  if (c.accent) v['--color-accent'] = c.accent;

  // auto-legible text colors on brand surfaces
  if (c.primary) v['--on-primary'] = bestOn(c.primary);
  if (c.secondary) v['--on-secondary'] = bestOn(c.secondary);
  if (c.accent) v['--on-accent'] = bestOn(c.accent);

  const n = c.neutral || {};
  for (const k of Object.keys(n)) v[`--color-neutral-${k}`] = n[k];

  // paper = canvas background (neutral 0), ink = text (neutral 900). This is
  // already correct for both light brands (0=white) and dark-first brands
  // (0=near-black, 900=near-white) — no swap needed. Divider derives from ink.
  v['--paper'] = n['0'] || '#FFFFFF';
  v['--ink'] = n['900'] || '#111111';
  v['--muted'] = n['500'] || '#6B7480';

  const s = c.semantic || {};
  for (const k of Object.keys(s)) v[`--color-${k}`] = s[k];

  const f = t.font || {};
  if (f.heading) v['--font-heading'] = `"${resolveFamily(f.heading)}"`;
  if (f.body) v['--font-body'] = `"${resolveFamily(f.body)}"`;
  if (f.mono) v['--font-mono'] = `"${resolveFamily(f.mono)}"`;
  v['--font-fallback'] = f.fallback || 'system-ui, -apple-system, Segoe UI, sans-serif';

  const sc = f.scale || {};
  for (const k of Object.keys(sc)) v[`--font-${k}`] = `${sc[k]}px`;
  const w = f.weight || {};
  for (const k of Object.keys(w)) v[`--weight-${k}`] = `${w[k]}`;

  const sp = t.space || {};
  if (sp.unit != null) v['--space-unit'] = `${sp.unit}px`;
  (sp.scale || []).forEach((val, i) => { v[`--space-${i}`] = `${val}px`; });

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

// Inject the Google Fonts <link> for a brand's typefaces (deduped).
export function ensureFonts(tokens) {
  const f = (tokens && tokens.font) || {};
  const fams = [resolveFamily(f.heading), resolveFamily(f.body), resolveFamily(f.mono)].filter(Boolean);
  const href = googleFontsHref(fams);
  if (href) {
    const sel = 'link[data-gf="' + href + '"]';
    if (!document.querySelector(sel)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.setAttribute('data-gf', href);
      document.head.appendChild(link);
    }
  }
  // Proactively trigger the woff2 downloads so the swap happens fast.
  if (typeof document !== 'undefined' && document.fonts && document.fonts.load) {
    fams.forEach((fam) => {
      try { document.fonts.load(`700 32px "${fam}"`); document.fonts.load(`400 16px "${fam}"`); } catch (e) { /* noop */ }
    });
  }
}
