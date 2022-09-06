const mongoose = require('mongoose')

const PostReviewSchema = mongoose.Schema(
  {
    Recommendation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Recommendation',
      required: true,
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Buyer',
      required: true,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seller',
      required: true,
    },
    OrderID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
    Review: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  }
)

module.exports = mongoose.model('PostReview', PostReviewSchema)
