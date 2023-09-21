mongoose = require("mongoose");

// setting up schema
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required to fill"],
    trim: true,
    maxlength: [20, "name cannot be more thatn 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
}); 

// setting up the model
module.exports = mongoose.model("Task", TaskSchema);
