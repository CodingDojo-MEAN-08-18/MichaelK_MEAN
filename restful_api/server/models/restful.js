

var mongoose = require('mongoose');

//Sets database
var TaskSchema = new mongoose.Schema({
 title:  { type: String, required: true, minlength: 1},
 description:  { type: String, required: true, minlength: 1},
}, {timestamps: true});

//Get database
mongoose.model('Task', TaskSchema); // We are setting this Schema in our Models as 'Name'