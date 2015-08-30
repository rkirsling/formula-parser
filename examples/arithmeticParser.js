var FormulaParser = require('formula-parser');

// Arithmetic //

var variableKey = 'var';

var unaries = [
  { symbol: '-', key: 'neg', precedence: 4 }
];

var binaries = [
  { symbol: '^', key: 'exp',  precedence: 3, associativity: 'right' },
  { symbol: '/', key: 'div',  precedence: 2, associativity: 'left'  },
  { symbol: '*', key: 'mult', precedence: 2, associativity: 'left'  },
  { symbol: '-', key: 'sub',  precedence: 1, associativity: 'left'  },
  { symbol: '+', key: 'plus', precedence: 1, associativity: 'left'  },
  { symbol: '=', key: 'eq',   precedence: 0, associativity: 'left'  }
];

var ArithmeticParser = new FormulaParser(variableKey, unaries, binaries);
