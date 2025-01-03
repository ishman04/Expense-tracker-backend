const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin"], required: true, default: "admin" }
  });
  
  module.exports = mongoose.model("Admin", adminSchema);
  