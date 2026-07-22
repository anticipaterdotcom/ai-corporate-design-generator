export default {
  title: 'Komponenten/Button',
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary', 'accent', 'ghost'] },
  },
  args: { label: 'Button', variant: 'primary' },
};

const Template = ({ label, variant }) =>
  `<button class="btn btn--${variant}">${label}</button>`;

export const Primary = Template.bind({});
Primary.args = { label: 'Primär', variant: 'primary' };

export const Secondary = Template.bind({});
Secondary.args = { label: 'Sekundär', variant: 'secondary' };

export const Accent = Template.bind({});
Accent.args = { label: 'Akzent / CTA', variant: 'accent' };

export const Ghost = Template.bind({});
Ghost.args = { label: 'Ghost', variant: 'ghost' };

export const AlleVarianten = () => `
  <div class="row" style="gap:var(--space-2)">
    <button class="btn btn--primary">Primär</button>
    <button class="btn btn--secondary">Sekundär</button>
    <button class="btn btn--accent">Akzent</button>
    <button class="btn btn--ghost">Ghost</button>
  </div>`;
