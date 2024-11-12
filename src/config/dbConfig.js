const mongoose = require("mongoose");

const { MONGO_URI } = require("./serverConfig");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Database connected on Host: ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
