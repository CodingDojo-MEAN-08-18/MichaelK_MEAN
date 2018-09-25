var mongoose = require('mongoose');
var apiController = require('./../controllers/notes.js')

module.exports = function(app){

	//Get all the notes from the database.
	app.get('/api/notes', apiController.index),

	//Creates a note in the database via post route.
	console.log("Im in the server routes")
	app.post('/api/new', apiController.add)
};