/** @type { import('@storybook/svelte-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../content/**/*.stories.@(js|jsx|ts|tsx|svelte)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/svelte-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
