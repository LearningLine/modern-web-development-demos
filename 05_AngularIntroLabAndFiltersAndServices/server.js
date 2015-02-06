'use strict';

var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 8080, function () {
    console.info('The server is listening at port ' + (process.env.PORT || 8080));
});
