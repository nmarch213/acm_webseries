var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var app = express();

var port = 3000;

app.use('/', serveStatic(path.join(__dirname, '../dist')));

app.listen(port, function() {
  console.log('Listening on port:', port);
});
