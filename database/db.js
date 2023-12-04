const mongoose = require("mongoose");

const connectDB = async () =>{
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING)
    console.log(`MongoDB connection to ${connect.connection.name}`.blue)
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB ;