#!/usr/bin/env node

var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('http://localhost:%d', port);
});
