const UserDetails = require('../models/user');
const jwt = require('jsonwebtoken');
const dotenv  = require('dotenv');
dotenv.config();



module.exports.signIn = function(req,res){
                            UserDetails.findOne({email:req.body.email},(err,user)=>{
                                if(err){
                                    return res.status(500).json({message:"server error"});
                                }
                                if(user){
                                    if(user.password===req.body.password){
                                        const token = jwt.sign({username : req.body.email},process.env.TOKEN_SECRET,{expiresIn: '36000s'});
                                        return res.status(200).json({email:token});
                                    }
                                    else{
                                        return res.status(200).json({message:"invalid password"});
                                    }
                                }
                                else{
                                    return res.status(200).json({message:"enter valid email"});
                                }
                            })
                        }