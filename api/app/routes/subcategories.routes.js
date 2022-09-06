module.exports = (app) => {
  const subcategories = require('../controllers/subcategories.controller.js')

  // Create a new subcategories
  app.post('/subcategories', subcategories.create)

  // Retrieve all subcategoriess
  app.get('/subcategories', subcategories.findAll)

  app.get('/subcategoriesbycat/:categoryID', subcategories.findByCategory)
  // Retrieve a single subcategories with subcategoriesId
  app.get('/subcategories/:subcategoriesId', subcategories.findOne)

  // Update a subcategories with subcategoriesId
  app.put('/subcategories/:subcategoriesId', subcategories.update)

  // Delete a subcategories with subcategoriesId
  app.delete('/subcategories/:subcategoriesId', subcategories.delete)
}
