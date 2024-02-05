const express = require("express");
const {
  getTours,
  createTour,
  queryTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourController");
const ToursRouter = express.Router();

ToursRouter.route("/").get(getTours).post(createTour);
ToursRouter.route("/:id/:name?/:x?")
  .get(queryTour)
  .put(updateTour)
  .delete(deleteTour);

module.exports = ToursRouter;
