const config = require("../config/auth.config");
const db = require("../models");
const Item = db.item;

exports.addItem = (req, res) => {
  console.log('add item called')
  const item = new Item({
    itemName: req.body.itemName,
    description: req.body.description,
    price: req.body.price,
    userID: req.body.userID,
  });
  item.save((err, item) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Item added successfully!" });
  });
};

exports.getItem = (req, res) => {
  Item.findById(req.params.itemId, function (err, item) {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (item) {
      res.send({ data: item });
    }
  });
};

exports.editItem = async (req, res) => {
    try{
        await Item.updateOne({'_id':req.body._id},{
            price: req.body.price , 
            description: req.body.description , 
            itemName: req.body.itemName , 
        });
        res.send({ message: "Item updated successfully!" });
    }catch(e){
        res.status(400).send({ message: e });
    }
  };  

  //get all items
  exports.getAllItems = async (req, res) => {
    
    try{
        const data= await Item.find({})
        console.log('data ',data)
        res.status(200).send({data})

        }catch(e){

            res.status(400).send({message: "Error! "+e});
        }
    };

  //delete item
  exports.deleteItem = async (req, res) => {
    
    try{
        const id = req.params.itemId;
        await Item.findByIdAndDelete({'_id':id});
        res.status(200).send({message:'Item deleted!'})

        }catch(e){

            res.status(400).send({message: "Error! "+e});
        }
       
    
  };