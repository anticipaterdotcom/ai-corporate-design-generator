export default {
  title: 'Komponenten/Badge',
};

export const AlleBadges = () => `
  <div class="row" style="gap:var(--space-2)">
    <span class="badge badge--primary">Primär</span>
    <span class="badge badge--accent">Akzent</span>
    <span class="badge badge--success">Erfolg</span>
    <span class="badge badge--warning">Warnung</span>
    <span class="badge badge--danger">Fehler</span>
    <span class="badge badge--info">Info</span>
  </div>`;
