// Schema definition file for our colour collection data 

var mongoose = require('mongoose'); 
var Schema = mongoose.Schema; 

//create a schema description of our color document structure 
const subjectsSchema = new Schema(
  { 
    "_id": Number, 
    "name": String
  },
  {collection: "subjects"}, 
  {versionKey: false}
); 

module.exports = Subjects = mongoose.model('Subjects', subjectsSchema);