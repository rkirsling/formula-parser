# FormulaParser

A parser for "operator-precedence languages" such as arithmetic and propositional logic.<br>
Produces an [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) in JSON format.

The algorithm is a fully-immutable JavaScript adaptation of
[precedence climbing](http://www.engr.mun.ca/~theo/Misc/exp_parsing.htm#climbing).

## Usage

`FormulaParser` is a parser class for _operator-precedence languages_, i.e.,
[context-free languages](https://en.wikipedia.org/wiki/Context-free_grammar) which
have only variables, unary operators, and binary operators.

This restriction means that the grammar for a parser instance is wholly specified by
the operator definitions (and a key with which to label variable nodes).

As the [`ArithmeticParser`](examples/arithmeticParser.js) example demonstrates,
an _operator definition_ is an object like the following:
```js
{ symbol: '+', key: 'plus', precedence: 1, associativity: 'left' }
```
It specifies a `symbol`, a `key` for its AST node,
a `precedence` level, and (for binaries) an `associativity` direction.

Once a `FormulaParser` instance is constructed,
simply call its `parse` method to produce an AST for a formula:
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
