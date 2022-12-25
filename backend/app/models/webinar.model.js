const mongoose = require("mongoose");

const webinarSchema = mongoose.Schema({

    WebinarID:{type:String, required:true},
    energyType:{type:String , required:true},
    productName:{type:String , required:true},
    tutorName:{type:String , required:true},
    webinarDate:{type:String , required:true},
    webinarDuration:{type:String, required:true},
    webinarMode:{type:String, required:true},

},{
    timestamps:true,
}) 


const webinarmodel = mongoose.model('webinar' , webinarSchema)

module.exports = webinarmodel


