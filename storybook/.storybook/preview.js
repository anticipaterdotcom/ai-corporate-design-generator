import '../src/base.css';
import { tokensToVars, applyVars } from '../src/theme.js';
import { BRAND_LIST, currentBrand } from '../src/brands.js';

// Marken-Umschalter in der Storybook-Toolbar.
export const globalTypes = {
  brand: {
    name: 'Marke',
    description: 'Markentheme umschalten',
    defaultValue: BRAND_LIST[0] && BRAND_LIST[0].slug,
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: BRAND_LIST.map((b) => ({ value: b.slug, title: b.name })),
    },
  },
};

// Jede Story wird in eine Canvas gehüllt, deren CSS-Variablen aus den Tokens
// der gewählten Marke stammen -> Umschalten färbt die ganze Galerie um.
const withBrand = (StoryFn, context) => {
  const brand = currentBrand(context);
  const wrapper = document.createElement('div');
  wrapper.className = 'acdg-canvas';
  wrapper.setAttribute('data-brand', brand ? brand.slug : 'none');
  if (brand) applyVars(wrapper, tokensToVars(brand.tokens));

  const story = StoryFn();
  if (typeof story === 'string') wrapper.innerHTML = story;
  else if (story instanceof Node) wrapper.appendChild(story);
  return wrapper;
};

export const decorators = [withBrand];

export const parameters = {
  layout: 'fullscreen',
  controls: { hideNoControlsWarning: true },
  options: {
    storySort: {
      order: ['Marke', 'Foundations', 'Komponenten'],
    },
  },
};
