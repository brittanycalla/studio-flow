const mongoose = require("mongoose");

const ShotSchema = new mongoose.Schema({
  // filename: {
  //   type: String,
  //   required: true,
  // },
  shoot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shoot",
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
  },
  userId: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("Shot", ShotSchema);