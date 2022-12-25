const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({

    TutorialID:{type:String, required:true},
    PaymentID:{type:String, required:true},
    paymentproductTitle:{type:String , required:true},
    paymentuserName:{type:String , required:true},
    receiptNo:{type:Number , required:true},
    pinNo:{type:Number , required:true},
   

},{
    timestamps:true,
}) 

const paymentmodel = mongoose.model('payment' , paymentSchema)

module.exports = paymentmodel


