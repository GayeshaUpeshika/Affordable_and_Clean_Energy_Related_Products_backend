const mongoose = require('mongoose');
const QuestionsPost = require("../models/questions");



const AllQuestions = async (req, res) => {    
    try {
        const Questions = await QuestionsPost.find();
                 
        res.status(200).json(Questions);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



const UpdateQuestionById = async (req, res) => {

    const { id } = req.params;
    const {  QuestionID, questionName } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No  with id: ${id}`);

    const updateQuestionsPost = { QuestionID,questionName, _id: id };

    await QuestionsPost.findByIdAndUpdate(id, updateQuestionsPost, { new: true });

    res.json(updateQuestionsPost);
}





const CreateQuestion= async (req, res) => {

    const groups = req.body;

    const newGroups = new QuestionsPost({ ...groups, creator: req.userId })

    try {
        await newGroups.save();

        res.status(201).json(newGroups );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


const GetQuestionByID = async (req, res) => {
    const { id } = req.params;
    try {
        const groups = await QuestionsPost.findById(id);
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const RemoveQuestion = async (req, res) => {
    try {
        await QuestionsPost.findByIdAndDelete(req.params.id)
        res.json({ msg: "Delete Question" })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}









module.exports ={AllQuestions, CreateQuestion,GetQuestionByID,UpdateQuestionById,RemoveQuestion};








