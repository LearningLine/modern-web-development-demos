'use strict';

var express = require('express');
var app = express();
var open = require('open');
var movies = require('./movies');
var countries = require('./countries');
var directors = require('./directors');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/api/movies', function (req, res) {
    res.send(movies.getAll());
});

app.get('/api/movies/:id', function (req, res) {
    res.send(movies.get(req.params.id));
});

app.put('/api/movies/:id', function (req, res) {
    var result = movies.save(req.params.id, req.body);
    res.send(result, result.statusCode || 200);
});

app.get('/api/directors', function (req, res) {
    res.send(directors.getAll());
});

app.get('/api/countries', function (req, res) {
    res.send(countries.getAll());
});

app.listen(process.env.PORT || 8080, function () {
    console.info('The server is listening at port ' + port);
    open('http://localhost:' + port, 'chrome');
});
