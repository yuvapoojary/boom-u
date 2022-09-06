const userTypes = require('../../config/userTypes.js');
const auth = require('../middlewares/auth.js');

module.exports = (app) => {
  const buyer = require('../controllers/buyer.controller.js');

  // Create a new buyer
  app.post('/buyer', buyer.create);
  //Seller login
  app.post('/buyer/login/', buyer.login);

  // Retrieve all buyers
  app.get('/buyer', auth(userTypes.BUYER), buyer.findAll);

  // Get logged in buyer
  app.get('/buyer/@me', auth(userTypes.BUYER), buyer.getCurrentBuyer);

  // Retrieve a single buyer with buyerId
  app.get('/buyer/:buyerId', auth(userTypes.BUYER), buyer.findOne);

  // Update a buyer with buyerId
  app.put('/buyer/:buyerId', auth(userTypes.BUYER), buyer.update);

  // Delete a buyer with buyerId
  app.delete('/buyer/:buyerId', auth(userTypes.BUYER), buyer.delete);
};
