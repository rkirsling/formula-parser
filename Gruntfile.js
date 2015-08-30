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
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      'dist/formula-parser.min.js': 'dist/formula-parser.js',
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> ' +
                'by <%= pkg.author %> (<%= pkg.license %> license) */\n'
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'browserify', 'uglify']);
};
