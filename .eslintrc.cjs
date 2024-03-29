module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    // "plugin:@typescript-eslint/strict-type-checked",
    // 'plugin:@typescript-eslint/stylistic-type-checked'
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint"],
  root: true,
};
