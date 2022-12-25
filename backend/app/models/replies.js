const mongoose = require("mongoose");

const repliesSchema = mongoose.Schema({

    QuestionID:{type:String, required:true},
    ReplyID:{type:String, required:true},
    questionName:{type:String , required:true},
    replyName:{type:String , required:true},
   
   
    

},{
    timestamps:true,
}) 


const repliesmodel = mongoose.model('replies' , repliesSchema)

module.exports = repliesmodel


