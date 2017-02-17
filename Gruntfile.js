module.exports = function(grunt) {

  'use strict';

  // Cache common grunt options
  var path   = require('path'); // Module to navigate file structure
  var folder = 'tasks';         // Point to folder with tasks

  // Load all tasks from folder
  // https://github.com/firstandthird/load-grunt-config
  require('load-grunt-config')(grunt, {

    // Path to tasks folder
    configPath: path.join(process.cwd(), folder),

    // Options to use for tasks
    // use: <%= property %>
    // NOTE: `connect.js` has hardcoded <%= demo %> value
    data: {
      docs : 'sassdoc',
      port : 9000,
      src  : 'bytes',
    }
  });

  // Default build task: compiles test css
  // Run `grunt` on the command line
  grunt.registerTask('default', [
    'sassdoc',
    'connect:server',
  ]);

  grunt.registerTask('docs', [
    'sassdoc',
  ]);
};
