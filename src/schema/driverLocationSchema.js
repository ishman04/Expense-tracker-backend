const mongoose = require('mongoose')

const driverLocationSchema = new mongoose.Schema({
    driver: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    currentLocation: { type: String, required: true },
    isAvailable: { type: Boolean, required: true, default: true }
  });

  module.exports = mongoose.model("DriverLocation", driverLocationSchema);
  