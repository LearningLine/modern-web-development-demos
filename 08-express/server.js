#!/usr/bin/env node

// HATEOAS - hypermedia as the engine of application state

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

// app.use(function(req, res, next) {
//     console.log(req.url);
//     next();
// });

app.use(morgan('dev'));

app.get('/', function(req, res, next) { next(); }, function(req, res, next) {
    // console.log(req.headers);
    // res.set('custom-header', 'bar');

    // res.send('<b>Hello, express!</b>')

    res.render('index.ejs');
});

app.get('/api/data', function(req, res, next) {
    res.json([
        { name: 'Jason' }
    ]);
});

app.post('/api/data', bodyParser.json(), function(req, res, next) {
    console.log(req.body);
    res.json({ ok: true });
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('http://127.0.0.1:%d', port);
});
