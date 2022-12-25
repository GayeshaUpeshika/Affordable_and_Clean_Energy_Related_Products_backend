const express = require("express");
const router = express.Router();


const {AllReplies, CreateReply,GetReplyByID, UpdateReplyById,RemoveReply} = require("../controllers/replies.controller");



router.post("/CreateReply",CreateReply);
router.get("/GetReplyByID/:id",GetReplyByID);
router.patch("/UpdateReplyById/:id",UpdateReplyById);
router.get("/AllReplies",AllReplies);
router.delete("/RemoveReply/:id",RemoveReply);



module.exports = router;