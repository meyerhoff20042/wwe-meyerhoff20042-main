module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["eslint-comments"],
  rules: {
    "eslint-comments/require-description": "error",
    "import/prefer-default-export": "off",
    "no-console": [
      "warn",
      {
        allow: ["error", "info", "table", "warn"],
      },
    ],
    "no-param-reassign": "warn",
  },
};
