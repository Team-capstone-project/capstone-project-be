const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
let reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    comment: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    isAproved: {
        type:Boolean,
        default: false,
    }
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Review", reviewSchema);
