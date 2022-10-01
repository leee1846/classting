module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': 0,
    'no-alert': 'off',
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 'off',
    'jsx-a11y/no-autofocus': 0,
    camelcase: 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
};
