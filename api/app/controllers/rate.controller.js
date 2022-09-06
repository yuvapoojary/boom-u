const Rate = require('../models/rate.model.js')

// Create and Save a new rate
exports.create = (req, res) => {
  if (!req.body.rate) {
    return res.status(400).send({
      message: 'Rating can not be empty',
    })
  }
  if (!req.body.buyer) {
    return res.status(400).send({
      message: 'Buyer can not be empty',
    })
  }

  if (!req.body.seller) {
    return res.status(400).send({
      message: 'Seller can not be empty',
    })
  }

  // Create a rateSeller
  const rateSeller = new Rate({
    buyer: req.body.buyer,
    seller: req.body.seller,
    rating: req.body.rate,
    type: req.body.type,
    feedback: req.body.feedback,
  })

  // Save rateSeller in the database
  rateSeller
    .save()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while creating the rating Seller.',
      })
    })
}

// Retrieve and return all rates from the database.
exports.findAll = (req, res) => {
  Rate.find()
    .populate('buyer')
    .populate('seller')
    .then((rateSeller) => {
      res.send(rateSeller)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving rateSeller.',
      })
    })
}

// Find a single rate with a rateId
exports.findOne = (req, res) => {
  Rate.findById(req.params.rateId)
    .populate('buyer')
    .populate('seller')
    .then((rateSeller) => {
      if (!rateSeller) {
        return res.status(404).send({
          message: 'rateSeller not found with id ' + req.params.rateId,
        })
      }
      res.send(rateSeller)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'rateSeller not found with id ' + req.params.rateId,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving rateSeller with id ' + req.params.rateId,
      })
    })
}
exports.findBySeller = (req, res) => {
  Rate.find({ seller: req.params.sellerId })
    .populate('buyer')
    .populate('seller')
    .then((rateSeller) => {
      if (!rateSeller) {
        return res.status(404).send({
          message: 'rateSeller not found with id ' + req.params.rateId,
        })
      }
      res.send(rateSeller)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'rateSeller not found with id ' + req.params.rateId,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving rateSeller with id ' + req.params.rateId,
      })
    })
}

// Update a rate identified by the rateId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.status) {
    return res.status(400).send({
      message: 'Rate Status can not be empty',
    })
  }

  // Find rateSeller and update it with the request body
  Rate.findByIdAndUpdate(
    req.params.rateId,
    {
      status: true,
    },
    { new: true }
  )
    .then((rateSeller) => {
      if (!rateSeller) {
        return res.status(404).send({
          message: 'Rate not found with id ' + req.params.rateId,
        })
      }
      res.send(rateSeller)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Rate not found with id ' + req.params.rateId,
        })
      }
      return res.status(500).send({
        message: 'Error updating rateSeller with id ' + req.params.rateId,
      })
    })
}

// Delete a rate with the specified rateId in the request
exports.delete = (req, res) => {
  Rate.findByIdAndRemove(req.params.rateId)
    .then((rateSeller) => {
      if (!rateSeller) {
        return res.status(404).send({
          message: 'Rate not found with id ' + req.params.rateId,
        })
      }
      res.send({ message: 'Rate deleted successfully!' })
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Rate not found with id ' + req.params.rateId,
        })
      }
      return res.status(500).send({
        message: 'Could not delete rateSeller with id ' + req.params.rateId,
      })
    })
}
