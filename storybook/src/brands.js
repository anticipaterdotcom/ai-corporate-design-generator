// Lädt alle generierten Marken-Token-Dateien (storybook/src/brands/*.tokens.json)
// zur Build-Zeit über Vite und stellt sie als Nachschlagewerk bereit.
const modules = import.meta.glob('./brands/*.tokens.json', { eager: true });

export const BRANDS = {};
for (const path in modules) {
  const data = modules[path].default || modules[path];
  if (data && data.slug) BRANDS[data.slug] = data;
}

export const BRAND_LIST = Object.values(BRANDS).sort((a, b) =>
  a.name.localeCompare(b.name, 'de'),
);

/** Aktuell in der Storybook-Toolbar gewählte Marke (Fallback: erste). */
export function currentBrand(context) {
  const slug = context && context.globals && context.globals.brand;
  return BRANDS[slug] || BRAND_LIST[0];
}
