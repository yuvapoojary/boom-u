module.exports = (app) => {
  const accounts = require('../controllers/accounts.controller.js')

  // Create a new accounts
  app.post('/accounts', accounts.create)

  // Retrieve all accountss
  app.get('/accounts', accounts.findAll)

  // Retrieve a single accounts with accountsId
  app.get('/accounts/:accountsId', accounts.findOne)

  app.get('/accountsbyseller/:sellerId', accounts.findBySeller)

  // Update a accounts with accountsId
  app.put('/accounts/:accountsId', accounts.update)

  // Delete a accounts with accountsId
  app.delete('/accounts/:accountsId', accounts.delete)
}
