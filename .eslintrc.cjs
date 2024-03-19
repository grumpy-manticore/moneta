module.exports = {
  extends: [
    'plugin:astro/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
        'astro/astro': true,
        es2020: true,
      },
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        sourceType: "module",
      },
      plugins: ["astro"],
      rules: {
        "astro/no-conflict-set-directives": "error",
        "astro/no-unused-define-vars-in-style": "error",
      },
    }
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};
