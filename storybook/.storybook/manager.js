import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'AI Corporate Design Generator',
    brandUrl: 'https://github.com/anticipaterdotcom/ai-corporate-design-generator',
    colorPrimary: '#111417',
    colorSecondary: '#3B5BDB',
    appBg: '#F6F7F9',
    appContentBg: '#FFFFFF',
    appPreviewBg: '#FFFFFF',
    appBorderColor: '#E7E9EE',
    appBorderRadius: 10,
    barBg: '#FFFFFF',
    textColor: '#14181F',
    fontBase: '"Inter", system-ui, -apple-system, Segoe UI, sans-serif',
    fontCode: 'ui-monospace, SFMono-Regular, monospace',
  }),
});
