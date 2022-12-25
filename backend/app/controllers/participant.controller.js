const mongoose = require('mongoose');
const ParticipantPost = require("../models/participant.model");



const AllParticipant = async (req, res) => {    
    try {
        const participants = await ParticipantPost.find();
                 
        res.status(200).json(participants);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



const UpdateParticipantById = async (req, res) => {

    const { id } = req.params;
    const { WebinarID, participantName } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No  with id: ${id}`);

    const updateParticipantPost = { WebinarID,participantName, _id: id };

    await ParticipantPost.findByIdAndUpdate(id, updateParticipantPost, { new: true });

    res.json(updateParticipantPost);
}





const CreateParticipant= async (req, res) => {

    const groups = req.body;

    const newGroups = new ParticipantPost({ ...groups, creator: req.userId })

    try {
        await newGroups.save();

        res.status(201).json(newGroups );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


const GetParticipantByID = async (req, res) => {
    const { id } = req.params;
    try {
        const groups = await ParticipantPost.findById(id);
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const RemoveParticipant = async (req, res) => {
    try {
        await ParticipantPost.findByIdAndDelete(req.params.id)
        res.json({ msg: "Delete Participant Details" })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}









module.exports ={AllParticipant, CreateParticipant,GetParticipantByID,UpdateParticipantById,RemoveParticipant};








