const express = require("express");
const ToursRouter = require("./tours");
const userRoutes = require("./user");
const Routes = express.Router();

Routes.use("/tours", ToursRouter);
Routes.use("/user", userRoutes);
Routes.all("/*", (req, res) => {
  res.status(404).send("Page not Found");
});

module.exports = Routes;
