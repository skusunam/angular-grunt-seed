'use strict';

module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		//JS Source files
		src: {
			js: ['app/js/**/*.js']
		},
		//JS Test files
		test: {
			karmaConfig: 'test/karma.conf.js',
			unit: ['test/unit/**/*.js']
		},

		// Configure Lint\JSHint Task
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all_files: [
				'Gruntfile.js',
				'<%= src.js %>',
				'<%= test.unit %>'
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
};