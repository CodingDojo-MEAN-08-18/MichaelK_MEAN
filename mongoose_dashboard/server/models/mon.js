var mongoose = require('mongoose');

//Schema
var OtterSchema = new mongoose.Schema({
 //validations
 name:  { type: String, required: true, minlength: 3},
 height: { type: Number, min: 1, max: 150 },
 weight: { type: Number, min: 1, max: 150 },
}, {timestamps: true});


// Mongoose automatically looks for the plural version of your model name, so a Otter model in Mongoose looks for 'otters' in Mongo.
mongoose.model('Otter', OtterSchema); // We are setting this Schema in our Models as 'Otter'
