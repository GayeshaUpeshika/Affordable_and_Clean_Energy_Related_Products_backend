const mongoose = require("mongoose");

const Requests = mongoose.model(
  "requests",
  new mongoose.Schema({
    name: String,
    reason: String,
    priority: String,
    serviceType: String,
    phoneNumber: String,
    buyerId: String,
    status: String,
    techId: String
  })
);

module.exports = Requests;