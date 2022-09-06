module.exports = (app) => {
  const help = require('../controllers/help.controller.js')

  // Create a new help
  app.post('/help', help.create)

  // Retrieve all helps
  app.get('/help', help.findAll)

  // Retrieve a single help with helpId
  app.get('/help/:helpId', help.findOne)

  // Update a help with helpId
  app.put('/help/:helpId', help.update)

  // Delete a help with helpId
  app.delete('/help/:helpId', help.delete)
}
