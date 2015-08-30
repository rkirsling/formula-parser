# FormulaParser

[![NPM version](http://img.shields.io/npm/v/formula-parser.svg?style=flat)](https://npmjs.org/package/formula-parser)
[![MIT license](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

A parser class for "operator-precedence languages" such as arithmetic and propositional logic.  
Produces [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree)s in JSON format.

The algorithm is a fully-immutable JavaScript adaptation of
[precedence climbing](http://www.engr.mun.ca/~theo/Misc/exp_parsing.htm#climbing).

## Install

```
npm install formula-parser
```

Node.js:
```js
var FormulaParser = require('formula-parser');
```

Browser:
```html
<script src="node_modules/formula-parser/dist/formula-parser.js"></script>
```

## Usage

### Background

`FormulaParser` is a parser class for _operator-precedence languages_, i.e.,
[context-free languages](https://en.wikipedia.org/wiki/Context-free_grammar)
which have only variables, unary operators, and binary operators.

This restriction means that the grammar for a parser instance is wholly specified
by the operator definitions (and a key with which to label variable nodes).

### Creating a parser instance

As the [`ArithmeticParser`](examples/arithmeticParser.js) example demonstrates,
an _operator definition_ is an object like the following:
```js
{ symbol: '+', key: 'plus', precedence: 1, associativity: 'left' }
```
It specifies a `symbol`, a `key` for its AST node,
a `precedence` level, and (for binaries) an `associativity` direction.

Once the definitions are assembled, creating a parser instance is straightforward:
```js
var ArithmeticParser = new FormulaParser(variableKey, unaries, binaries);
```

### Parsing

After creating a `FormulaParser` instance, calling its `parse` method will produce an AST for a formula:
```js
ArithmeticParser.parse('(a + b * c) ^ -d');
```
→
```json
{ "exp": [
  { "plus": [
    { "var": "a" },
    { "mult": [
      { "var": "b" },
      { "var": "c" }
    ]}
  ]},
  { "neg": { "var": "d" } }
]}
```
