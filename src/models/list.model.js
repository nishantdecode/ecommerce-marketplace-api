const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    creatorId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    status: {
      type: String,
      enum: ["Public", "Private"],
      default: "Public",
    },
    listings: [
      {
        listingType: {
          type: String,
          required: true,
        },
        listingId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
      },
    ],
    description: {
      type: String,
      required: true,
    },
    keywords: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const List = mongoose.model("List", schema);

module.exports.List = List;
