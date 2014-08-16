'use strict';

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-broccoli');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.initConfig({
		// pkg: grunt.file.readJSON('package.json'),
		broccoli: {
			dist: {
				dest: './build',
				config: function() {
					require('sweet.js').loadMacro('sweetbuild');
					return require('./Brocfile.sjs');
				}
			}
		},
		clean: ['./tmp', './build'],
		'gh-pages': {
			options: {
				base: './build'
			},
			src: ['**']
		}
	});

	grunt.registerTask('serve', ['broccoli:dist:serve']);
	grunt.registerTask('default', ['clean', 'broccoli:dist:build']);
	grunt.registerTask('publish', ['default', 'gh-pages']);
}
