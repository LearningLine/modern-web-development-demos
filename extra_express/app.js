var express = require('express');
var app = express();

app.use(express.static("public"));

app.use(function (req, resp, next) {
	console.log("request path:" + req.path);
	next();
});

app.get("/hello", function (req, resp) {
	resp.send("<h1>Hello Express!!!!!!!!</h1>");
});

app.get("/goodbye", function (req, resp) {
	resp.send("<h1>Bye Express!</h1>");
});

console.log("running on http://localhost:4000");
app.listen(4000);
