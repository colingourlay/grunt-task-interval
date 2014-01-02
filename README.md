# grunt-task-interval

> Runs one or more grunt tasks at specified intervals.

[![NPM](https://nodei.co/npm/grunt-task-interval.png)](https://nodei.co/npm/grunt-task-interval/)

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-task-interval --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-task-interval');
```

## The "task-interval" task

### Overview
In your project's Gruntfile, add a section named `task_interval` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'task-interval': {
    your_target: {
      options: {
        taskIntervals: [
          {interval: your_time_interval, tasks: ['taskA', 'taskB']}
        ]
      }
    }
  }
})
```

### Options

#### options.taskIntervals
Type: `Array`

An array of taskIntervals, each of which are objects with an `interval` and `tasks` property. `tasks` is an array of existing grunt task names. `interval` is an integer specifying how many milliseconds should pass before the tasks are run again.

### Usage Examples

In this example, we have a `dist` target, and want the `'build'` and `'deploy'` tasks to run every 5 minutes:

```js
grunt.initConfig({
  'task-interval': {
    dist: {
      options: {
        taskIntervals: [
          {interval: 1000 * 60 * 5, tasks: ['build', 'deploy']}
        ]
      }
    }
  }
})
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

0.0.1 - Initial release to npm


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/colingourlay/grunt-task-interval/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

