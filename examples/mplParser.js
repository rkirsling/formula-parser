const FormulaParser = require('formula-parser');

// parser for modal propositional logic wffs //

const variableKey = 'prop';

const unaries = [
  { symbol: '~',  key: 'neg',  precedence: 4 },
  { symbol: '[]', key: 'nec',  precedence: 4 },
  { symbol: '<>', key: 'poss', precedence: 4 }
];

const binaries = [
  { symbol: '&',   key: 'conj', precedence: 3, associativity: 'right' },
  { symbol: '|',   key: 'disj', precedence: 2, associativity: 'right' },
  { symbol: '->',  key: 'impl', precedence: 1, associativity: 'right' },
  { symbol: '<->', key: 'equi', precedence: 0, associativity: 'right' }
];

const mplParser = new FormulaParser(variableKey, unaries, binaries);
