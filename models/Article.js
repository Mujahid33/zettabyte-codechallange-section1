const mongoose = require('mongoose')

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    image: {
      type: String,
    },
    author: {
      type: String,
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Article", Schema)