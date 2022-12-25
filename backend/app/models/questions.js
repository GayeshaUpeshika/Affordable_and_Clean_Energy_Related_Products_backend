const mongoose = require("mongoose");

const questionsSchema = mongoose.Schema({

    QuestionID:{type:String, required:true},
    questionName:{type:String , required:true},
   
    

},{
    timestamps:true,
}) 


const questionsmodel = mongoose.model('questions' , questionsSchema)

module.exports = questionsmodel


