const mongoose = require("mongoose");

const connection = "mongodb://localhost:27017/mongo-cc-demo";

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
