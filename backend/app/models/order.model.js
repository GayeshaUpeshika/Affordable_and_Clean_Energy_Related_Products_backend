const mongoose = require("mongoose");

const Order = mongoose.model(
  "orders",
  new mongoose.Schema({
    itemID: String,
    itemName: String,
    deliveryAddress: String,
    status: String,
    qnty: Number,
    price: Number,
    date: Date,
    buyerID: String,
    sellerID: String
  })
);

module.exports = Order;