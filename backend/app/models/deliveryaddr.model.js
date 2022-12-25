const mongoose = require("mongoose");

const Address = mongoose.model(
  "Adresss",
  new mongoose.Schema({
    address: String,
    uid: String
  })
);

module.exports = Address;