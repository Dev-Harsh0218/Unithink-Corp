// Importing required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
// Server creation
const app = express();

//cors policy
const corsOptions = {
  origin: "*", // Set the origin you want to allow
  methods: ["GET", "POST"], // Specify which HTTP methods are allowed
  allowedHeaders: ["Content-Type", "Authorization"], // Specify which headers are allowed
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.mongo_uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    // Exit the process or handle the error as needed
    process.exit(1);
  }
}

connectToDatabase();

  // Routes
  require("../routes/web")(app);

  // Start the server
  const PORT = 7000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
