const config = require("../config/auth.config");
const db = require("../models");
const Request = db.request;

exports.newReq = (req, res) => {
  const request = new Request({
    name: req.body.name,
    reason: req.body.reason,
    priority: req.body.priority,
    serviceType: req.body.serviceType,
    phoneNumber: req.body.phoneNumber,
    buyerId: req.body.buyerId,
    status: req.body.status,
    techId: req.body.techId
  });
  request.save((err, item) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Request added successfully!" });
  });
};

exports.getReq = (req, res) => {
  Request.findById(req.params.reqId, function (err, item) {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (item) {
      res.send({ data: item });
    }
  });
};

exports.editReq = async (req, res) => {
    try{
        await Request.updateOne({'_id':req.body._id},{
          name: req.body.name,
          reason: req.body.reason,
          priority: req.body.priority,
          serviceType: req.body.serviceType,
          phoneNumber: req.body.phoneNumber,
          buyerId: req.body.buyerId,
          status: req.body.status,
          techId: req.body.techId
        });
        res.send({ message: "Request updated successfully!" });
    }catch(e){
        res.status(400).send({ message: e });
    }
  };  

  //get all items
  exports.getAllReq = async (req, res) => {
    try{
        const data= await Request.find({})
        console.log('data ',data)
        res.status(200).send({data})

        }catch(e){

            res.status(400).send({message: "Error! "+e});
        }
    };


exports.getbyBuyer = async (req, res) => {
  const userId = req.params.userId;
  try{
      const data= await Request.find({buyerId:userId})
      console.log('data ',data)
      res.status(200).send({data})

      }catch(e){

          res.status(400).send({message: "Error! "+e});
      }
  };


exports.getbyTech = async (req, res) => {
  const userId = req.params.userId;
  try{
      const data= await Request.find({techId:userId})
      console.log('data ',data)
      res.status(200).send({data})

      }catch(e){

          res.status(400).send({message: "Error! "+e});
      }
  };

  //delete item
  exports.deleteReq = async (req, res) => {
    
    try{
        const id = req.params.reqId;
        await Request.findByIdAndDelete({'_id':id});
        res.status(200).send({message:'Item deleted!'})

        }catch(e){

            res.status(400).send({message: "Error! "+e});
        }
       
    
  };