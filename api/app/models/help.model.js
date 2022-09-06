const mongoose = require('mongoose')

const HelpSchema = mongoose.Schema(
  {
    subject: String,
    message: String,
    requestedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Buyer',
      required: true,
    },
    status: {
      type: String,
      enum: ['Open', 'Closed'],
      required: true,
    },
  },

  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Help', HelpSchema)
