const cart = require('../models/cartSchema');
const productdetails  =require('../models/productSchema');
module.exports.getCart = (req,res)=>{
        cart.findOne({email:req.user},(err,cartdetails)=>{
                if(err){
                    return res.status(500).json({message:"serverError"});
                }
                console.log(cartdetails);
                
                if(cartdetails && cartdetails.items.length>0){
                    return res.status(200).json(cartdetails.items);
                    
                }
                return res.status(200).json(null);
        })
}
module.exports.addtocart = (req,res)=>{
                cart.findOne({email:req.user},(err,cartdetails)=>{
                    if(err){
                        return res.status(500).json({message:"serverError"});
                    }
                    if(cartdetails){
                        let itemIndex = cartdetails.items.findIndex(p => p.productId == req.body.productId);
                        if(itemIndex>-1){

                            let q = parseInt(cartdetails.items[itemIndex].quantity);
                            q+=parseInt(req.body.quantity);
                            cartdetails.items[itemIndex].quantity=q;

                            cartdetails.items[itemIndex].price =q*parseInt(cartdetails.items[itemIndex].pricePerItem);
                            
                            let bill=0;
                            for(let i=0;i<cartdetails.items.length;i++)
                                bill+=cartdetails.items[i].price;
                            cartdetails.bill = bill;
                            cart.findOneAndUpdate({email:req.user},{items:cartdetails.items,bill:cartdetails.bill},(err,result)=>{
                                    if(err){
                                        return res.status(500).json(null);
                                    }
                                    else
                                    {
                                        return res.status(200).json({message:"successfully updated"});
                                    }
                            });
                        }
                        else{
                            productdetails.findOne({productId:req.body.productId},function(err,prod){
                                    const obj= {
                                            productId:prod.productId,
                                            productImage:prod.productImage,
                                            quantity:1,
                                            price:prod.productPrice,
                                            pricePerItem:prod.productPrice
                                    };
                                    cartdetails.items.push(obj);
                                    let bill=0;
                                    for(let i=0;i<cartdetails.items.length;i++)
                                    bill+=cartdetails.items[i].price;
                                    cartdetails.bill = bill;
                                    cart.findOneAndUpdate({email:req.user},{items:cartdetails.items,bill:cartdetails.bill},(err,result)=>{
                                        if(err){
                                            return res.status(500).json({message:"some server error"});
                                        }
                                        else
                                        {
                                            return res.status(200).json({message:"successfully updated"});
                                        }
                                    });
                                })
                        }

                    }
                    else{
                        productdetails.findOne({productId:req.body.productId},function(err,prod){
                                    const obj = {
                                            email:req.user,
                                            items:[
                                                {
                                                    productId:prod.productId,
                                                    productImage:prod.productImage,
                                                    price:prod.productPrice,
                                                    pricePerItem:prod.productPrice,
                                                    quantity:1
                                                }
                                            ],
                                            bill:prod.productPrice,
                                    }
                                    cart.create(obj,(err,result)=>{
                                        if(err)
                                        return res.status(400).json({message:err});
                                    
                                        return res.status(200).json({message:"added Successfully"});
                                    });
                            })
                    }
                })
                
            }
module.exports.deleteItem = (req,res)=>{
                cart.findOne({email:req.user},(err,cartdetails)=>{
                    if(cartdetails){
                        let itemIndex = cartdetails.items.findIndex(p => p.productId == req.body.productId);
                        if(itemIndex>-1){
                            let productItem = cartdetails.items[itemIndex];
                            cartdetails.bill -= productItem.price;
                            cartdetails.items.splice(itemIndex,1);
                            cart.findOneAndUpdate({email:req.user},{items:cartdetails.items,bill:cartdetails.bill},(err,result)=>{
                                if(err){
                                    return res.status(500).json(null);
                                }
                                else
                                {
                                    return res.status(200).json({message:"successfully updated"});
                                }
                        });
                        }
                    }
                    else{
                        return res.status(400).json({message:"invalid request"});
                    }
                })
}