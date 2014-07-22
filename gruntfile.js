module.exports = function(grunt) {

  grunt.initConfig({
    fileblocks: {
      dev: {
        files: [
          { src: 'app/index.html',
            blocks: {
            'app': {src: 'app/scripts/**/*.js'}
            }
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-file-blocks');

  grunt.registerTask('file-blocks', ['fileblocks']);
}