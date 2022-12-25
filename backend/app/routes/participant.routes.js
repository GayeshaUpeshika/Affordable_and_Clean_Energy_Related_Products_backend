const express = require("express");
const router = express.Router();


const {AllParticipant, CreateParticipant,GetParticipantByID,UpdateParticipantById,RemoveParticipant} = require("../Controllers/participant.controller");



router.post("/CreateParticipant",CreateParticipant);
router.get("/GetParticipantByID/:id",GetParticipantByID);
router.patch("/UpdateParticipantById/:id",UpdateParticipantById);
router.get("/AllParticipant",AllParticipant);
router.delete("/RemoveParticipant/:id",RemoveParticipant);



module.exports = router;