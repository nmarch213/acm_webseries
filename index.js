var express = require('express');
var path = require('path');
var app = express();

var port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {

	res.render("index");

});

app.get("/about", function(req, res) {

	res.render("about");

});

app.get("/blog", function(req, res) {

	res.render("blog");

});

app.listen(port, function() {
	console.log('Listening on port:', port);
});
