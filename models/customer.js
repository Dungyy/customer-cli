const mongoose = require("mongoose");

// Customer Schema
const CustomerSchema = mongoose.Schema({
  FirstName: { type: String },
  LastName: { type: String },
  Phone: { type: String },
  Email: { type: String },
  OrderNumber: { type: Number },
  OrderStatus: { type: String },
  OrderCompleted: { type: Number },
});
// Export
module.exports = mongoose.model("Customer", CustomerSchema);
