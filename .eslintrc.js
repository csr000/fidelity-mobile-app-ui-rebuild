module.exports = {
  env: {
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: '13',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off',
    'linebreak-style': 0,
    'max-len': ['error', { code: 200 }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-unstable-nested-components': 'off',
    'no-console': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
  },
};
