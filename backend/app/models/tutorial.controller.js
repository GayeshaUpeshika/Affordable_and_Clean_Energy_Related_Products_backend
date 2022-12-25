const mongoose = require('mongoose');
const TutorialPost = require("../models/tutorial.model");



const AllTutorial = async (req, res) => {    
    try {
        const jobs = await TutorialPost.find();
                 
        res.status(200).json(jobs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



const UpdateTutorialById = async (req, res) => {

    const { id } = req.params;
    const {  TutorialID, tutorialTitle, tutorialPeriod, tutorialDescription, TutorialImages, ProductName } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No  with id: ${id}`);

    const updateTutorialPost = { TutorialID, tutorialTitle, tutorialPeriod, tutorialDescription, TutorialImages, ProductName, _id: id };

    await TutorialPost.findByIdAndUpdate(id, updateTutorialPost, { new: true });

    res.json(updateTutorialPost);
}





const CreateTutorial= async (req, res) => {

    const groups = req.body;

    const newGroups = new TutorialPost({ ...groups, creator: req.userId })

    try {
        await newGroups.save();

        res.status(201).json(newGroups );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


const GetTutorialByID = async (req, res) => {
    const { id } = req.params;
    try {
        const groups = await TutorialPost.findById(id);
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const RemoveTutorial = async (req, res) => {
    try {
        await TutorialPost.findByIdAndDelete(req.params.id)
        res.json({ msg: "Delete tutor" })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}









module.exports ={AllTutorial, CreateTutorial,GetTutorialByID,UpdateTutorialById,RemoveTutorial};








