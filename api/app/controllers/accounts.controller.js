const { LookoutEquipment } = require('aws-sdk')
const Account = require('../models/accounts.model.js')

// Create and Save a new accounts
exports.create = (req, res) => {
  if (!req.body.accNum) {
    return res.status(400).send({
      message: 'account Number can not be empty',
    })
  }
  if (!req.body.ifsc) {
    return res.status(400).send({
      message: 'IFSC can not be empty',
    })
  }

  // Create a account
  const account = new Account()
  ;(account.upi = req.body.upi || null),
    (account.seller = req.body.seller),
    (account.BankDetails.AccountNumber = req.body.accNum),
    (account.BankDetails.BankName = req.body.bankName),
    (account.BankDetails.Branch = req.body.branch),
    (account.BankDetails.IFSC = req.body.ifsc),
    (account.BankDetails.AccountHolderName = req.body.accName),
    // Save account in the database
    account
      .save()
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while creating the account.',
        })
      })
}

// Retrieve and return all accountss from the database.
exports.findAll = (req, res) => {
  Account.find()
    .populate('seller')
    .then((account) => {
      res.send(account)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving account.',
      })
    })
}

// Find a single accounts with a accountsId
exports.findOne = (req, res) => {
  Account.findById(req.params.accountsId)
    .then((account) => {
      if (!account) {
        return res.status(404).send({
          message: 'account not found with id ' + req.params.accountsId,
        })
      }
      res.send(account)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'account not found with id ' + req.params.accountsId,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving account with id ' + req.params.accountsId,
      })
    })
}

exports.findBySeller = (req, res) => {
  Account.find({ seller: req.params.sellerId })
    .populate('seller')
    .then((account) => {
      if (!account) {
        return res.status(404).send({
          message: 'account not found with id ' + req.params.accountsId,
        })
      }
      res.send(account)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'account not found with id ' + req.params.accountsId,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving account with id ' + req.params.accountsId,
      })
    })
}

// Update a accounts identified by the accountsId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.title) {
    return res.status(400).send({
      message: 'Account Title can not be empty',
    })
  }

  // Find account and update it with the request body
  Account.findByIdAndUpdate(
    req.params.accountsId,
    {
      title: req.body.title || 'Untitled Account',
    },
    { new: true }
  )
    .then((account) => {
      if (!account) {
        return res.status(404).send({
          message: 'Account not found with id ' + req.params.accountsId,
        })
      }
      res.send(account)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Account not found with id ' + req.params.accountsId,
        })
      }
      return res.status(500).send({
        message: 'Error updating account with id ' + req.params.accountsId,
      })
    })
}

// Delete a accounts with the specified accountsId in the request
exports.delete = (req, res) => {
  Account.findByIdAndRemove(req.params.accountsId)
    .then((account) => {
      if (!account) {
        return res.status(404).send({
          message: 'Account not found with id ' + req.params.accountsId,
        })
      }
      res.send({ message: 'Account deleted successfully!' })
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Account not found with id ' + req.params.accountsId,
        })
      }
      return res.status(500).send({
        message: 'Could not delete account with id ' + req.params.accountsId,
      })
    })
}
