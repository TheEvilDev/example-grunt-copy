module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      assets: {
        files: [
          { expand: true, cwd: 'src', src: ['**'], dest: 'dist/' },
        ],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy:assets']);
}
