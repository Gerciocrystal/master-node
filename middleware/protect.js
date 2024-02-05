exports.protect = (req, res, next) => {
  console.log("Passando do middleware");
  next();
};
