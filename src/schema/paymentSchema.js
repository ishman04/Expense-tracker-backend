const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    ride: { type: mongoose.Schema.Types.ObjectId, ref: "Ride", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ["card", "wallet", "cash"], required: true },
    status: { type: String, enum: ["success", "failed"], required: true },
    transactionId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, required: true }
  });
  
  module.exports = mongoose.model("Payment", paymentSchema);
  