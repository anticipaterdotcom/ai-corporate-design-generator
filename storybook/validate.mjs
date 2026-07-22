// Deploy gate: brand data is untrusted (anyone can open a PR). This runs BEFORE
// the Storybook build in the publish workflow. If any brand payload is malformed
// or hostile, it exits non-zero and the deploy is aborted — so poisoned data can
// never reach the live site. This is defense-in-depth on top of the renderer,
// which already escapes/validates every value it injects into the DOM.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const SRC = join(here, 'src');
const TOKENS = join(here, '..', 'tokens');

const HEX = /^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
const IMG = /^https:\/\/(images|plus)\.unsplash\.com\/[^"'()\s<>]*$/;
// Textual fields are HTML-escaped by the renderer, but we still reject obvious
// injection payloads early so a hostile PR is loud, not silent.
const NASTY = /<\s*script|<\s*\/?\s*(img|svg|iframe|style)\b|javascript:|data:text\/html|on\w+\s*=/i;

const errors = [];
const fail = (where, msg) => errors.push(`${where}: ${msg}`);
const readJSON = (p) => JSON.parse(readFileSync(p, 'utf8'));

// walk every string in a nested object, checking text for injection payloads
function scanText(where, val) {
  if (typeof val === 'string') { if (NASTY.test(val)) fail(where, `suspicious text: ${val.slice(0, 60)}`); }
  else if (Array.isArray(val)) val.forEach((v, i) => scanText(`${where}[${i}]`, v));
  else if (val && typeof val === 'object') for (const k of Object.keys(val)) scanText(`${where}.${k}`, val[k]);
}

// 1) tokens/*.tokens.json — every color hex must be a literal hex
if (existsSync(TOKENS)) {
  for (const file of readdirSync(TOKENS).filter((f) => f.endsWith('.tokens.json'))) {
    let t;
    try { t = readJSON(join(TOKENS, file)); } catch (e) { fail(file, `invalid JSON: ${e.message}`); continue; }
    const c = t.color || {};
    for (const key of ['primary', 'secondary', 'accent']) {
      if (c[key] && !HEX.test(c[key])) fail(file, `color.${key} not a hex: ${c[key]}`);
    }
    for (const [k, v] of Object.entries(c.neutral || {})) {
      if (!HEX.test(v)) fail(file, `color.neutral.${k} not a hex: ${v}`);
    }
    for (const [k, v] of Object.entries(c.semantic || {})) {
      if (!HEX.test(v)) fail(file, `color.semantic.${k} not a hex: ${v}`);
    }
  }
}

// 2) content.json — named palette hexes must be literal hex; scan all text
if (existsSync(join(SRC, 'content.json'))) {
  let content;
  try { content = readJSON(join(SRC, 'content.json')); } catch (e) { fail('content.json', `invalid JSON: ${e.message}`); }
  for (const [slug, ct] of Object.entries(content || {})) {
    for (const col of (ct.farbwelt || [])) {
      if (col.hex && !HEX.test(col.hex)) fail(`content.${slug}`, `farbwelt hex not a hex: ${col.hex}`);
    }
    scanText(`content.${slug}`, ct);
  }
}

// 3) images.json — every URL must be an https Unsplash URL, nothing else
if (existsSync(join(SRC, 'images.json'))) {
  let images;
  try { images = readJSON(join(SRC, 'images.json')); } catch (e) { fail('images.json', `invalid JSON: ${e.message}`); }
  for (const [slug, urls] of Object.entries(images || {})) {
    (urls || []).forEach((u, i) => { if (!IMG.test(u)) fail(`images.${slug}[${i}]`, `not an allowed image URL: ${u}`); });
  }
}

if (errors.length) {
  console.error(`\n✗ Brand data validation FAILED (${errors.length}) — deploy aborted:\n`);
  for (const e of errors) console.error('  • ' + e);
  console.error('\nHostile or malformed brand data must be fixed before it can go live.\n');
  process.exit(1);
}
console.log('✓ Brand data validation passed — all colors, URLs and text are safe.');
