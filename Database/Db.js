const mongoose = require("mongoose");

const URL = "mongodb://127.0.0.1:27017/On_Grid";

const ConnectDB = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = ConnectDB;
