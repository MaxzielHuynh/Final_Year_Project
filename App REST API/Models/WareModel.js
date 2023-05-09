//ware = product
const mongoose = require("mongoose");
const wareSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    depiction: {
      type: String,
      required: true,
    }, //depiction=description
    img: {
      type: String,
      required: true,
    },
    groups: {
      type: Array,
    }, //group=category
    kindOf: {
      type: Array,
    },
    size: {
      type: Array,
    },
    cost: {
      type: Number,
      required: true,
    },
    forSales: {
      type: Boolean,
      default: true,
    },},{ timestamps: true }
);
module.exports = mongoose.model("WareModel", wareSchema);
