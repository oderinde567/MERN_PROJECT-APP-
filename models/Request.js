const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  category: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: "Pending" },
  userId: { type: String }, // ideally link to User _id
}, { timestamps: true });

module.exports = mongoose.model("Request", requestSchema);
