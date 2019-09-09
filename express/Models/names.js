// Schema definition file for our colour collection data 

var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

//create a schema description of our color document structure 
const namesSchema = new Schema(
  { 
    "_id": String, 
    "name": String
  },
  {collection: "names"}, 
  {versionKey: false}
); 

module.exports = Names = mongoose.model('Names', namesSchema);