exports.getTours = (req, res) => {
  res.send("aqui");
};

exports.createTour = (req, res) => {
  const { name, pass } = req.body;

  res.json({ name, pass });
};
exports.queryTour = (req, res) => {
  const params = req.params;

  res.json(params);
};
exports.updateTour = (req, res) => {
  res.send("updated");
};
exports.deleteTour = (req, res) => {
  res.status(204).json({
    message: "success",
    data: null,
  });
};
