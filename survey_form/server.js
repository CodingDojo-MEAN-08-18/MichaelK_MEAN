// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

// use it!
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {	 
 res.render("index");
})

app.post('/results', function(req, res) { 
  console.log("POST DATA \n\n", req.body)
  var result = {
    name: req.body.name,
    location: req.body.location,
    comments: req.body.comments
  }
  res.render("results", {userData: result});
})


// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});