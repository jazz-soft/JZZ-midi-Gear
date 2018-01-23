module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    assemble: {
      vendors: 'data/vendors.txt',
      models: 'data/models.txt',
      script: 'javascript/JZZ.midi.Gear.js'
    },
    uglify: {
      javascript: {
        expand: true,
        cwd: 'javascript',
        src: '*.js',
        dest: 'minified'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('assemble', require('./data/assemble.js')(grunt));
  grunt.registerTask('default', ['assemble', 'uglify']);
};
