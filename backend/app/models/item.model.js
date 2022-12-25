const mongoose = require("mongoose");

const Item = mongoose.model(
  "Item",
  new mongoose.Schema({
    itemName: String,
    description: String,
    price: Number,
    userID: String
  })
);

module.exports = Item;