module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-bitwise': 'off',
    'arrow-body-style': 'off',
    'no-loop-func': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-console': 'warn',
    'no-param-reassign': 'off',
    'no-extra-semi': 'off',
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
  },
}
