const Buyer = require('../models/buyer.model.js')
const jwt = require('jsonwebtoken')
const userTypes = require('../../config/userTypes.js')

// Create and Save a new buyers
exports.create = (req, res) => {
  if (!req.body.token)
    return res.status(400).json({
      message: 'token is required',
    })

  if (!req.body.name) {
    return res.status(400).send({
      message: 'Buyer name can not be empty',
    })
  }

  let payload

  try {
    payload = jwt.verify(req.body.token, process.env.SECRET)
    if (payload.type !== userTypes.BUYER) return res.sendStatus(400)
  } catch (err) {
    return res.status(400).json({
      message: 'Token expired',
    })
  }
  // Create a buyer
  const buyer = new Buyer()
  ;(buyer.Name = req.body.name),
    (buyer.Email = payload.email),
    buyer.setPassword(req.body.password),
    (buyer.Country = req.body.country)
  // Save buyer in the database
  buyer
    .save()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the buyer.',
      })
    })
}

// Retrieve and return all buyerss from the database.
exports.findAll = (req, res) => {
  Buyer.find()
    .then((buyer) => {
      res.send(buyer)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving buyer.',
      })
    })
}

// Find a single buyers with a buyerId
exports.findOne = (req, res) => {
  Buyer.findById(req.params.buyerId)
    .then((buyer) => {
      if (!buyer) {
        return res.status(404).send({
          message: 'buyer not found with id ' + req.params.buyerId,
        })
      }
      res.send(buyer)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'buyer not found with id ' + req.params.buyerId,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving buyer with id ' + req.params.buyerId,
      })
    })
}

// Update a buyers identified by the buyerId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.name) {
    return res.status(400).send({
      message: 'Buyer Name can not be empty',
    })
  }
  if (!req.body.email) {
    return res.status(400).send({
      message: 'Buyer Email can not be empty',
    })
  }

  // Find buyer and update it with the request body
  Buyer.findByIdAndUpdate(
    req.params.buyerId,
    {
      Name: req.body.name,
      Email: req.body.email,
      Country: req.body.country,
    },
    { new: true }
  )
    .then((buyer) => {
      if (!buyer) {
        return res.status(404).send({
          message: 'Buyer not found with id ' + req.params.buyerId,
        })
      }
      res.send(buyer)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Buyer not found with id ' + req.params.buyerId,
        })
      }
      return res.status(500).send({
        message: 'Error updating buyer with id ' + req.params.buyerId,
      })
    })
}

// Delete a buyers with the specified buyerId in the request
exports.delete = (req, res) => {
  Buyer.findByIdAndRemove(req.params.buyerId)
    .then((buyer) => {
      if (!buyer) {
        return res.status(404).send({
          message: 'Buyer not found with id ' + req.params.buyerId,
        })
      }
      res.send({ message: 'Buyer deleted successfully!' })
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Buyer not found with id ' + req.params.buyerId,
        })
      }
      return res.status(500).send({
        message: 'Could not delete buyer with id ' + req.params.buyerId,
      })
    })
}

exports.login = (req, res) => {
  Buyer.findOne({ Email: req.body.email }, function (err, buyer) {
    if (buyer === null) {
      return res.status(404).send({
        message: 'Buyer not found.',
      })
    } else {
      // if (buyer.hash == req.body.password) {
      if (buyer.validPassword(req.body.password)) {
        const accessToken = jwt.sign(
          { id: buyer._id, type: userTypes.BUYER },
          process.env.SECRET
        )
        return res.status(201).send({
          message: 'Buyer Logged In',
          ...buyer,
          accessToken,
        })
      } else {
        return res.status(400).send({
          message: 'Wrong Password',
        })
      }
    }
  })
}

exports.getCurrentBuyer = async (req, res) => {
  res.json(req.user)
}
