const paths = require('../config/paths');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@utils': paths.appSrc + '/utils',
          '@modules': paths.appSrc + '/modules',
          '@common': paths.appSrc + '/common',
          '@config/production': paths.appSrc + '/config/' + process.env.NODE_ENV + '/config.ts',
        }
      }
    };
  },
}
