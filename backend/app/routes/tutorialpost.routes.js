const express = require("express");
const router = express.Router();


const {AllTutorial, CreateTutorial,GetTutorialByID,UpdateTutorialById,RemoveTutorial} = require("../Controllers/Tutorial.controller");



router.post("/CreateTutorial",CreateTutorial);
router.get("/GetTutorialByID/:id",GetTutorialByID);
router.patch("/UpdateTutorialById/:id",UpdateTutorialById);
router.get("/AllTutorial",AllTutorial);
router.delete("/RemoveTutorial/:id",RemoveTutorial);



module.exports = router;