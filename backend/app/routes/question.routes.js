const express = require("express");
const router = express.Router();


const {AllQuestions, CreateQuestion,GetQuestionByID,UpdateQuestionById,RemoveQuestion} = require("../controllers/questions.controller");



router.post("/CreateQuestion",CreateQuestion);
router.get("/GetQuestionByID/:id",GetQuestionByID);
router.patch("/UpdateQuestionById/:id",UpdateQuestionById);
router.get("/AllQuestions",AllQuestions);
router.delete("/RemoveQuestion/:id",RemoveQuestion);



module.exports = router;