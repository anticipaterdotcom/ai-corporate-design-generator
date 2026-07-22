import { currentBrand } from '../brands.js';

export default {
  title: 'Komponenten/Card',
};

export const Standard = (args, context) => {
  const b = currentBrand(context);
  return `
    <div class="card stack">
      <div class="card__accent"></div>
      <h3 class="t-h3">${b.name}</h3>
      <p class="t-body">${b.claim || 'Eine themenbare Karte, die Farben, Radien und Schatten aus den Marken-Tokens bezieht.'}</p>
      <div class="row">
        <span class="badge badge--accent">Neu</span>
        <span class="t-caption muted">${b.branche || ''}</span>
      </div>
      <div class="row">
        <button class="btn btn--primary">Aktion</button>
        <button class="btn btn--ghost">Details</button>
      </div>
    </div>`;
};
