var mongoose = require('mongoose');
var Author = mongoose.model('Author') // We are retrieving this Schemas from our Models
var Quote = mongoose.model('Quote') 

module.exports = {

	//Finds all Authors on Homepage.
	index: function(req, res) {
    	Author.find({}, function(err, data){
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
	 var author = new Author({name: req.body.name});
	 author.save(function(err, data){
            if (err) {
                res.json({message: "Error", error: err});
            } else {
                res.json(data);
            }
        })
    },

    //Finds one Author to show.
    show: function(req, res) {
    	//uses req.params.id because Author id will be passed as url parameter
    	 Author.findOne({_id: req.params.id }, function(err, data) {
            if (err) {
                res.json({message: "Error", error: err});
            } else {
                res.json(data);
            }
        })
    },

    //Edits/Updates the Author in database.
    update: function(req, res) {
        Author.update({ _id: req.params.id }, {title: req.body.name}, function(err, data){
            if (err) {
                res.json({message: "Error", error: err});
            } else {
                res.json(data);
            }
        })
    },

    //Deletes Author from the database
    remove: function(req, res) {
    	//Grabs the id from url parameter and deletes the Author from batabse.
        Author.remove({_id: req.params.id }, function(err, data) {
            if (err) {
                res.json({message: "Error", error: err})
            } else {
                res.json({message: "Removed Successfully: ", data: data});
            }
        })
    },

    addQuote: function(req, res) {
    	var quote = new Quote({content: req.body.content})
    	quote.save(function(err, data){
            if (err) {
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success: ", data: data});
            }
        })
        //Then push/add quote to Author's quote array.
        Author.findByIdAndUpdate(req.params.id, {$push: {quotes: req.body}}, function(err, data){
        	if (err) {
                res.json({message: "Error", error: err})
            } else {
                res.json({message: "Quote added Successfully: ", data: data});
            }
		})
	},

	removeQuote: function(req, res){
	    Author.findOneAndUpdate(req.params.id, {$pull: {'quotes': { _id: req.params.id}}}, function(err, data){
	    	if (err) {
                res.json({message: "Error", error: err})
            } else {
                res.json({message: "Quote removed Successfully: ", data: data});
            }
	    })
	}
}; //End of exports