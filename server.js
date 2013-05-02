var connect = require('connect');

var portNum = 3000;
console.log("Serving the www folder on port %d.", portNum);

var app = connect()
          .use(connect.static(__dirname + '/www'))
          .listen(portNum);