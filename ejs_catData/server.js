
// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);

// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);


// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

//-------------ROUTES----------//

app.get("/cats", function (request, response){    
    response.render("cats");
});

app.get("/carson", function (request, response){
	var carson = {
		name: "Carson", 
		favorite_food: ["Dark leafy greens", "Stone Soup", "Carrots"],
		age: "10",
		sleeping_spot: "In the alley"
	};
    response.render("details", {details: carson});
});

app.get("/hector", function (request, response){
	var hector = {
		name: "Hector", 
		favorite_food: ["Black beans", "guacamole", "potatoes"],
		age: "10",
		sleeping_spot: "Under granny's arms"
	};
    response.render("details", {details: hector});
});

app.get("/luke", function (request, response){
	var luke = {
		name: "Luke", 
		favorite_food: ["Cherries", "salsa", "cheesecake"],
		age: "10",
		sleeping_spot: "At a friend's place"
	};
    response.render("details", {details: luke});
});


//--------------LISTENING---------------//

app.listen(8000, function() {
  console.log("listening on port 8000");
})