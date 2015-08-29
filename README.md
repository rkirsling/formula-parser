# FormulaParser

A parser for "operator-precedence languages" such as arithmetic and propositional logic.<br>
Produces an [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree) in JSON format.

The algorithm is a fully-immutable JavaScript adaptation of
[precedence climbing](http://www.engr.mun.ca/~theo/Misc/exp_parsing.htm#climbing).
