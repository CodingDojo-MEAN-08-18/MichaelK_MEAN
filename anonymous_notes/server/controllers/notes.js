var mongoose = require('mongoose');
var Note = mongoose.model('Note') // We are retrieving this Schemas from our Models

module.exports = {

	index: function(req, res) {
    	Note.find({}, function(err, data){
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

  add: function(req, res) {
     console.log("POST DATA", req.body);
     var note = new Note({content: req.body.content});
     note.save(function(err, data){
              if (err) {
                  res.json({message: "Error", error: err});
              } else {
                  res.json(data);
              }
          })
      }
}//End of exports