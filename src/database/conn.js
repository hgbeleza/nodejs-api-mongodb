const mongoose = require("mongoose");

const main = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = main;
