const FormulaParser = require('formula-parser');

// parser for algebraic formulae //

const variableKey = 'var';

const unaries = [
  { symbol: '-', key: 'neg', precedence: 4 }
];

const binaries = [
  { symbol: '^', key: 'exp',  precedence: 3, associativity: 'right' },
  { symbol: '/', key: 'div',  precedence: 2, associativity: 'left'  },
  { symbol: '*', key: 'mult', precedence: 2, associativity: 'left'  },
  { symbol: '-', key: 'sub',  precedence: 1, associativity: 'left'  },
  { symbol: '+', key: 'plus', precedence: 1, associativity: 'left'  },
  { symbol: '=', key: 'eq',   precedence: 0, associativity: 'left'  }
];

const algebraParser = new FormulaParser(variableKey, unaries, binaries);
