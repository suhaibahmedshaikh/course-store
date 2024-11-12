const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Types.ObjectId,
      ref: "Course",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Purchase = mongoose.model("purchase", purchaseSchema);

module.exports = Purchase;
