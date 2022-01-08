// Require dependencies
const express = require("express");
const Cheese = require("../models/cheese");

// Set up router object
const cheeseRouter = express.Router();

// Mount routes

// index route
cheeseRouter.get("/", (req, res) => {
  Cheese.find({}, (error, allCheeses) => {
    res.json(allCheeses);
  });
});

// Export cheeseRouter
module.exports = cheeseRouter;
