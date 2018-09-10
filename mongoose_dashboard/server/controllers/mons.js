
var mongoose = require('mongoose');
var Otter = mongoose.model('Otter') // We are retrieving this Schema from our Models, named 'Otter'


module.exports = {

    Index: function(req, res) {
      Otter.find({}, function(err, otters) { 
      console.log(otters);   
      res.render('home', {otters: otters});
 	 })
    },

    Add_form: function(req, res) {
    	res.render('otters_new');    
    },

    Add: function(req, res) {
    	var otter = new Otter({
		name: req.body.name, 
		height: req.body.height,
		weight: req.body.weight
	});
	otter.save(function(err){
        if(err){
            // if there is an error upon saving, use console.log to see what is in the err object 
            console.log("We have an error!", err);
            // adjust the code below as needed to create a flash message with the tag and content you would like
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/');
        }
        else {
        	console.log('successfully added a otter!');
	 		    res.redirect('/');
		}
	})
    },

    Show: function(req, res) {
    	Otter.find({ _id: req.params.id }, function(err, otter) {
        if(err) {
            console.log(err);
            res.redirect('/' + req.params.id);
        } 
        else {
            console.log("Otter id =", req.params.id);
            res.render('otter_show', {otter: otter});
        }
    });    
    },

    Edit: function(req, res) {
    	 Otter.findOne({ _id: req.params.id }).lean().exec(function(err, otter) {
        if(err) {
            console.log(err);
            res.redirect('/' + req.params.id);
        } else {
            console.log("otter id=", req.params.id);
            res.render('otter_edit', {otter: otter });
        }
    });   
    },

    Update: function(req, res) {
	   //updateOne() takes the item to filer, and then the items to be updated
	   Otter.update({ _id: req.params.id }, {name: req.body.name, height: req.body.height, weight: req.body.weight}, function(err){
	    if(err) {
	            console.log(err);
	            console.log("Otter was not updated. Try again.")
	            res.redirect('/otters/' + req.params.id);
	        } else { 
	            //redirects home to see the otter added.
	            console.log("New Otter Added!");
	            res.redirect('/');
	        }
	  })   
    },

    Remove: function(req, res) {
	  Otter.remove({ _id: req.params.id }, function(err){
      if(err) {
            console.log(err);
            res.redirect('/otters/' + req.params.id);
        } else { 
            //redirects home to see the otter deleted. 
            console.log("Sayonara, Otter!");
            res.redirect('/');
        }
 	 });
    }
    
};