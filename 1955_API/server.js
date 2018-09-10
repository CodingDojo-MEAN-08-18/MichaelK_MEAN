//Require
var express = require("express");
var app = express();
var mongoose = require('mongoose');
var path = require("path");
var bodyParser = require('body-parser');

//Use & Set
app.use(express.static(path.join(__dirname + "./static")));

//let's tell body-parser to read JSON, so we'll configure body-parser this way:
app.use(bodyParser.json());

require('./server/config/mongoose.js');

// where the routes used to be, we're going to require routes.js
// since routes.js exports a function, server.js will receive that function
// invoke the function we get from the require and pass it app as an argument
require('./server/config/routes.js')(app)



//listen
var server = app.listen(8000, function() {
	console.log("listening on port 8000");
});
