var mongoose = require('mongoose');
var apiController = require('./../controllers/1955s.js')



module.exports = function(app){

	//Homepage
	app.get('/', apiController.index),

	//Adds name to database
	app.get('/new/:name/', apiController.add),

	//Removes name from database
	app.get('/remove/:name/', apiController.remove),

	//Shows name object in database
	app.get('/:name', apiController.show)

};