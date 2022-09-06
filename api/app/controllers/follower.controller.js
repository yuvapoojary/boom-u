const Follower = require('../models/follower.model.js')

// Create and Save a new categories
exports.create = (req, res) => {
  // Create a follower
  const follower = new Follower({
    seller: req.body.seller,
    buyer: req.body.buyer,
  })

  // Save follower in the database
  follower
    .save()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the follower.',
      })
    })
}

// Retrieve and return all categoriess from the database.
exports.findAll = (req, res) => {
  Follower.find()
    .then((follower) => {
      res.send(follower)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving follower.',
      })
    })
}

exports.MyFollowers = (req, res) => {
  Follower.find({ seller: req.params.sellerID })
    .populate('buyer')
    .populate('seller')

    .then((follower) => {
      res.send(follower)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving follower.',
      })
    })
}

exports.IamFollowing = (req, res) => {
  Follower.find({ buyer: req.params.buyerID })
    .populate('buyer')
    .populate('seller')

    .then((follower) => {
      res.send(follower)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving follower.',
      })
    })
}

// Find a single categories with a followersId
exports.findOne = (req, res) => {
  Follower.findById(req.params.followerID)
    .then((follower) => {
      if (!follower) {
        return res.status(404).send({
          message: 'follower not found with id ' + req.params.followersId,
        })
      }
      res.send(follower)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'follower not found with id ' + req.params.followersId,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving follower with id ' + req.params.followersId,
      })
    })
}

// Update a categories identified by the followersId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.title) {
    return res.status(400).send({
      message: 'Follower Title can not be empty',
    })
  }

  // Find follower and update it with the request body
  Follower.findByIdAndUpdate(
    req.params.followersId,
    {
      title: req.body.title || 'Untitled Follower',
    },
    { new: true }
  )
    .then((follower) => {
      if (!follower) {
        return res.status(404).send({
          message: 'Follower not found with id ' + req.params.followersId,
        })
      }
      res.send(follower)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Follower not found with id ' + req.params.followersId,
        })
      }
      return res.status(500).send({
        message: 'Error updating follower with id ' + req.params.followersId,
      })
    })
}

// Delete a categories with the specified followersId in the request
exports.delete = (req, res) => {
  Follower.findByIdAndRemove(req.params.followersId)
    .then((follower) => {
      if (!follower) {
        return res.status(404).send({
          message: 'Follower not found with id ' + req.params.followersId,
        })
      }
      res.send({ message: 'Follower deleted successfully!' })
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Follower not found with id ' + req.params.followersId,
        })
      }
      return res.status(500).send({
        message: 'Could not delete follower with id ' + req.params.followersId,
      })
    })
}
