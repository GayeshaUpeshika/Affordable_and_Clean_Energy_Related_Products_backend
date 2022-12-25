const mongoose = require('mongoose');
const RepliesPost = require("../models/replies");



const AllReplies = async (req, res) => {    
    try {
        const Questions = await RepliesPost.find();
                 
        res.status(200).json(Questions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



const UpdateReplyById = async (req, res) => {

    const { id } = req.params;
    const { ReplyID, QuestionID, questionName, replyName } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No  with id: ${id}`);

    const updateRepliesPost  = {  ReplyID,QuestionID,questionName, replyName, _id: id };

    await RepliesPost.findByIdAndUpdate(id, updateRepliesPost , { new: true });

    res.json(updateRepliesPost);
}





const CreateReply= async (req, res) => {

    const groups = req.body;

    const newGroups = new RepliesPost({ ...groups, creator: req.userId })

    try {
        await newGroups.save();

        res.status(201).json(newGroups );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


const GetReplyByID = async (req, res) => {
    const { id } = req.params;
    try {
        const groups = await RepliesPost.findById(id);
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const RemoveReply = async (req, res) => {
    try {
        await RepliesPost.findByIdAndDelete(req.params.id)
        res.json({ msg: "Delete Reply" })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}









module.exports ={AllReplies, CreateReply,GetReplyByID, UpdateReplyById,RemoveReply};








