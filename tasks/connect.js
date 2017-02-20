// Starts a local webserver and opens browser
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
