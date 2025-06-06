const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  bio: String,
  skills: [String],
});

module.exports = mongoose.model("Profile", profileSchema);
