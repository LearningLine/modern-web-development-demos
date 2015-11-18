#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

function loadData(cb) {
  fs.readFile(path.join(__dirname, 'people.json'), 'utf8', cb);
}

app.get('/api/people', function(req, res) {
  loadData(function(err, people) {
    if (err) {
      res.sendStatus(500);
    } else {
      setTimeout(function() {
        // res.send(JSON.parse(people));

        res.set('Content-Type', 'application/json');
        res.send(people);
      }, 0);
    }
  });
});

app.use(bodyParser.json());

app.post('/api/people', function(req, res) {
  console.log(req.body);

  loadData(function(err, data) {
    var people = JSON.parse(data);

    people.push(req.body);

    fs.writeFile(path.join(__dirname, 'people.json'), JSON.stringify(people, null, 2), 'utf8', function(err) {
      res.send({ ok: true });
    });
  });
});

app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('http://localhost:%d', port);
});
