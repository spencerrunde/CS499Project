const mongoose = require("mongoose");

// Setting Schema as a type of mongoose schema
const Schema = mongoose.Schema;

// Defining user schema
const userSchema = new Schema({
  email: {
    type: String,
    unique: true, // Requiring unique email entry
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Defining database to be used for User data
const userDB = mongoose.connection.useDb("User");

// Creating mongoose model with collection name users, using definined schema
const userInfo = userDB.model("users", userSchema);

// Exporting model
module.exports = userInfo;
