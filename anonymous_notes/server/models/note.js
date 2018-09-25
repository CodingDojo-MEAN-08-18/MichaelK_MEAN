var mongoose = require('mongoose');

//Sets database
var NoteSchema = new mongoose.Schema({
  content: {type: String, required: [true, "Quote is needed!"], minlength: [3, "Quote must be at least 3 characters"], maxlength: 50},
}, {timestamps: true})


//Get database
mongoose.model('Note', NoteSchema); // We are setting this Schema in our Models.
