const mongoose = require('mongoose')

const TransactionSchema = mongoose.Schema(
  {
    AmountPaid: {
      type: String,
      required: true,
    },
    TransactionID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Transaction', TransactionSchema)
