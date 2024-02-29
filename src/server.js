// Importing required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
// Server creation
const app = express();

//cors policy
const corsOptions = {
  origin: 'http://localhost:5173', // Set the origin you want to allow
  methods: ['GET', 'POST'], // Specify which HTTP methods are allowed
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify which headers are allowed
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongo_uri="mongodb+srv://ncompvt:jWyC6B7xwouz01e0@cluster0.rdytmzt.mongodb.net/UniThink?retryWrites=true&w=majority";

async function connectToDatabase() {
  try {
    await mongoose.connect(mongo_uri);
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

