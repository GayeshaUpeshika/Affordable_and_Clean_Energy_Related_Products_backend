const config = require("../config/auth.config");
const db = require("../models");
const Deliveryaddr = db.deliveryaddr;

exports.addadress = (req, res) => {
  const deliveryaddr = new Deliveryaddr({
    address: req.body.address,
    uid: req.body.uid,
  });
  deliveryaddr.save((err, item) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "adress added successfully!" });
  });
};

exports.getaddress = (req, res) => {
  Deliveryaddr.findById(req.params.Id, function (err, item) {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (item) {
      res.send({ data: item });
    }
  });
};

exports.edit = async (req, res) => {
    try{
        await Deliveryaddr.updateOne({'_id':req.body._id},{
          address: req.body.address ,
            uid: req.body.uid,
        });
        res.send({ message: "adress updated successfully!" });
    }catch(e){
        res.status(400).send({ message: e });
    }
  };  

  //get all items
  exports.getall = async (req, res) => {
    
    try{
        const data= await Deliveryaddr.find({})
        console.log('data ',data)
        res.status(200).send({data})

        }catch(e){

            res.status(400).send({message: "Error! "+e});
        }
    };

      //get all items
  exports.getbyUid = async (req, res) => {
    const id = req.params.Uid;
    try{
        const data= await Deliveryaddr.find({uid:id})
        console.log('data ',data)
        res.status(200).send({data})

        }catch(e){

            res.status(400).send({message: "Error! "+e});
        }
    };

  //delete item
  exports.deleteaddress = async (req, res) => {
    
    try{
        const id = req.params.Id;
        await Deliveryaddr.findByIdAndDelete({'_id':id});
        res.status(200).send({message:'Adress deleted!'})

        }catch(e){

            res.status(400).send({message: "Error! "+e});
        }
       
    
  };