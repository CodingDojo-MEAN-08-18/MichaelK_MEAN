//Require
var express = require("express");
var app = express();
var mongoose = require('mongoose');
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
const flash = require('express-flash');
const bcrypt = require('bcrypt');

//Use & Set
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1) 

app.use(express.static(path.join(__dirname + "./static")));
app.use(bodyParser.urlencoded({extended : true}));
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(flash());


//Connect
//connecting (database) defined in terminal.
mongoose.connect('mongodb://localhost/login_reg');

//Schema
var UserSchema = new mongoose.Schema({
 //validations
 email:  { type: String, required: true, minlength: 4},
 first_name: { type: String, required: true, minlength: 1},
 last_name: { type: String, required: true, minlength: 1},
 password:  { type: String, required: true, minlength: 5},
 }, {timestamps: true});

//Model
// Mongoose automatically looks for the plural version of your model name, so a Otter model in Mongoose looks for 'otters' in Mongo.
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'Otter'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'Otter'

//============================ROUTING=====================================================//

//1
app.get('/', function(req, res) {
      res.render('login');
})

app.get('/results', function(req, res) {
    if(req.session.isloggedin == true) {
        res.render('results', {session: req.session});
    } 
    else {
        console.log("Access Denied.")
        res.redirect('/')
    }
})

//2
app.post('/register', function(req, res) {
	var form_password = req.body.password;
	var isValid = true;

	 //Forms a hashed password using password from form.
	 bcrypt.hash(form_password, 10, function(err, hash) {
        if(err) {
            console.log(err);
            res.redirect('/');
        } 
        else {
            //query to see if the email exists
            User.findOne({email: req.body.email}, function(err, emailused) {
                if(err) {
                    console.log(err);
                } 
                else {
                    if(emailused) {
                        console.log("email is already taken");
                        isValid = false;
                    } 
	                if(req.body.email.length < 6) {
	                        console.log("email should be longer than 6");
	                        isValid = false;
	                    } 
	                    if(req.body.first_name < 1) {
	                        console.log("first name can't be empty");
	                        isValid = false;
	                    } 
	                    if(req.body.last_name < 1) {
	                        console.log("last name can't be empty");
	                        isValid = false;
	                    } 
	                    if(req.body.password < 6) {
	                        console.log("password should be longer than 6 characters");
	                        isValid = false;
	                    }
	                if (isValid === true){
	                	var user = new User({
							email: req.body.email, 
							first_name: req.body.first_name,
							last_name: req.body.last_name,
							//SAVE PASSWORD AS HASH! TO BE COMPARED LATER!
							password: hash,
							birthday: req.body.password
						});
	                }
	                else{
	                	res.redirect('/');
	                }
                }

				//Saves user to db.
				user.save(function(err){
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
			        	console.log(user);
			        	console.log('successfully added a user!');
				 		    res.redirect('/');
					}
				})
			})
        };
    });
});

app.post('/login', function(req, res) {
    User.findOne({email: req.body.email}, function(err, user){
        if(err) {
            console.log("can't login");
            res.redirect('/')
        } 
        else {
            if(user){
                const entered_password = req.body.password;
                const hashed_password = user.password;

                //compares password from login form to the hashed password saved into the db.
                //If passwords are correct, set sessions to id and username.
                bcrypt.compare(entered_password, hashed_password, function(err, correctpass) {
                    if(correctpass) {
                        console.log("You're logged in!");
                        req.session.first_name = user.first_name;
                        req.session.userid = user._id;
                        req.session.email = user.email;
                        //check if the user is logged in
                        req.session.isloggedin = true;
                        res.redirect('/results');
                    } 
                    else {
                        console.log("Incorrect password! Try again.");
                        res.redirect('/');
                    } 
                });
            } 
            else {
                console.log("User does not exist.");
                res.redirect('/')
            } 
        } 
    })
})

//listen
var server = app.listen(8000, function() {
	console.log("listening on port 8000");
});
