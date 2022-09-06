const controller = require('../controllers/auth.controller');

module.exports = (app) => {
  app.post('/auth/send-otp', controller.sendOTP);
  app.post('/auth/verify-otp', controller.verifyOTP);
};
