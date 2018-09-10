var mongoose = require('mongoose');
var otterController = require('./../controllers/mons.js')



module.exports = function(app){

	//Homepage
	app.get('/', otterController.Index),

	//New animal page
	app.get('/otters/new', otterController.Add_form),

	//post form action from new animal page, 
	//saves animal to database 
	app.post('/otters', otterController.Add),

	//Otters_show
	//Animal edit page, uses animals id, and shows that particular document.
	app.get('/otters/:id', otterController.Show),

	//otters_edit
	app.get('/otters/edit/:id', otterController.Edit),

	//form for updating otter.
	app.post('/otters/:id', otterController.Update),

	app.post('/destroy/:id', otterController.Remove)

};