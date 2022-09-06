const mongoose = require('mongoose')

const HoldingSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    transactionDate: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    portfolio: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Portfolio',
      required: true,
    },
  },

  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Holding', HoldingSchema)
