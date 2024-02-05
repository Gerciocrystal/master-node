const express = require("express");
const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getUser,
} = require("../controllers/userController");
const userRoutes = express.Router();

userRoutes.param("id", (req, res, next, val) => {
  if (!val) res.json({ message: "Error" });
  console.log(val);
  next();
});
userRoutes.route("/").get(getUsers).post(createUser);
userRoutes.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = userRoutes;
