module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "arrow-body-style": "off",
    "no-console": "off",
    "linebreak-style": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/no-mutable-exports": "off",
    "import/extensions": "off",
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],
  },
  "ignorePatterns": ["*.d.ts"],
  "root": true,
}
