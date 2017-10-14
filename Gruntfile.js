

// see: https://gruntjs.com/sample-gruntfile
module.exports = function(grunt) {
  
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    pathConfig: {
      raw: 'raw',
      posts: 'source/_posts',
    },

    gitclone: {
      JustBook: {
        options: {
          repository: 'git@github.com:qw8880000/JustBook.git',
          branch: 'master',
          directory: '<%= pathConfig.raw %>/JustBook'
        }
      }
    },

    clean: {
      posts: {
        src: ['<%= pathConfig.posts %>/**/*.md'],
      },
    },

    copy: {
      main: {
        files: [{
          expand: true,
          cwd: '<%= pathConfig.raw %>',
          src: '**/*.md',
          dest: '<%= pathConfig.posts %>',
          filter: function(filepath) {
            // var patterns = ['---\ntitle:'];
            var patterns = ['^---$'];
            var matchRegex = function(filepath, patterns) {
              var content = grunt.file.read(filepath);

              return patterns.some(function(pattern){
                var regex = new RegExp(pattern, 'm');
                // var regex = new RegExp(pattern);
                return regex.test(content);
              });
            };
            return matchRegex(filepath, patterns);
          },
        }],
      },
    },

    watch: {
      raw: {
        files: ['<%= pathConfig.raw %>/**/*.md'],
        tasks: ['copy:main'],
        options: {
          // spawn: false,
        },
      },
    },

    bgShell: {
      hexo: {
        cmd: 'hexo server',
        bg: true,
      },
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

  grunt.registerTask('default', [
    'clean',
    'copy:main',
    'bgShell',
    'watch',
  ]);

};

