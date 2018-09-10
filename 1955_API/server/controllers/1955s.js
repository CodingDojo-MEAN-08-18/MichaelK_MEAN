var mongoose = require('mongoose');
var Name = mongoose.model('Name') // We are retrieving this Schema from our Models, named 'Name'//GET

module.exports = {

    index: function(req, res) {
    	Name.find({}, function(err, names){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err})
        }
        else {
            // respond with JSON
           res.json({message: "Success", data: names})
        }
     })
    },
    add: function(req, res) {
     console.log("POST DATA", req.body);
	 //creates new user instance

	 var name = new Name({name: req.params.name});
	 name.save(function(err, data){
            if (err) {
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success: ", data});
            }
        });
    },
   remove: function(req, res) {
   		//req.params searches the url for the object after
        Name.remove({name: req.params.name}, function(err, data) {
            if (err) {
                res.json({message: "Error", error: err})
            } else {
                res.json({message: "Removed Successfully: ", data});
            }
        });
    },
    show: function(req, res) {
    	 Name.findOne({name: req.params.name}, function(err, data) {
            if (err) {
                res.json({message: "Error", error: err});
            } else {
                res.json({data});
            }
        })
    },
};