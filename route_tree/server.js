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


//listen
var server = app.listen(8000, function() {
	console.log("listening on port 8000");
});