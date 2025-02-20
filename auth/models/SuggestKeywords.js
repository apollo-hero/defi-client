const mongoose = require("mongoose");
const suggestKeywordsSchema = mongoose.Schema(
  {
    keywords: {
      type: String,
      unique: true,
    },
    isDeleted: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("suggestkeywords", suggestKeywordsSchema);
