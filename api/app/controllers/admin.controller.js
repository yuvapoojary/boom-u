const Admin = require('../models/admin.model.js');
const jwt = require('jsonwebtoken');
const userTypes = require('../../config/userTypes.js');

// Create and Save a new admins
exports.create = (req, res) => {
  if (!req.body.token)
    return res.status(400).json({
      message: 'token is required',
    });

  if (!req.body.email) {
    return res.status(400).send({
      message: 'admin email can not be empty',
    });
  }
  if (!req.body.password) {
    return res.status(400).send({
      message: 'password can not be empty',
    });
  }

  try {
    const payload = jwt.verify(req.body.token, process.env.SECRET);
    if (payload.type !== userTypes.BUYER) return res.sendStatus(400);
  } catch (err) {
    return res.status(400).json({
      message: 'Token expired',
    });
  }

  // Create a admin
  const admin = new Admin();

  (admin.Email = req.body.email),
    admin.setPassword(req.body.password),
    // Save admin in the database
    admin
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while creating the admin.',
        });
      });
};

// Retrieve and return all adminss from the database.
exports.findAll = (req, res) => {
  Admin.find()

    .then((admin) => {
      res.send(admin);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving admin.',
      });
    });
};

// Find a single admins with a adminsId
exports.findOne = (req, res) => {
  Admin.findById(req.params.adminsId)
    .then((admin) => {
      if (!admin) {
        return res.status(404).send({
          message: 'admin not found with id ' + req.params.adminsId,
        });
      }
      res.send(admin);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'admin not found with id ' + req.params.adminsId,
        });
      }
      return res.status(500).send({
        message: 'Error retrieving admin with id ' + req.params.adminsId,
      });
    });
};

// Update a admins identified by the adminsId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.email) {
    return res.status(400).send({
      message: 'Email  can not be empty',
    });
  }
  if (!req.body.password) {
    return res.status(400).send({
      message: 'Password can not be empty',
    });
  } else {
  }

  // Find admin and update it with the request body
  Admin.findByIdAndUpdate(
    req.params.adminsId,
    {
      Email: req.body.email,
    },

    { new: true }
  )
    .then((admin) => {
      if (!admin) {
        return res.status(404).send({
          message: 'Admin not found with id ' + req.params.adminsId,
        });
      }
      res.send(admin);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Admin not found with id ' + req.params.adminsId,
        });
      }
      return res.status(500).send({
        message: 'Error updating admin with id ' + req.params.adminsId,
      });
    });
};

// Delete a admins with the specified adminsId in the request
exports.delete = (req, res) => {
  Admin.findByIdAndRemove(req.params.adminsId)
    .then((admin) => {
      if (!admin) {
        return res.status(404).send({
          message: 'Admin not found with id ' + req.params.adminsId,
        });
      }
      res.send({ message: 'Admin deleted successfully!' });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Admin not found with id ' + req.params.adminsId,
        });
      }
      return res.status(500).send({
        message: 'Could not delete admin with id ' + req.params.adminsId,
      });
    });
};

exports.login = (req, res) => {
  Admin.findOne({ email: req.body.email }, function (err, admin) {
    if (admin === null) {
      return res.status(400).send({
        message: 'Admin not found.',
      });
    } else {
      if (admin.validPassword(req.body.password)) {
        const accessToken = jwt.sign(
          { id: admin._id, type: userTypes.ADMIN },
          process.env.SECRET
        );
        return res.status(201).send({
          message: 'Admin Logged In',
          accessToken,
        });
      } else {
        return res.status(400).send({
          message: 'Wrong Password',
        });
      }
    }
  });
};
