const mongoose = require("mongoose");

const tutorialSchema = mongoose.Schema({

    TutorialID:{type:String, required:true},
    tutorialTitle:{type:String , required:true},
    tutorialDescription:{type:String , required:true},
    tutorialPeriod:{type:String , required:true},
    TutorialImages:{type:String , default:null},
    ProductName:{type:String , required:true},

},{
    timestamps:true,
}) 

const tutorialmodel = mongoose.model('tutorial' , tutorialSchema)

module.exports = tutorialmodel


