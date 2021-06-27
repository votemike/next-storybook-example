module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    config.output.publicPath = "/styleguide/";
    return config;
  },
  managerWebpack: async (config) => {
    config.output.publicPath = "/styleguide/";
    return config;
  },
}
