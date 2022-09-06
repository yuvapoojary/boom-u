const mongoose = require('mongoose')
var crypto = require('crypto')
const SellerSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Username: {
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
    whatRecommend: {
      type: String,
      required: true,
    },
    Type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    RegID: {
      type: String,
      required: false,
      default: null,
    },
    About: {
      type: String,
      required: true,
    },
    hash: String,
    salt: String,
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  }
)
SellerSchema.methods.setPassword = function (password) {
  // Creating a unique salt for a particular user
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`)
}

SellerSchema.methods.validPassword = function (password) {
  var hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`)
  return this.hash === hash
}

module.exports = mongoose.model('Seller', SellerSchema)
