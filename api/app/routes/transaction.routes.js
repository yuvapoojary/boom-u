module.exports = (app) => {
  const transactions = require('../controllers/transaction.controller.js')

  // Create a new transactions
  app.post('/transactions', transactions.create)

  // Retrieve all transactionss
  app.get('/transactions', transactions.findAll)

  // Retrieve a single transactions with transactionId
  app.get('/transactions/:transactionId', transactions.findOne)

  // Update a transactions with transactionId
  app.put('/transactions/:transactionId', transactions.update)

  // Delete a transactions with transactionId
  app.delete('/transactions/:transactionId', transactions.delete)
}
