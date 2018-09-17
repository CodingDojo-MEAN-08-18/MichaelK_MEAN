var mongoose = require('mongoose');
var apiController = require('./../controllers/restfuls.js')

module.exports = function(app){

	//retrieves all new tasks
	app.get('/tasks', apiController.index),

	//Adds name to database
	app.get('/new', apiController.add),

	//Removes name from database
	app.delete('/remove/:id', apiController.remove),

	//Retrieve a Task by ID
	app.get('task/:id', apiController.show),

	app.put('/update/:id', apiController.update)

};