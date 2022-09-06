const Transaction = require('../models/transaction.model.js')

// Create and Save a new transactions
exports.create = (req, res) => {
  if (!req.body.TransactionID) {
    return res.status(400).send({
      message: 'Transaction ID can not be empty',
    })
  }

  // Create a transaction
  const transaction = new Transaction({
    TransactionID: req.body.TransactionID,
    AmountPaid: req.body.amount,
  })

  // Save transaction in the database
  transaction
    .save()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the transaction.',
      })
    })
}

// Retrieve and return all transactionss from the database.
exports.findAll = (req, res) => {
  Transaction.find()
    .then((transaction) => {
      res.send(transaction)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving transaction.',
      })
    })
}

// Find a single transactions with a transactionId
exports.findOne = (req, res) => {
  Transaction.findById(req.params.transactionId)
    .then((transaction) => {
      if (!transaction) {
        return res.status(404).send({
          message: 'transaction not found with id ' + req.params.transactionId,
        })
      }
      res.send(transaction)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'transaction not found with id ' + req.params.transactionId,
        })
      }
      return res.status(500).send({
        message:
          'Error retrieving transaction with id ' + req.params.transactionId,
      })
    })
}

// Update a transactions identified by the transactionId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.title) {
    return res.status(400).send({
      message: 'Transaction Title can not be empty',
    })
  }

  // Find transaction and update it with the request body
  Transaction.findByIdAndUpdate(
    req.params.transactionId,
    {
      title: req.body.title || 'Untitled Transaction',
    },
    { new: true }
  )
    .then((transaction) => {
      if (!transaction) {
        return res.status(404).send({
          message: 'Transaction not found with id ' + req.params.transactionId,
        })
      }
      res.send(transaction)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Transaction not found with id ' + req.params.transactionId,
        })
      }
      return res.status(500).send({
        message:
          'Error updating transaction with id ' + req.params.transactionId,
      })
    })
}

// Delete a transactions with the specified transactionId in the request
exports.delete = (req, res) => {
  Transaction.findByIdAndRemove(req.params.transactionId)
    .then((transaction) => {
      if (!transaction) {
        return res.status(404).send({
          message: 'Transaction not found with id ' + req.params.transactionId,
        })
      }
      res.send({ message: 'Transaction deleted successfully!' })
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Transaction not found with id ' + req.params.transactionId,
        })
      }
      return res.status(500).send({
        message:
          'Could not delete transaction with id ' + req.params.transactionId,
      })
    })
}
