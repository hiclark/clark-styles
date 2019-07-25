'use strict';

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/flowtype', 'prettier/react'],
  plugins: ['prettier', 'import', 'flowtype', 'prefer-object-spread'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  globals: {
    mount: false,
    render: false,
    shallow: false,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack.config.base.js',
      },
    },
  },
  rules: {
    'flowtype/require-valid-file-annotation': [
      2,
      'always',
      {
        annotationStyle: 'line',
      },
    ],
    'flowtype/type-id-match': [2, '^([A-Z][a-z0-9]*)+Type$'],
    'no-unused-vars': 2,
    'import/no-anonymous-default-export': 2,
    'prefer-object-spread/prefer-object-spread': 2,
    'flowtype/define-flow-type': 1,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/no-named-as-default-member': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'import/no-unresolved': ['error', { ignore: ['^react-router-dom$'] }],
  },
};
