const UserDetails = require('../models/user');
module.exports.signUp = function(req,res){
                            console.log(res.body);
                            if(!req.body.name || !req.body.password || !req.body.email)
                            {
                                return res.status(400).send({
                                    message:'invalid data',
                                })
                                
                            }
                            
                            UserDetails.findOne({email: req.body.email}, function(err, user){
                                if(err){
                                    return res.status(500).send({
                                        message:'ServerError1',
                                    });
                                }

                                if (!user){
                                    UserDetails.create(req.body, function(err, user){
                                        if(err){
                                            return res.status(500).send({
                                                message:'ServerError2',
                                            });
                                        }
                                        return res.status(200).send({
                                        message:'successful Signin',
                                    })
                                })
                                }else{
                                    return res.status(409).send({
                                        message:'Already exist',
                                    })
                                }

                            });
                            
                            
                        }