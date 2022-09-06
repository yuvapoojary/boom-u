const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema(
  {
    title: String,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Category', CategorySchema)
