const express = require("express");
const router = express.Router();


const {AllWebinar, CreateWebinar,GetWebinarByID,UpdateWebinarById,RemoveWebinar} = require("../Controllers/webinar.controller");



router.post("/CreateWebinar",CreateWebinar);
router.get("/GetWebinarByID/:id",GetWebinarByID);
router.patch("/UpdateWebinarById/:id",UpdateWebinarById);
router.get("/AllWebinar",AllWebinar);
router.delete("/RemoveWebinar/:id",RemoveWebinar);



module.exports = router;