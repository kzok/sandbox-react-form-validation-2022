module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: [],
  rules: {},
  overrides: [
    // TypeScript 向けの設定
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
        ecmaFeatures: { jsx: true },
      },
      plugins: ["@typescript-eslint"],
      rules: {},
    },
  ],
};
