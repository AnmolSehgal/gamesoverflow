const cart = require('../models/cartModel');
const order = require('../models/order');

module.exports.getOrder = (req,res)=>{
                            order.find({email:req.user}).sort({date:-1}).then(orders => res.json(orders));
                        }
module.exports.orderItems = (req,res)=>{
                        cart.findOne({email:req.user},(err,cartdetails)=>{
                            if(cartdetails && cartdetails.items.length>0)
                                order.create({
                                            email:req.user,
                                            items:cartdetails.items,
                                            bill:cartdetails.bill
                                            },(err,result)=>{
                                            if(err)
                                                return res.status(500).json({message:err});
                                            cart.findOneAndDelete({email:req.user},function(err,result){
                                                if(err)
                                                    return res.status(500).json(err);
                                                    res.status(200).json({message:"order received"});
                                            })
                                            
                                        })
                            else 
                                res.status(400).json({message:"invalid request"});
                        })
}