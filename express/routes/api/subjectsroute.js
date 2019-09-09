const express = require('express');
const router = express.Router();

const subjects = require('../../models/subjects');

//@route    GET /api/names
//@desc     Get all Names from the DB
//@access   Public
router.get('/', function( req, res){  
  subjects
  .find() 
  .sort({subject: 1})  
  .then( function( subject ){ 
      res.json( subject ); 
  }) 
  .catch( function( err ){ 
      console.log( err ); 
  }) 
});

module.exports = router;