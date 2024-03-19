module.exports = {
  '*.{js,jsx,ts,tsx,astro}': [
    'eslint ./src/**/*{.astro,.ts}',
    'prettier --check ./src/**/*',
  ],
};
