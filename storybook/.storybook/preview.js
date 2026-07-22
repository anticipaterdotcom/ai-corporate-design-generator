import '../src/base.css';
import { tokensToVars, applyVars, ensureFonts } from '../src/theme.js';
import { BRAND_LIST, currentBrand } from '../src/brands.js';

// Preload fonts for every brand so switching is instant.
BRAND_LIST.forEach((b) => ensureFonts(b.tokens));

// Brand switcher in the Storybook toolbar.
export const globalTypes = {
  brand: {
    name: 'Brand',
    description: 'Switch brand theme',
    defaultValue: BRAND_LIST[0] && BRAND_LIST[0].slug,
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: BRAND_LIST.map((b) => ({ value: b.slug, title: b.name })),
    },
  },
};

// Each story is wrapped in a canvas whose CSS variables come from the selected
// brand's tokens — switching re-themes the whole gallery, with the real fonts.
const withBrand = (StoryFn, context) => {
  const brand = currentBrand(context);
  const wrapper = document.createElement('div');
  wrapper.className = 'acdg-canvas';
  wrapper.setAttribute('data-brand', brand ? brand.slug : 'none');
  if (brand) {
    ensureFonts(brand.tokens);
    applyVars(wrapper, tokensToVars(brand.tokens));
  }

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
    storySort: { order: ['Portal', 'Brand', 'Foundations', 'Components'] },
  },
};
