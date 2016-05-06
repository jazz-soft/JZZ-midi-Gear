module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    assemble: {
      vendors: 'data/vendors.txt',
      models: 'data/models.txt',
      script: 'jzz-midi-gear/javascript/JZZ.midi.Gear.js'
    },
    copy: {
      javascript: {
        expand: true,
        cwd: 'jzz-midi-gear/javascript',
        src: '*.js',
        dest: 'javascript'
      }
    },
    uglify: {
      javascript: {
        expand: true,
        cwd: 'jzz-midi-gear/javascript',
        src: '*.js',
        dest: 'minified'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('assemble', require('./data/assemble.js')(grunt));
  grunt.registerTask('default', ['assemble', 'copy', 'uglify']);
};
