

// see: https://gruntjs.com/sample-gruntfile
module.exports = function(grunt) {
  
  var config = {
    pkg: grunt.file.readJSON('package.json'),
    pathConfig: {
      raw: 'raw',
      posts: 'source/_posts',
    },

    clean: {
      posts: {
        src: ['<%= pathConfig.posts %>/'],
      },
    },

    copy: {
      main: {
        files: [{
          expand: true,
          cwd: '<%= pathConfig.raw %>',
          src: '**/*.md',
          dest: '<%= pathConfig.posts %>',
          flatten: true,
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
      hexoServer: {
        cmd: 'hexo server',
        bg: true,
      },
      
    },

    shell: {
      gitClone: {
        command: 'git clone git@github.com:qw8880000/JustBook.git <%= pathConfig.raw %>/JustBook'
      },
      gitPull: {
        command: 'git pull'
      },
      gitPullRaw: {
        command: 'cd ./raw/JustBook && git pull'
      },
      gitPush: {
        command: 'git add ./ && git ci -m "new post" && git push'
      },
      gitPushRaw: {
        command: 'cd ./raw/JustBook && git add ./ && git ci -m "new post" && git push'
      },

      hexoGenerate: {
        command: 'hexo g',
      },
      hexoClean: {
        command: 'hexo clean',
      },
    },

    rewrite: {
      abbrlink: {
        src: '<%= pathConfig.raw %>/**/*.md',
        editor: function(contents, filepath){
          const crypto = require('crypto');
          const hash = crypto.createHash('sha256');

          hash.update(contents);
          var hashValue = hash.digest('hex');

          return contents.replace(/abbrlink: @@abbrlink/g, "abbrlink: " + hashValue.substring(0, 16));
        }
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

  grunt.registerTask('init', [
    'shell:gitClone'
  ]);
  grunt.registerTask('push', [
    'shell:gitPush',
    'shell:gitPushRaw',
  ]);
  grunt.registerTask('pull', [
    'shell:gitPull',
    'shell:gitPullRaw',
  ]);

  grunt.registerTask('RawToPosts', [
    'rewrite:abbrlink',
    'copy:main',
  ]);

  grunt.registerTask('default', [
    'RawToPosts',
    'bgShell:hexoServer',
    'watch',
  ]);

  grunt.registerTask('build', [
    'shell:gitPullRaw',
    'RawToPosts',
    'shell:hexoClean',
    'shell:hexoGenerate',
  ]);

};

