// Starts a local webserver and injects livereload snippet
// https://github.com/gruntjs/grunt-contrib-connect
module.exports = {
  server: {
    options: {
      base      : '<%= docs %>',
      keepalive : true,
      open      : true,
      port      : '<%= port %>',
    }
  }
};
