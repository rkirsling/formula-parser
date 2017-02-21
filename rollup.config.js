import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('package.json'));

export default {
  entry: 'formulaParser.js',
  banner: `/*! ${pkg.name} v${pkg.version} by ${pkg.author} (${pkg.license} license) */`,
  targets: [
    {
      dest: 'dist/formula-parser.js',
      format: 'umd',
      moduleName: 'FormulaParser'
    },
    {
      dest: 'dist/formula-parser.es.js',
      format: 'es'
    }
  ]
};
