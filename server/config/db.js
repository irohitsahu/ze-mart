const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const dbName = process.env.DB_NAME || "test";
    const mongoURI = process.env.MONGODB_URI.replace("/?", `/${dbName}?`);

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected successfully to database: ${dbName}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
