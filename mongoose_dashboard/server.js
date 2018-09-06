//Require
var express = require("express");
var app = express();
var mongoose = require('mongoose');
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
const flash = require('express-flash');

//Use & Set
app.use(express.static(path.join(__dirname + "./static")));
app.use(bodyParser.urlencoded({extended : true}));
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(flash());
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//Connect
//connecting (database) defined in terminal.
mongoose.connect('mongodb://localhost/otters');

//Schema
var OtterSchema = new mongoose.Schema({
 //validations
 name:  { type: String, required: true, minlength: 3},
 height: { type: Number, min: 1, max: 150 },
 weight: { type: Number, min: 1, max: 150 },
}, {timestamps: true});

//Model
// Mongoose automatically looks for the plural version of your model name, so a Otter model in Mongoose looks for 'otters' in Mongo.
mongoose.model('Otter', OtterSchema); // We are setting this Schema in our Models as 'Otter'
var Otter = mongoose.model('Otter') // We are retrieving this Schema from our Models, named 'Otter'

//============================================ROUTING================================================//

//Homepage
app.get('/', function(req, res) {
	Otter.find({}, function(err, otters) { 
      console.log(otters);   
      res.render('home', {otters: otters});
  })
})

//New animal page
app.get('/otters/new', function(req, res) {
	 res.render('otters_new');
})

//post form action from new animal page, 
//saves animal to database 
app.post('/otters', function(req, res) {
	var otter = new Otter({
		name: req.body.name, 
		height: req.body.height,
		weight: req.body.weight
	});
	otter.save(function(err){
        if(err){
            // if there is an error upon saving, use console.log to see what is in the err object 
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/');
        }
        else {
        	console.log('successfully added a otter!');
	 		    res.redirect('/');
		}
	})
})

//Otters_show
//Animal edit page, uses animals id, and shows that particular document.
app.get('/otters/:id', function(req, res) {
	Otter.find({ _id: req.params.id }, function(err, otter) {
        if(err) {
            console.log(err);
            res.redirect('/' + req.params.id);
        } 
        else {
            console.log("Otter id =", req.params.id);
            res.render('otter_show', {otter: otter});
        }
    });
})

//otters_edit
app.get('/otters/edit/:id', function(req, res) {
  Otter.findOne({ _id: req.params.id }).lean().exec(function(err, otter) {
        if(err) {
            console.log(err);
            res.redirect('/' + req.params.id);
        } else {
            console.log("otter id=", req.params.id);
            res.render('otter_edit', {otter: otter });
        }
    });
   
})


//form for updating otter.
app.post('/otters/:id', function(req, res) {
    //updateOne() takes the item to filer, and then the items to be updated
   Otter.update({ _id: req.params.id }, {name: req.body.name, height: req.body.height, weight: req.body.weight}, function(err){
    if(err) {
            console.log(err);
            console.log("Otter was not updated. Try again.")
            res.redirect('/otters/' + req.params.id);
        } else { 
            //redirects home to see the otter added.
            console.log("New Otter Added!");
            res.redirect('/');
        }
  })
})

app.post('/destroy/:id', function(req, res) {
    Otter.remove({ _id: req.params.id }, function(err){
      if(err) {
            console.log(err);
            res.redirect('/otters/' + req.params.id);
        } else { 
            //redirects home to see the otter deleted. 
            console.log("Sayonara, Otter!");
            res.redirect('/');
        }
  });
});


//listen
var server = app.listen(8000, function() {
	console.log("listening on port 8000");
});

