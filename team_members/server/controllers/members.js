var mongoose = require('mongoose');
var Player = mongoose.model('Player')

module.exports = {

	//Finds all Authors on Homepage.
	index: function(req, res) {
    	Player.find({}, function(err, data){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err})
        }
        else {
            // respond with JSON
           res.json(data)
        }
     })
    },

    //Creates an Author
    add: function(req, res) {
     console.log("POST DATA", req.body);
	 var player = new Player({name: req.body.name, position: req.body.position});
	 player.save(function(err, data){
            if (err) {
                res.json({message: "Error", error: err});
            } else {
                res.json(data);
            }
        })
    },

    //Deletes Author from the database
    remove: function(req, res) {
    	//Grabs the id from url parameter and deletes the player from batabse.
        Player.remove({_id: req.params.id }, function(err, data) {
            if (err) {
                res.json({message: "Error", error: err})
            } else {
                res.json({message: "Removed Successfully: ", data});
            }
        })
    }

}//End of exports