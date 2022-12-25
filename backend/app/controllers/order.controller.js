const config = require("../config/auth.config");
const db = require("../models");
const Order = db.order;
//import {ObjectId} from "mongoose"

exports.addOrder = (req, res) => {
  const order = new Order({
    itemID: req.body.itemID,
    itemName: req.body.itemName,
    deliveryAddress: req.body.deliveryAddress,
    status: "pending",
    qnty: req.body.qnty,
    price: req.body.price,
    date: req.body.date,
    buyerID: req.body.buyerID,
    sellerID: req.body.sellerID
  });
  order.save((err, item) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Order added successfully!" });
  });
};

exports.getOrder = (req, res) => {
  Order.findById(req.params.OrderId, function (err, item) {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (item) {
      res.send({ data: item });
    }
  });
};

exports.editOrder = async (req, res) => {
    try{
        await Order.updateOne({'_id':req.body._id},{
          itemID: req.body.itemID,
          itemName: req.body.itemName,
          deliveryAddress: req.body.deliveryAddress,
          status: req.body.status,
          qnty: req.body.qnty,
          price: req.body.price,
          date: req.body.date,
          buyerID: req.body.buyerID,
        });
        res.send({ message: "Item updated successfully!" });
    }catch(e){
        res.status(400).send({ message: e });
    }
  };  

  //get all items
  exports.getAllOrders = async (req, res) => {
    
    try{
        const data= await Order.find({})
        console.log('data ',data)
        res.status(200).send({data})

        }catch(e){

            res.status(400).send({message: "Error! "+e});
        }
    };

  //delete item
  exports.deleteOrders = async (req, res) => {
    
    try{
        const id = req.params.OrderId;
        await Order.findByIdAndDelete({'_id':id});
        res.status(200).send({message:'Order deleted!'})

        }catch(e){

            res.status(400).send({message: "Error! "+e});
        }
       
    
  };


  exports.editOrderTest = async (req, res) => {
    try{
      console.log(req.body.status)
        await Order.updateOne(  { _id:req.body._id} , { $set: { 
          status: req.body.status 
        } } );

        res.send({ message: "Item updated successfully!" });
    }catch(e){
        res.status(400).send({ message: e });
    }
  };  
