const mongoose = require('mongoose');
const PaymentPost = require("../models/payment.model");



const AllPayment = async (req, res) => {    
    try {
        const payments = await PaymentPost.find();
                 
        res.status(200).json(payments);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



const UpdatePaymentById = async (req, res) => {

    const { id } = req.params;
    const { TutorialID, PaymentID, paymentproductTitle, paymentuserName, receiptNo, pinNo } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No  with id: ${id}`);

    const updatePaymentPost = { TutorialID, PaymentID, paymentproductTitle, paymentuserName, receiptNo, pinNo, _id: id };

    await PaymentPost.findByIdAndUpdate(id, updatePaymentPost, { new: true });

    res.json(updatePaymentPost);
}





const CreatePayment= async (req, res) => {

    const groups = req.body;

    const newGroups = new PaymentPost({ ...groups, creator: req.userId })

    try {
        await newGroups.save();

        res.status(201).json(newGroups );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


const GetPaymentByID = async (req, res) => {
    const { id } = req.params;
    try {
        const groups = await PaymentPost.findById(id);
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const RemovePayment = async (req, res) => {
    try {
        await PaymentPost.findByIdAndDelete(req.params.id)
        res.json({ msg: "Delete Payment" })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}








module.exports ={AllPayment, CreatePayment,GetPaymentByID,UpdatePaymentById,RemovePayment};








