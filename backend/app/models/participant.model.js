const mongoose = require("mongoose");

const participantSchema = mongoose.Schema({

    WebinarID:{type:String, required:true},
    participantName:{type:String , required:true},
   
    

},{
    timestamps:true,
}) 


const participantmodel = mongoose.model('participant' , participantSchema)

module.exports = participantmodel


