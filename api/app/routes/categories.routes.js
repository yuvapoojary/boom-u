module.exports = (app) => {
  const categories = require('../controllers/categories.controller.js')

  // Create a new categories
  app.post('/categories', categories.create)

  // Retrieve all categoriess
  app.get('/categories', categories.findAll)

  // Retrieve a single categories with categoriesId
  app.get('/categories/:categoriesId', categories.findOne)

  // Update a categories with categoriesId
  app.put('/categories/:categoriesId', categories.update)

  // Delete a categories with categoriesId
  app.delete('/categories/:categoriesId', categories.delete)
}
