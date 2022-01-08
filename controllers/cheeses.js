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

delete route;
cheeseRouter.delete("/:id", (req, res) => {
  Cheese.findByIdAndDelete(req.params.id, (error, deletedCheese) => {
    res.json(deletedCheese);
  });
});

// delete route
// cheeseRouter.delete("/:id", async (req, res) => {
//   try {
//     res.json(await Cheese.findByIdAndRemove(req.params.id));
//   } catch (error) {
//     console.log(error);
//     res.status(404).json(error);
//   }
// });

// update route
cheeseRouter.put("/:id", async (req, res) => {
  await Cheese.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedCheese) => {
      res.json(updatedCheese);
    }
  );
});

// create route
cheeseRouter.post("/", (req, res) => {
  Cheese.create(req.body, (error, createdCheese) => {
    res.json(createdCheese);
  });
});

// show route

// Export cheeseRouter
module.exports = cheeseRouter;
