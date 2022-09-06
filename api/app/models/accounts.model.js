const mongoose = require('mongoose')

const AccountSchema = mongoose.Schema(
  {
    upi: {
      type: String,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seller',
      required: true,
    },
    BankDetails: {
      AccountNumber: {
        type: String,
      },
      BankName: {
        type: String,
      },
      Branch: {
        type: String,
      },
      IFSC: {
        type: String,
      },
      AccountHolderName: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Account', AccountSchema)
