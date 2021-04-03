module.exports = {
  env: {
    "node": true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "project": "./tsconfig.json",
    "tsconfigRootDir": "."
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "tabWidth": 2,
        "trailingComma": "es5"
      }
    ]
  }
};