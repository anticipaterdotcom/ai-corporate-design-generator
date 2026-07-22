export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'accent', 'secondary', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: { label: 'Button', variant: 'primary', size: 'md' },
};

const Template = ({ label, variant, size }) =>
  `<div class="band"><div class="wrap">
    <button class="btn btn--${variant} ${size !== 'md' ? 'btn--' + size : ''}">${label}</button>
  </div></div>`;

export const Primary = Template.bind({});
Primary.args = { label: 'Get started', variant: 'primary', size: 'md' };

export const Accent = Template.bind({});
Accent.args = { label: 'Call to action', variant: 'accent', size: 'md' };

export const Ghost = Template.bind({});
Ghost.args = { label: 'Secondary action', variant: 'ghost', size: 'md' };

export const AllVariants = () => `<section class="band"><div class="wrap stack-lg">
  <div class="stack"><p class="eyebrow">Components</p><h2 class="h1">Button</h2></div>
  <div class="stack">
    <div class="row"><button class="btn btn--primary">Primary</button><button class="btn btn--accent">Accent</button><button class="btn btn--secondary">Secondary</button><button class="btn btn--ghost">Ghost</button></div>
    <div class="row"><button class="btn btn--primary btn--sm">Small</button><button class="btn btn--primary">Medium</button><button class="btn btn--primary btn--lg">Large</button></div>
  </div>
</div></section>`;
