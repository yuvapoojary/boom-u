const Portfolio = require('../models/portfolio.model.js')

// Create and Save a new portfolios
exports.create = (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      message: 'portfolio title can not be empty',
    })
  }
  if (!req.body.description) {
    return res.status(400).send({
      message: 'portfolio Description can not be empty',
    })
  }

  // Create a portfolio
  const portfolio = new Portfolio({
    title: req.body.title,
    description: req.body.description,
    buyer: req.body.buyer,
  })

  // Save portfolio in the database
  portfolio
    .save()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the portfolio.',
      })
    })
}

// Retrieve and return all portfolioss from the database.
exports.findAll = (req, res) => {
  Portfolio.find()
    .populate('buyer')
    .then((portfolio) => {
      res.send(portfolio)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving portfolio.',
      })
    })
}

// Find a single portfolios with a portfolioId
exports.findOne = (req, res) => {
  Portfolio.findById(req.params.portfolioId)
    .populate('buyer')
    .then((portfolio) => {
      if (!portfolio) {
        return res.status(404).send({
          message: 'portfolio not found with id ' + req.params.portfolioId,
        })
      }
      res.send(portfolio)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'portfolio not found with id ' + req.params.portfolioId,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving portfolio with id ' + req.params.portfolioId,
      })
    })
}

exports.findBuyerPortfolio = (req, res) => {
  Portfolio.find({ buyer: req.params.buyer })
    .populate('buyer')
    .then((portfolio) => {
      if (!portfolio) {
        return res.status(404).send({
          message: 'portfolio not found with id ' + req.params.portfolioId,
        })
      }
      res.send(portfolio)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'portfolio not found with id ' + req.params.portfolioId,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving portfolio with id ' + req.params.portfolioId,
      })
    })
}

// Update a portfolios identified by the portfolioId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.title) {
    return res.status(400).send({
      message: 'Portfolio Title can not be empty',
    })
  }

  if (!req.body.description) {
    return res.status(400).send({
      message: 'Portfolio Description can not be empty',
    })
  }
  // Find portfolio and update it with the request body
  Portfolio.findByIdAndUpdate(
    req.params.portfolioId,
    {
      title: req.body.title,
      description: req.body.description,
    },
    { new: true }
  )
    .then((portfolio) => {
      if (!portfolio) {
        return res.status(404).send({
          message: 'Portfolio not found with id ' + req.params.portfolioId,
        })
      }
      res.send(portfolio)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Portfolio not found with id ' + req.params.portfolioId,
        })
      }
      return res.status(500).send({
        message: 'Error updating portfolio with id ' + req.params.portfolioId,
      })
    })
}

// Delete a portfolios with the specified portfolioId in the request
exports.delete = (req, res) => {
  Portfolio.findByIdAndRemove(req.params.portfolioId)
    .then((portfolio) => {
      if (!portfolio) {
        return res.status(404).send({
          message: 'Portfolio not found with id ' + req.params.portfolioId,
        })
      }
      res.send({ message: 'Portfolio deleted successfully!' })
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Portfolio not found with id ' + req.params.portfolioId,
        })
      }
      return res.status(500).send({
        message: 'Could not delete portfolio with id ' + req.params.portfolioId,
      })
    })
}
