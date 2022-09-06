const uploadFile = require('../../config/s3.js')
const Recommendation = require('../models/recommendation.model.js')

// Create and Save a new recommendations
exports.create = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      message: 'Recommendation Title cant be empty',
    })
  }

  // Create a recommendation
  const recommendation = new Recommendation()
  ;(recommendation.Recommendation = req.body.title),
    (recommendation.Target = req.body.target),
    (recommendation.Seller = req.body.seller),
    (recommendation.TargetVisible = req.body.TargetVisible),
    (recommendation.TargetPeriod = req.body.targetperiod),
    (recommendation.TargetPeriodVisible = req.body.targetPeriodVisible),
    (recommendation.CurrentMarketPrice = req.body.currentmarketprice),
    (recommendation.CurrentMarketPriceVisible =
      req.body.currentmarketpriceVisible),
    (recommendation.Sector = req.body.Sector),
    (recommendation.SectorVisible = req.body.SectorVisible),
    (recommendation.MarketCaptilization = req.body.MarketCaptilization),
    (recommendation.MarketCaptilizationVisible =
      req.body.MarketCaptilizationVisible),
    (recommendation.Category = req.body.Category),
    (recommendation.CategoryVisible = req.body.CategoryVisible),
    (recommendation.category_id = req.body.category_id),
    (recommendation.sub_category_id = req.body.sub_category_id),
    (recommendation.ContentIncludes = req.body.ContentIncludes || null),
    (recommendation.Expiry = req.body.expiry || null),
    (recommendation.Sell = req.body.Sell),
    (recommendation.SellVisible = req.body.SellVisible),
    (recommendation.Buy = req.body.Buy),
    (recommendation.BuyVisible = req.body.BuyVisible),
    (recommendation.subCategoryValue = req.body.subCategoryValue),
    (recommendation.price = req.body.price),
    (recommendation.isDetailedReport = req.body.isDetailedReport),
    (recommendation.DetailedReport.ValuationRatioData.PE = req.body.PE || null),
    (recommendation.DetailedReport.ValuationRatioData.PBE =
      req.body.PBE || null),
    (recommendation.DetailedReport.Includes = req.body.DetailIncludes || null),
    (recommendation.StopLoss = req.body.stoploss || null),
    (recommendation.DetailedReport.ValuationRatioData.EBITDA =
      req.body.EBITDA || null),
    (recommendation.DetailedReport.ValuationRatioData.RoE =
      req.body.RoE || null),
    (recommendation.DetailedReport.ValuationRatioData.EPS =
      req.body.EPS || null),
    (recommendation.DetailedReport.ValuationRatioData.DividendYield =
      req.body.DividendYield || null),
    (recommendation.DetailedReport.PricePerformance.one_week =
      req.body.one_week || null),
    (recommendation.DetailedReport.PricePerformance.one_month =
      req.body.one_month || null),
    (recommendation.DetailedReport.PricePerformance.three_months =
      req.body.three_months || null),
    (recommendation.DetailedReport.PricePerformance.one_year =
      req.body.one_year || null),
    (recommendation.DetailedReport.PricePerformance.three_years =
      req.body.three_years || null),
    (recommendation.DetailedReport.media = req.body.media || null),
    (recommendation.DetailedReport.Price = req.body.Price || null),
    (recommendation.Expiry = req.body.Expiry || null)

  if (req.file) {
    recommendation.Image = await uploadFile(req.file.buffer, req.file.mimetype)
  }

  // Save recommendation in the database
  recommendation
    .save()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while creating the recommendation.',
      })
    })
}

// Retrieve and return all recommendationss from the database.
exports.findAll = (req, res) => {
  Recommendation.find()
    .populate('category_id')
    .populate('Seller')
    .populate('sub_category_id')
    .then((recommendation) => {
      res.send(recommendation)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving recommendation.',
      })
    })
}

exports.findBySeller = (req, res) => {
  Recommendation.find({ Seller: req.params.sellerId })
    .populate('category_id')
    .populate('Seller')
    .populate('sub_category_id')
    .then((recommendation) => {
      res.send(recommendation)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving recommendation.',
      })
    })
}

// Find a single recommendations with a recommendationsId
exports.findOne = (req, res) => {
  Recommendation.findById(req.params.recommendationId)
    .populate('category_id')
    .populate('Seller')
    .populate('sub_category_id')
    .then((recommendation) => {
      if (!recommendation) {
        return res.status(404).send({
          message:
            'recommendation not found with id ' + req.params.recommendationId,
        })
      }
      res.send(recommendation)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message:
            'recommendation not found with id ' + req.params.recommendationId,
        })
      }
      return res.status(500).send({
        message:
          'Error retrieving recommendation with id ' +
          req.params.recommendationId,
      })
    })
}

// Update a recommendations identified by the recommendationsId in the request
exports.update = async (req, res) => {
  // Validate Request
  if (!req.body.title) {
    return res.status(400).send({
      message: 'Recommendation Name can not be empty',
    })
  }

  const dataToUpdate = {
    Name: req.body.name,
    ...req.body,
  }

  if (req.file) {
    recommendation.Image = await uploadFile(req.file.buffer, req.file.mimetype)
  }
  // Find recommendation and update it with the request body
  Recommendation.findByIdAndUpdate(req.params.recommendationsId, dataToUpdate, {
    new: true,
  })
    .then((recommendation) => {
      if (!recommendation) {
        return res.status(404).send({
          message:
            'Recommendation not found with id ' + req.params.recommendationsId,
        })
      }
      res.send(recommendation)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message:
            'Recommendation not found with id ' + req.params.recommendationsId,
        })
      }
      return res.status(500).send({
        message:
          'Error updating recommendation with id ' +
          req.params.recommendationId,
      })
    })
}

// Delete a recommendations with the specified recommendationsId in the request
exports.delete = (req, res) => {
  Recommendation.findByIdAndRemove(req.params.recommendationId)
    .then((recommendation) => {
      if (!recommendation) {
        return res.status(404).send({
          message:
            'Recommendation not found with id ' + req.params.recommendationId,
        })
      }
      res.send({ message: 'Recommendation deleted successfully!' })
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message:
            'Recommendation not found with id ' + req.params.recommendationId,
        })
      }
      return res.status(500).send({
        message:
          'Could not delete recommendation with id ' +
          req.params.recommendationId,
      })
    })
}
