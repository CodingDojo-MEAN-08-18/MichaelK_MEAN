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
	 //If there is a counter in session, add 1 to counter.
	 //else set the counter in session to 1.
	 if(req.session.counter)
	 	{req.session.counter++;}
  else{
    req.session.counter = 1;
  }
  //Renders the index.ejs and sends counter as the context of session
 res.render("index",{counter : req.session.counter});
})

app.get('/plus_two', function(req, res){
	//Adds one to counter
	req.session.counter += 2;
	res.redirect('/');
})

app.get('/reset', function(req, res) {
  //Deletes session
  req.session.destroy();
  res.redirect("/");
})



// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});