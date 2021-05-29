const express = require('express');
const bodyParser = require('body-parser');
const port  = '8000';
const db = require('./config/databasesetup');
const cors = require('cors');
const UserDetails = require('./models/user');
const productSchema = require('./models/productSchema');


const app = express();
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
    );
app.use(bodyParser.json())

const router = require('./router/index');




app.use('/',router);

app.listen(port,(err)=>{
        if(err){
            console.log("Server not running");
            return;}
        console.log('Server is up  and running on port',port);
    }
)