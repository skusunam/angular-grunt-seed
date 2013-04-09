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
			all: [
				'Gruntfile.js',
				'<%= src.js %>',
				'<%= test.unit %>'
			]
		},

		karma: {
			unit: {
				configFile: '<%= test.karmaConfig %>',
				singleRun: true	
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-karma');
};