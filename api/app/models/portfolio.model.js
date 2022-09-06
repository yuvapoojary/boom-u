const mongoose = require('mongoose')

const PortfolioSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
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

module.exports = mongoose.model('Portfolio', PortfolioSchema)
