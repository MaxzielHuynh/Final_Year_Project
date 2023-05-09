//booking=order/
const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },
    wares: [
      {
        wareID: {
          type: String,
        },
        count: {
          type: Number,
          default: 1,
        },
      },
    ],
    cost: {
      type: Number,
      required: true,
    },
    location: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("BookingModel", bookingSchema);
