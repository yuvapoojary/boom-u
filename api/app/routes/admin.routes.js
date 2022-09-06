const userTypes = require('../../config/userTypes.js');
const auth = require('../middlewares/auth.js');

module.exports = (app) => {
  const admin = require('../controllers/admin.controller.js');

  // Create a new admin
  app.post('/admin', admin.create);
  //Seller login
  app.post('/admin/login/', admin.login);

  // Retrieve all admins
  app.get('/admin', auth(userTypes.ADMIN), admin.findAll);

  // Retrieve a single admin with adminId
  app.get('/admin/:adminId', auth(userTypes.ADMIN), admin.findOne);

  // Update a admin with adminId
  app.put('/admin/:adminId', auth(userTypes.ADMIN), admin.update);

  // Delete a admin with adminId
  app.delete('/admin/:adminId', auth(userTypes.ADMIN), admin.delete);
};
