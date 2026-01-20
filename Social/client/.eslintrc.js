module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  // rules: {
  //   'no-underscore-dangle': ['error', { allow: ['_id'] }],
  // },
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'linebreak-style': 0, // This line disables the LF/CRLF check
  },
};
