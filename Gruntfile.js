module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files:['client/*.js', 'Gruntfile.js']
    },
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'node_modules', src: ['bootstrap/**'], dest:'public/vendors'}
        ]
      }
    },
    watch: {
      files: ['client/*.js'],
      tasks: ['uglify']
    },
    uglify: {
      my_target: {
        // target: sources
        // keep our own var names, which may be need for some angular syntax
        options: {
          mangle: false
        },
        files: {
          'public/scripts/client.min.js': ['client/*.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint', 'watch']);
};
