module.exports = (app) => {
  const holding = require('../controllers/holding.controller.js')

  // Create a new holding
  app.post('/holding', holding.create)

  // Retrieve all holdings
  app.get('/holding', holding.findAll)

  // Retrieve a single holding with holdingId
  app.get('/holding/:holdingId', holding.findOne)

  app.get('/portfolioHoldings/:portfolio', holding.findPortfolioHoldings)
  // Update a holding with holdingId
  app.put('/holding/:holdingId', holding.update)

  // Delete a holding with holdingId
  app.delete('/holding/:holdingId', holding.delete)
}
