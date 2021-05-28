const path = require('path');
const INVENTORY_PATH = path.join('/uploads/data/inventory');
const productDetails = require('../models/productSchema');
module.exports.create = function(req,res){
                            
                            productDetails.findOne({productId: req.body.productId}, function(err, product){
                                if(err){
                                    return res.status(500).json({
                                        message : 'server error'
                                    })
                                }
                                if(!product){
                                        
                                        if(req.file){
                                            if(req.body.productId && req.body.productName && req.body.productDescription && req.body.productPrice && req.body.productQuantity && req.body.productCategory){
                                                const data = {
                                                                productId:req.body.productId,
                                                                productName:req.body.productName,
                                                                productDescription:req.body.productDescription,
                                                                productPrice:req.body.productPrice,
                                                                productQuantity:req.body.productQuantity,
                                                                productCategory:req.body.productCategory,
                                                                productImage:INVENTORY_PATH+'/'+req.file.filename
                                                            };
                                                
                                                productDetails.create(data, function(err, user){
                                                if(err){
                                                    return res.status(500).json({
                                                        message:err,
                                                    });
                                                }
                                                return res.status(200).json({message:'successfully added data',});
                                            });
                                    }
                                    else
                                    return res.status(500).json({
                                        message:'ServerError4',
                                    });
                                    }
                                    
                                }
                            });    
                        }
        /*{productId:req.body.productId,
        productName:req.body.productName,
        productDescription:req.body.productDescription,
        productPrice:req.body.productPrice,
        productQuantity:req.body.productQuantity,
        productCategory:req.body.productCategory,
        productImage:+'/'+req.file.filename}*/
module.exports.getData = function(req,res){
                        
                        productDetails.find(function(err,result){
                            if(err)
                                return res.status('500').json({message: "server Error1"});
                            if(result)
                            res.status('200').json(result);
                            else
                            res.status('200').json({message:"No data found"});
                        })
                        }