const Holding = require('../models/holding.model.js')

// Create and Save a new holdings
exports.create = (req, res) => {
  if (!req.body.quantity) {
    return res.status(400).send({
      message: 'Quantity can not be empty',
    })
  }
  if (!req.body.price) {
    return res.status(400).send({
      message: 'holding Price can not be empty',
    })
  }
  if (!req.body.transactionDate) {
    return res.status(400).send({
      message: 'holding Transaction Date can not be empty',
    })
  }
  if (!req.body.portfolio) {
    return res.status(400).send({
      message: 'holding portfolio can not be empty',
    })
  }
  if (!req.body.type) {
    return res.status(400).send({
      message: 'holding Type can not be empty',
    })
  }

  // Create a holding
  const holding = new Holding({
    type: req.body.type,
    portfolio: req.body.portfolio,
    transactionDate: req.body.transactionDate,
    price: req.body.price,
    quantity: req.body.quantity,
  })

  // Save holding in the database
  holding
    .save()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the holding.',
      })
    })
}

// Retrieve and return all holdingss from the database.
exports.findAll = (req, res) => {
  Holding.find()
    .populate('portfolio')
    .then((holding) => {
      res.send(holding)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving holding.',
      })
    })
}

// Find a single holdings with a holdingId
exports.findOne = (req, res) => {
  Holding.findById(req.params.holdingId)
    .populate('portfolio')
    .then((holding) => {
      if (!holding) {
        return res.status(404).send({
          message: 'holding not found with id ' + req.params.holdingId,
        })
      }
      res.send(holding)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'holding not found with id ' + req.params.holdingId,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving holding with id ' + req.params.holdingId,
      })
    })
}

exports.findPortfolioHoldings = (req, res) => {
  Holding.find({ portfolio: req.params.portfolio })
    .populate('portfolio')
    .then((holding) => {
      if (!holding) {
        return res.status(404).send({
          message: 'holding not found with id ' + req.params.holdingId,
        })
      }
      res.send(holding)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'holding not found with id ' + req.params.holdingId,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving holding with id ' + req.params.holdingId,
      })
    })
}

// Update a holdings identified by the holdingId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.title) {
    return res.status(400).send({
      message: 'Holding Title can not be empty',
    })
  }

  if (!req.body.description) {
    return res.status(400).send({
      message: 'Holding Description can not be empty',
    })
  }
  // Find holding and update it with the request body
  Holding.findByIdAndUpdate(
    req.params.holdingId,
    {
      title: req.body.title,
      description: req.body.description,
    },
    { new: true }
  )
    .then((holding) => {
      if (!holding) {
        return res.status(404).send({
          message: 'Holding not found with id ' + req.params.holdingId,
        })
      }
      res.send(holding)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Holding not found with id ' + req.params.holdingId,
        })
      }
      return res.status(500).send({
        message: 'Error updating holding with id ' + req.params.holdingId,
      })
    })
}

// Delete a holdings with the specified holdingId in the request
exports.delete = (req, res) => {
  Holding.findByIdAndRemove(req.params.holdingId)
    .then((holding) => {
      if (!holding) {
        return res.status(404).send({
          message: 'Holding not found with id ' + req.params.holdingId,
        })
      }
      res.send({ message: 'Holding deleted successfully!' })
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Holding not found with id ' + req.params.holdingId,
        })
      }
      return res.status(500).send({
        message: 'Could not delete holding with id ' + req.params.holdingId,
      })
    })
}
