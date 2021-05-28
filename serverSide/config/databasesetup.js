const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/gamesoverflow');
const db = mongoose.connection;

//error
db.on('error',(err)=>{console.error(err.message)});

// when server is up and running 
db.once('open',()=>{
    console.log('successfully connected with the database.');
})