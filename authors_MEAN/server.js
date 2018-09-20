//Require
var express = require("express");
var app = express();
var mongoose = require('mongoose');
var path = require("path");
var bodyParser = require('body-parser');

//Use & Set
//Alter server.js so that it finds static files within the dist folder of your Angular project
app.use(express.static( __dirname + '/public/dist/public' ));

//let's tell body-parser to read JSON, so we'll configure body-parser this way:
app.use(bodyParser.json());


// this route will be triggered if any of the routes above did not matchcopy
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

require('./server/config/mongoose.js');

// where the routes used to be, we're going to require routes.js
// since routes.js exports a function, server.js will receive that function
// invoke the function we get from the require and pass it app as an argument
require('./server/config/routes.js')(app)

//listen
var server = app.listen(8000, function() {
	console.log("listening on port 8000");
});