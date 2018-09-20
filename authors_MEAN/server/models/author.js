var mongoose = require('mongoose');

//Sets database
var QuoteSchema = new mongoose.Schema({
  content: {type: String, required: [true, "Quote is needed!"], minlength: [3, "Quote must be at least 3 characters"], maxlength: 50},
})


//Makes two schemas one for each item to be saved and inititates a relationship with key. 
var AuthorSchema = new mongoose.Schema({
  //Validations requires name field and min length of characters is 3 along with message to be displayed upon error. max character length is 20.
  name: {type: String, required: [true, "Name must be entered."], minlength: [3, "Name must be at least 3 characters"], maxlength: 20},
  //sets quote key in author model to set one to many relationship
  quotes: [QuoteSchema]
})


//Get database
mongoose.model('Author', AuthorSchema); // We are setting these Schema in our Models.
mongoose.model("Quote", QuoteSchema);