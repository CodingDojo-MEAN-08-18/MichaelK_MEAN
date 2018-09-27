var mongoose = require('mongoose');

//Sets database
var PlayerSchema = new mongoose.Schema({
  name: {type: String, required: [true, "Name is required."], minlength: [3, "Name must be at least 3 characters"], maxlength: 50},
  position:{type: String, required: [true, "Position is required."], minlength: [3, "Position must be at least 3 positions"], maxlength: 50},
  game1: {type: Boolean, required: false},
  game2: {type: Boolean, required: false},
  game3: {type: Boolean, required: false}
})

//Get database
mongoose.model('Player', PlayerSchema); // We are setting these Schema in our Models.
