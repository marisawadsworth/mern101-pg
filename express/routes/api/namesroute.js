const express = require('express');
const router = express.Router();

const names = require('../../models/names');

//@route    GET /api/names
//@desc     Get all Names from the DB
//@access   Public
router.get('/', function( req, res){  
  names
  .find() 
  .sort({name: 1})  
  .then( function( name ){ 
      res.json( name ); 
  }) 
  .catch( function( err ){ 
      console.log( err ); 
  }) 
});

//@route    GET /api/names/:names
//@desc     Get all Names from the DB matching the parameter
//@access   Public
router.get('/:name', function( req, res){  
  names
  .find({name: req.params.name}) 
  .sort({name: 1})  
  .then( function( name ){ 
      (name === 0) ? res.json({"msg": `${req.params.name} does not exist`}) : res.json( name );
  }) 
  .catch( function( err ){ 
      console.log( err ); 
  }) 
}); 

//@route    POST /api/names/
//@desc Add a new Name to the DB 
//@access Public 
router.post('/', function( req, res){ 

  let newName = new Names(req.body);

  newName
  .save(newName)
  .then(() => {
      res.json({
          success:'Name Added'}); 
      })
  .catch(err => {
      res.status(404).json({
          error: err
      })
  })

});


//@route    DELETE /api/names/:id
//@desc     Delete a name from the DB by _id key 
//@access   Public (should be secured) 
router.delete('/:id', function( req, res){  

  names
  .findByIdAndDelete(req.params.id)
  .then(name => {
      name.remove();
      res.json({
          success:'Name Deleted'}); 
      })
  .catch(err => {
      res.status(404).json({
          error: err
      })
  }) 

}); 

module.exports = router;