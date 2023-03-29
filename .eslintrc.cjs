module.exports = {
  "env": {
    "browser": true, "es2021": true
  },
  "extends": ["airbnb", "airbnb-typescript", "airbnb/hooks", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest", "sourceType": "module", "project": "./tsconfig.json"
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "react/react-in-jsx-scope": 0,
    "import/no-extraneous-dependencies": "off",
    "react/prefer-stateless-function": "off",
    "@typescript-eslint/no-var-requires": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/destructuring-assignment": "off",
    "react/state-in-constructor": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "off"
  }, 
}