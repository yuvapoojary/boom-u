const mongoose = require('mongoose')
var crypto = require('crypto')
const AdminSchema = mongoose.Schema(
  {
    Email: {
      type: String,
      required: true,
    },
    hash: String,
    salt: String,
  },

  {
    timestamps: true,
  }
)
AdminSchema.methods.setPassword = function (password) {
  // Creating a unique salt for a particular user
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`)
}

AdminSchema.methods.validPassword = function (password) {
  var hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`)
  return this.hash === hash
}

module.exports = mongoose.model('Admin', AdminSchema)
