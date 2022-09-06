const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema(
  {
    orderId: String,
    paymentId: String,
    amount: Number,
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
    sellerRevenue: {
      type: Number,

      required: true,
    },
    adminRevenue: {
      type: Number,

      required: true,
    },
    recommendation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Recommendation',
      required: true,
    },
    isDetailed: {
      type: Boolean,
      required: true,
      default: false,
    },
    status: {
      type: String,
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Order', OrderSchema)
