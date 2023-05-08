//ware = product
const mongoose = require("mongoose");

const wareSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    //depiction=description
    depiction: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    //group=category
    groups: {
      type: Array,
    },
    kindOf: {
      type:Array,
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
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("WareModel", wareSchema);
