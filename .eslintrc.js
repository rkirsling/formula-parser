module.exports = {
  extends: 'airbnb-base',

  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'never'],
    'func-names': 'off',
    'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'minimum' }],
    'linebreak-style': 'off',
    'max-len': ['error', 120, 2, { ignoreComments: true }],
    'no-bitwise': ['error', { 'allow': ['~'] }],
    'no-multi-spaces': 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'no-nested-ternary': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['error', { vars: 'local', args: 'none' }],
    'no-use-before-define': ['error', 'nofunc'],
    'no-useless-call': 'error',
    'prefer-template': 'off',
    'wrap-iife': ['error', 'inside']
  }
};
