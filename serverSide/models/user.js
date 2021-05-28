const mongoose = require('mongoose');
const UserDataSchema = new mongoose.Schema({
        name:{
            type : String,
            required: true,
        },
        email: {
            type: String,
            required : true,
            unique: true
        }
        ,
        password:{
            type :  String,
            required : true
        }
    },
    {timestamp : true})
const UserDetails = mongoose.model('UserDetails',UserDataSchema);
module.exports = UserDetails;