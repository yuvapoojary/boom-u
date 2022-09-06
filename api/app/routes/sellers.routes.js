const userTypes = require('../../config/userTypes.js')
const auth = require('../middlewares/auth.js')

module.exports = (app) => {
  const sellers = require('../controllers/sellers.controller.js')

  // Create a new sellers
  app.post('/sellers', sellers.create)
  //Seller login
  app.post('/sellers/login/', sellers.login)

  // Retrieve all sellerss
  app.get('/sellers', auth(userTypes.SELLER), sellers.findAll)

  // Get logged in sellers
  app.get('/sellers/@me', auth(userTypes.SELLER), sellers.getCurrentSellers)

  // Retrieve a single sellers with sellersId
  app.get('/sellers/:sellersId', sellers.findOne)

  // Update a sellers with sellersId
  app.put('/sellers/:sellersId', auth(userTypes.SELLER), sellers.update)

  // Delete a sellers with sellersId
  app.delete('/sellers/:sellersId', auth(userTypes.SELLER), sellers.delete)
}
