var mongoose = require('mongoose');
var apiController = require('./../controllers/authors.js')

module.exports = function(app){

	//retrieves all new tasks
	app.get('api/authors', apiController.index),

	//Adds name to database
	app.post('api/new', apiController.add),

	//Retrieve a Task by ID
	app.get('api/author/:id', apiController.show),

	app.put('api/update/:id', apiController.update)

	//Removes name from database
	app.delete('api/remove/:id', apiController.remove),	

	app.post('api/new/quote', apiController.addQuote),

	app.delete('api/remove/quote/:id', apiController.removeQuote)

};