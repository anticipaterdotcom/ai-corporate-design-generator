/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  core: { disableTelemetry: true },
  async viteFinal(cfg) {
    // The publish runner has limited RAM. The build's memory peak is the
    // minify / sourcemap phase ("rendering chunks"), which OOM-kills it
    // (exit 137). Trade a slightly larger, unminified bundle for a build that
    // fits in memory — fine for a static Storybook.
    cfg.build = cfg.build || {};
    cfg.build.minify = false;
    cfg.build.sourcemap = false;
    cfg.build.rollupOptions = cfg.build.rollupOptions || {};
    cfg.build.rollupOptions.maxParallelFileOps = 2;
    return cfg;
  },
};

export default config;
