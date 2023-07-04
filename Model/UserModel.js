const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true["required to fill"],
  },
  phoneNo: {
    type: Number,
    requried: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  // Age: {
  //   type: String,
  //   required: true,
  // },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("/user", UserSchema);
module.exports = User;
