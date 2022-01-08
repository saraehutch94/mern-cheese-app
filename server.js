// Require dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Initialize application
const app = express();

// Configure application settings
require("dotenv").config();

const { PORT = 3000 } = process.env;

// Connect to database

// Mount middleware

// "cross-origin resource change" middleware
app.use(cors());

// logger middleware
app.use(morgan("dev"));

// body-parser middleware (JSON.parse)
app.use(express.json());

// Mount routes

// index route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Tell app to listen on PORT
app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
