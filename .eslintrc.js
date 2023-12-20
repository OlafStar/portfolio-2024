module.exports = {
  extends: "next",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  ignorePatterns: [".eslintrc.js", ".prettierrc.js"],
  rules: {
    "@next/next/no-img-element": "off",
    camelcase: "off",
    "react/jsx-no-literals": "error",
    "no-eval": "error",
    "import/first": "error",
    "react-hooks/exhaustive-deps": "off",
    "react-hooks/rules-of-hooks": "off",
    "jsx-a11y/alt-text": [0],
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          ["internal", "unknown"],
          "parent",
          ["sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ],
  },
};
