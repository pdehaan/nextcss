module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-broccoli');

	grunt.initConfig({
		// pkg: grunt.file.readJSON('package.json'),
		broccoli: {
			dist: {
				dest: 'build',
				config: function() {
					require('sweet.js').loadMacro('sweetbuild');
					return require('./Brocfile.sjs');
				}
			}
		}
	});

	grunt.registerTask('serve', ['broccoli:dist:serve']);
	grunt.registerTask('default', ['broccoli:dist:build']);
}
