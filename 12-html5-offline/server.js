var path = require('path');
var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 1337;

app.listen(port, function() {
    console.log('http://localhost:%d', port);
});
