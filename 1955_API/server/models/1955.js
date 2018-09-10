var mongoose = require('mongoose');

//Sets database
var NameSchema = new mongoose.Schema({
 name:  { type: String, required: true, minlength: 1},
}, {timestamps: true});

//Get database
mongoose.model('Name', NameSchema); // We are setting this Schema in our Models as 'Name'