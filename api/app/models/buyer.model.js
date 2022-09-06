const mongoose = require('mongoose')
var crypto = require('crypto')
const BuyerSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Country: {
      type: String,
      enum: ['UK', 'US', 'IN', 'HK'],
      default: 'IN',
      required: true,
    },
    hash: String,
    salt: String,
  },

  {
    timestamps: true,
  }
)
BuyerSchema.methods.setPassword = function (password) {
  // Creating a unique salt for a particular user
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`)
}

BuyerSchema.methods.validPassword = function (password) {
  var hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`)
  return this.hash === hash
}

module.exports = mongoose.model('Buyer', BuyerSchema)
