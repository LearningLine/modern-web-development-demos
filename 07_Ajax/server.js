var path = require('path');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    // console.log(req);
    // res.send('Hi!');
    // res.sendfile('index.html');
    res.render('index1');
});

app.get('/api/people', function(req, res) {
    var peeps = [
        { id: 1, name: 'Jason' },
        { id: 2, name: 'Brock' }
    ];

    // setTimeout(function() {
        res.json(peeps);
    // }, 2000);
});

app.post('/api/people/:id', function(req, res) {
    var id = +req.params.id;

    console.log(
        'updating person %d: %j',
        id,
        req.body
    );
});

app.get('/api/display', function(req, res) {
    // res.set('Content-Type', 'text/html');
    res.send('<i>You got <b>HTML</b>!</i>');
});

app.listen(process.env.PORT || 5000);









//
