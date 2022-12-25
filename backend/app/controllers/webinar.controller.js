const mongoose = require('mongoose');
const WebinarPost = require("../models/webinar.model");



const AllWebinar = async (req, res) => {    
    try {
        const webinars = await WebinarPost.find();
                 
        res.status(200).json(webinars);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



const UpdateWebinarById = async (req, res) => {

    const { id } = req.params;
    const { WebinarID, energyType, productName, tutorName, webinarDate, webinarDuration, webinarMode } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No  with id: ${id}`);

    const updateWebinarPost = { WebinarID, energyType, productName, tutorName, webinarDate, webinarDuration, webinarMode, _id: id };

    await WebinarPost.findByIdAndUpdate(id, updateWebinarPost, { new: true });

    res.json(updateWebinarPost);
}





const CreateWebinar= async (req, res) => {

    const groups = req.body;

    const newGroups = new WebinarPost({ ...groups, creator: req.userId })

    try {
        await newGroups.save();

        res.status(201).json(newGroups );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


const GetWebinarByID = async (req, res) => {
    const { id } = req.params;
    try {
        const groups = await WebinarPost.findById(id);
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const RemoveWebinar = async (req, res) => {
    try {
        await WebinarPost.findByIdAndDelete(req.params.id)
        res.json({ msg: "Delete Webinar" })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}









module.exports ={AllWebinar, CreateWebinar,GetWebinarByID,UpdateWebinarById,RemoveWebinar};








