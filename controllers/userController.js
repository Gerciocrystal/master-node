exports.getUsers = (req, res) => {
  res.send("aqui");
};

exports.createUser = (req, res) => {
  const { name, pass } = req.body;

  res.json({ name, pass });
};
exports.getUser = (req, res) => {
  const params = req.params;

  res.json(params);
};
exports.updateUser = (req, res) => {
  res.send("updated");
};
exports.deleteUser = (req, res) => {
  res.status(204).json({
    message: "success",
    data: null,
  });
};
