var FormulaParser = require('formula-parser');

// parser for modal propositional logic wffs //

var variableKey = 'prop';

var unaries = [
  { symbol: '~',  key: 'not',  precedence: 4 },
  { symbol: '[]', key: 'nec',  precedence: 4 },
  { symbol: '<>', key: 'poss', precedence: 4 }
];

var binaries = [
  { symbol: '&',   key: 'conj', precedence: 3, associativity: 'right' },
  { symbol: '|',   key: 'disj', precedence: 2, associativity: 'right' },
  { symbol: '->',  key: 'impl', precedence: 1, associativity: 'right' },
  { symbol: '<->', key: 'equi', precedence: 0, associativity: 'right' }
];

var MPLParser = new FormulaParser(variableKey, unaries, binaries);
