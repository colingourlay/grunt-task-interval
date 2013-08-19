/*
 * grunt-task-interval
 * https://github.com/colingourlay/grunt-task-interval
 *
 * Copyright (c) 2013 Colin Gourlay
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    function noop() {}

    function _spawnTasks(tasks) {

        grunt.util.spawn({
            grunt: true,
            opts: {cwd: process.cwd(), stdio: 'inherit'},
            args: tasks
        }, noop);
    }

    function _processTaskInterval(taskInterval) {
        setInterval(function () { _spawnTasks(taskInterval.tasks); }, taskInterval.interval);
        _spawnTasks(taskInterval.tasks);
    }

    var _taskFn = function() {
        var done = this.async();
        this.options().taskIntervals.forEach(_processTaskInterval);
    };

    grunt.registerMultiTask('task-interval', 'Runs one or more tasks at a time interval', _taskFn);

};
