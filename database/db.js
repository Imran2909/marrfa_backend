const mongoose = require("mongoose");
require("dotenv").config(); 

const connection = mongoose.connect(process.env.MONGO_URI); // Use the MONGO_URI from the .env file

module.exports = {
  connection
};
