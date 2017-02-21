# FormulaParser

[![NPM version](http://img.shields.io/npm/v/formula-parser.svg?style=flat)](https://npmjs.org/package/formula-parser)
[![MIT license](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

A parser class for simple formulae, like those of algebra and propositional logic.  
Produces [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree)s in JSON format.

The algorithm is a fully-immutable JavaScript adaptation of
[precedence climbing](http://www.engr.mun.ca/~theo/Misc/exp_parsing.htm#climbing).

## Install

```sh
npm install formula-parser
```

ES module:
```js
import FormulaParser from 'formula-parser';
```

Node:
```js
const FormulaParser = require('formula-parser');
```

Browser:
```html
<script src="node_modules/formula-parser/dist/formula-parser.js"></script>
```

## Usage

### Background

`FormulaParser` is a parser class for _operator-precedence languages_, i.e.,
[context-free languages](https://en.wikipedia.org/wiki/Context-free_grammar)
which have only variables, (prefix) unary operators, and (infix) binary operators.

This restriction means that the grammar for a parser instance is wholly specified
by the operator definitions (and a key with which to label variable nodes).

### Creating a parser instance

As the [`algebraParser`](examples/algebraParser.js) example demonstrates,
an _operator definition_ is an object like the following:
```js
{ symbol: '+', key: 'plus', precedence: 1, associativity: 'left' }
```
It specifies a `symbol`, a `key` for its AST node,
a `precedence` level, and (for binaries) an `associativity` direction.

Once the definitions are assembled, creating a parser instance is straightforward:
```js
const algebraParser = new FormulaParser(variableKey, unaries, binaries);
```

### Parsing

After creating a `FormulaParser` instance, calling its `parse` method will produce an AST for a formula:
```js
algebraParser.parse('(a + b * c) ^ -d');
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

## Limitations (presumed and actual)

### Constants

Technically, constants aren't supported&mdash;the leaves of the formula are all treated as variables,
the values of which are to be evaluated at some post-parse stage.

That said, since a "variable" for present purposes is any alphanumeric string (including underscores),
`'true'`, `'PI'`, and even `'3'` will all be happily parsed as such.
(_Of course, numbers in decimal notation will fail._)

### Function symbols

Function symbols aren't explicitly supported either, but they can be simulated by operator symbols.
Specifying `sin` as a unary symbol will accept `sin x` or `sin(x)`,
while specifying `mod` as a binary symbol will accept `x mod y`.

### Operator position

Unfortunately, this one's hard and fast:  
Unary symbols _must_ be in prefix notation and binary symbols _must_ be in infix notation.
