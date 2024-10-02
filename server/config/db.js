const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {})
    .then(() => {
      console.log(`MongoDB connected `);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDB;
