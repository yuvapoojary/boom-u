const userTypes = require('../../config/userTypes.js')
const auth = require('../middlewares/auth.js')

module.exports = (app) => {
  const orders = require('../controllers/order.controller.js')

  // Create a new orders
  app.post('/orders', auth(userTypes.BUYER), orders.create)

  app.post('/orders/:id', orders.insertOrder)

  // Retrieve all orderss
  app.get('/orders', orders.findAll)

  // Retrieve a single orders with ordersId
  app.get('/orders/:orderId', orders.findOne)

  app.get('/order/:Id', orders.findById)
  app.get(
    '/ordersByRecommendation/:recommendationId',
    orders.findByRecommendation
  )
  app.get('/Buyerorders/:buyerId', orders.findByBuyer)

  app.get('/sellerOrders/:sellerId', orders.findBySeller)

  // Update a orders with ordersId
  app.put('/orders/:orderId', orders.update)

  // Delete a orders with ordersId
  app.delete('/orders/:orderId', orders.delete)

  app.get('/contentorders/:sellerId', orders.findByContent)
  app.get('/detailedorders/:sellerId', orders.findByDetailed)
}
