

// see: https://gruntjs.com/sample-gruntfile
module.exports = function(grunt) {
  
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    pathConfig: {
      blog_raw: 'blog_raw',
    },

    gitclone: {
      JustBook: {
        options: {
          repository: 'git@github.com:qw8880000/JustBook.git',
          branch: 'master',
          directory: '<%= pathConfig.blog_raw %>/JustBook'
        }
      }
    },
  };

  grunt.initConfig(config);

  // output some log when watched files are modified
  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  // so we don't need to excute 'grunt.loadNpmTasks('grunt-*')'
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('clone', [
    'gitclone:JustBook'
  ]);

};

