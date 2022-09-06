const mongoose = require('mongoose')

const FollowerSchema = mongoose.Schema(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seller',
      required: true,
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Buyer',
      required: true,
    },
  },

  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Follower', FollowerSchema)
