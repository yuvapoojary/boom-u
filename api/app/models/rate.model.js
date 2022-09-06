const mongoose = require('mongoose')

const PostReviewSchema = mongoose.Schema(
  {
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
    type: {
      type: String,
      enum: ['Suggestion', 'something_wrong', 'compliment'],
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Rate', PostReviewSchema)
