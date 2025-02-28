const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  description: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});


const Task = mongoose.model("Task71", taskSchema);
module.exports = Task; 
