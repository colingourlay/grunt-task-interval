/*
 * grunt-task-interval
 * https://github.com/colingourlay/grunt-task-interval
 *
 * Copyright (c) 2013 Colin Gourlay
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Configuration to be run (and then tested).
    'task-interval': {
      default_options: {
        options: {
        },
      },
      custom_options: {
        options: {
          separator: ': ',
          punctuation: ' !!!',
        }
      },
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

};
