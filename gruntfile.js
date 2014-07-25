module.exports = function(grunt) {

  grunt.initConfig({
    fileblocks: {
      dev: {
        files: [
          {
            options: {
                prefix: '/'
            },
            src: 'app/index.html',
            blocks: {
            'app': {src: ['app/scripts/**/*.js','app/vendor/**/*.js']}
            }
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-file-blocks');

  grunt.registerTask('file-blocks', ['fileblocks']);
}