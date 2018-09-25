var mongoose = require('mongoose');
var apiController = require('./../controllers/members.js')

module.exports = function(app){

	//retrieves all players
	app.get('/api/players', apiController.index),

	//Adds player to database
	console.log("Im in the server routes")
	app.post('/api/new', apiController.add),

	//Removes player from database
	app.delete('/api/remove/:id', apiController.remove)	

};