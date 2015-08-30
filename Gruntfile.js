module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      files: {
        src: 'formulaParser.js',
        dest: 'dist/formula-parser.js'
      },
      options: {
        browserifyOptions: {
          standalone: 'FormulaParser'
        }
      }
    },
    jshint: {
      files: 'formulaParser.js',
      options: {
        jshintrc: '.jshintrc'
      }
    },
    uglify: {
      'dist/formula-parser.min.js': 'dist/formula-parser.js'
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'browserify', 'uglify']);
};
