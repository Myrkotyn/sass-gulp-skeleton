module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'stylesheets/screen.css' : 'sass/screen.sass'
        }
      }
    },
    reload: {
        port: 35729,
        liveReload: {}
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8']
      },
      files: {
        src: 'stylesheets/*.css'
      }
    },
    watch: {
      css: {
        files: '**/*.sass',
        tasks: ['sass', 'autoprefixer', 'reload']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-reload');

  grunt.registerTask('default',['reload', 'watch']);
}