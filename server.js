// Require dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cheeseController = require("./controllers/cheeses");

// Initialize application
const app = express();

// Configure application settings
require("dotenv").config();

const { DATABASE_URL, PORT = 3000 } = process.env;

// Connect to database

mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

db.on("error", (error) => {
  console.log(`Error: ${error}`);
});

db.on("connected", () => {
  console.log("mongoDB connected");
});

db.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

// Mount middleware

// "cross-origin resource change" middleware
app.use(cors());

// logger middleware
app.use(morgan("dev"));

// body-parser middleware (JSON.parse)
app.use(express.json());

// Mount router middleware
app.use("/cheese", cheeseController);

// Tell app to listen on PORT
app.listen(PORT, () => {
  console.log(`Express is listening on port ${PORT}`);
});
