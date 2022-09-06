const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    email: String,
    otp: String,
    type: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('otp', schema);
