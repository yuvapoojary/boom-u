module.exports = (app) => {
  const rate = require('../controllers/rate.controller.js')

  // Create a new rate
  app.post('/rate', rate.create)

  // Retrieve all rates
  app.get('/rate', rate.findAll)

  // Retrieve a single rate with rateId
  app.get('/rate/:rateId', rate.findOne)

  // Retrieve all rate with SellerID
  app.get('/sellerRatings/:sellerId', rate.findBySeller)

  // Update a rate with rateId
  app.put('/rate/:rateId', rate.update)

  // Delete a rate with rateId
  app.delete('/rate/:rateId', rate.delete)
}
