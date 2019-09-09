const express = require('express');
const app = express();

const port = 5000;

const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const namesroute = require('./routes/api/namesroute');
const subjectsroute = require('./routes/api/subjectsroute');

app.use(bodyparser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/names', namesroute );
app.use('/api/subjects', subjectsroute );

const db = require('./config/keys').mongoURI;

mongoose.connect( db, {useNewURLParser: true})   
    .then( function(){ 
        console.log('MongoDB connected...');   
    })   
    .catch( function( err ){ 
        console.log( err )   
    });

app.get('/', (req, res) => {
    res.json({reply:'Route for HOME path.'});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.