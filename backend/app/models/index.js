const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.item = require("./item.model");
db.order = require("./order.model");
db.request = require("./request.model");
db.deliveryaddr = require("./deliveryaddr.model");

db.ROLES = ["buyer", "seller", "tutor","tech"];

module.exports = db;