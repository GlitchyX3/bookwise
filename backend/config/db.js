const mongoose = require('mongoose'); // Importing Mongoose to handle MongoDB interactions
require('dotenv').config(); // Importing dotenv to load environment variables from a .env file

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Attempting to connect to MongoDB using the connection string from environment variables
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Using the new URL string parser instead of the deprecated one
      useUnifiedTopology: true, // Using the new server discovery and monitoring engine
    });
    console.log('MongoDB connected...'); // Log message if the connection is successful
  } catch (err) {
    console.error(err.message); // Log any error that occurs during connection
    process.exit(1); // Exit the process with failure if connection fails
  }
};

module.exports = connectDB; // Exporting the connectDB function to be used elsewhere in the project
