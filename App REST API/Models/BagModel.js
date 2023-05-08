//bag = cart
const mongoose = require("mongoose");

const bagSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    }, //ware=product
    wares: [
      {
        wareID: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("BagModel", bagSchema);
