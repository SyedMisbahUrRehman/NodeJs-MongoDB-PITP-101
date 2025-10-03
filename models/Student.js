const mongoose = require('mongoose');

// Student Schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true }
}, { timestamps: true });

// Export model
module.exports = mongoose.model('Student', studentSchema);
