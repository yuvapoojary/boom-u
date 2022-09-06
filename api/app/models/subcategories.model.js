const mongoose = require('mongoose')

const SubCategorySchema = mongoose.Schema(
  {
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    sub_category: String,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('SubCategory', SubCategorySchema)
