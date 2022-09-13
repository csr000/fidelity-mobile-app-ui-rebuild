module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 8,
    requireConfigFile: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true,
    },
  },
  extends: 'universe/native',
  rules: {
    'max-len': [1, { code: 100 }],
  },
};
