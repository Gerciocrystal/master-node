const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "O nome é obrigatorio"],
    unique: true,
  },
  rating: { type: Number, default: 4.5 },
  price: { type: Number, required: true },
});

const Tour = mongoose.model("tour", tourSchema);

module.exports = Tour;
