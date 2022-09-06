const Review = require('../models/postreview.model')

// Create and Save a new review
exports.create = (req, res) => {
  if (!req.body.review) {
    return res.status(400).send({
      message: 'Review can not be empty',
    })
  }
  if (!req.body.orderID) {
    return res.status(400).send({
      message: 'OrderID can not be empty',
    })
  }

  // Create a review
  const review = new Review()

  ;(review.Recommendation = req.body.recommendation),
    (review.buyer = req.body.buyer),
    (review.OrderID = req.body.orderID),
    (review.Review = req.body.review),
    (review.seller = req.body.seller),
    (review.status = false),
    // Save review in the database
    review
      .save()
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while creating the review.',
        })
      })
}

// Retrieve and return all reviews from the database.
exports.findAll = (req, res) => {
  Review.find()
    .populate('seller')
    .populate('buyer')
    .populate('Recommendation')
    .populate('OrderID')

    .then((review) => {
      res.send(review)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving review.',
      })
    })
}

exports.findAccepted = (req, res) => {
  Review.find({ Recommendation: req.params.recommendationId, status: true })
    .populate('seller')
    .populate('buyer')
    .populate('Recommendation')
    .populate('OrderID')

    .then((review) => {
      res.send(review)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving review.',
      })
    })
}

exports.findBySeller = (req, res) => {
  Review.find({ seller: req.params.sellerId })
    .populate('seller')
    .populate('buyer')
    .populate('Recommendation')
    .populate('OrderID')

    .then((review) => {
      res.send(review)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving review.',
      })
    })
}

// Find a single review with a reviewId
exports.findOne = (req, res) => {
  Review.findById(req.params.reviewId)
    .populate('seller')
    .populate('buyer')
    .populate('Recommendation')
    .populate('OrderID')
    .then((review) => {
      if (!review) {
        return res.status(404).send({
          message: 'review not found with id ' + req.params.reviewId,
        })
      }
      res.send(review)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'review not found with id ' + req.params.reviewId,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving review with id ' + req.params.reviewId,
      })
    })
}

// Update a review identified by the reviewId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.status) {
    return res.status(400).send({
      message: 'Status has to be changed',
    })
  } else {
  }

  // Find review and update it with the request body
  Review.findByIdAndUpdate(
    req.params.reviewId,
    {
      status: req.body.status,
    },

    { new: true }
  )
    .then((review) => {
      if (!review) {
        return res.status(404).send({
          message: 'Review not found with id ' + req.params.reviewId,
        })
      }
      res.send(review)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Review not found with id ' + req.params.reviewId,
        })
      }
      return res.status(500).send({
        message: 'Error updating review with id ' + req.params.reviewId,
      })
    })
}

// Delete a review with the specified reviewId in the request
exports.delete = (req, res) => {
  Review.findByIdAndRemove(req.params.reviewId)
    .then((review) => {
      if (!review) {
        return res.status(404).send({
          message: 'Review not found with id ' + req.params.reviewId,
        })
      }
      res.send({ message: 'Review deleted successfully!' })
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Review not found with id ' + req.params.reviewId,
        })
      }
      return res.status(500).send({
        message: 'Could not delete review with id ' + req.params.reviewId,
      })
    })
}
