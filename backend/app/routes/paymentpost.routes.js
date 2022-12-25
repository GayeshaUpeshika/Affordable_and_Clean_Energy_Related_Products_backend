const express = require("express");
const router = express.Router();


const {AllPayment, CreatePayment,GetPaymentByID,UpdatePaymentById, RemovePayment } = require("../Controllers/Payment.controller");



router.post("/CreatePayment",CreatePayment);
router.get("/GetPaymentByID/:id",GetPaymentByID);
router.patch("/UpdatePaymentById/:id",UpdatePaymentById);
router.get("/AllPayment",AllPayment);
router.delete("/RemovePayment/:id",RemovePayment);




module.exports = router;