module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended',
  ],
  env: {
    browser: true
  },
  globals: {
    'Popper': false
  },
  rules: {
    'quotes': ['error', 'single', {  'allowTemplateLiterals': true, 'avoidEscape': true }],
    'ember-suave/no-const-outside-module-scope': 0,
    'ember-suave/no-direct-property-access': 1,
    'ember-suave/require-access-in-comments': 0,
    'prefer-const': 2,
  }
};
