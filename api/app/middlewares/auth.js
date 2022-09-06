const jwt = require('jsonwebtoken');
const userTypes = require('../../config/userTypes');
const Admin = require('../models/admin.model');
const Buyer = require('../models/buyer.model');
const Seller = require('../models/seller.model');

module.exports = (userType) => async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token)
    return res.sendStatus(401).json({
      message: 'Authorization is required',
    });

  try {
    const payload = jwt.verify(token, process.env.SECRET);
    if (payload.type !== userType) return res.sendStatus(403);

    let user;

    switch (userType) {
      case userTypes.BUYER:
        user = await Buyer.findById(payload.id);
        break;
      case userTypes.SELLER:
        user = await Seller.findById(payload.id);
        break;
      case userTypes.ADMIN:
        user = await Admin.findById(payload.id);
        break;
    }

    if (!user) return res.sendStatus(404);

    req.user = user.toJSON();
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({
      message: 'Invalid authentication token',
    });
  }
};
