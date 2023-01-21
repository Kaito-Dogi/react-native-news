module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'transform-inline-environment-variables',
      [
        '@babel/plugin-proposal-decorators',
        {
          legacy: true,
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            src: './src',
            assets: './assets',
          },
        },
      ],
    ],
  };
};
