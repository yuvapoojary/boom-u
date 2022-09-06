const Help = require('../models/help.model.js')

// Create and Save a new helps
exports.create = (req, res) => {
  if (!req.body.subject) {
    return res.status(400).send({
      message: 'help subject can not be empty',
    })
  }
  if (!req.body.message) {
    return res.status(400).send({
      message: 'message can not be empty',
    })
  }

  // Create a help
  const help = new Help()

  ;(help.subject = req.body.subject),
    (help.message = req.body.message),
    (help.requestedBy = req.body.requestedBy),
    (help.status = 'Open'),
    // Save help in the database
    help
      .save()
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while creating the help.',
        })
      })
}

// Retrieve and return all helpss from the database.
exports.findAll = (req, res) => {
  Help.find()
    .populate('requestedBy')
    .then((help) => {
      res.send(help)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving help.',
      })
    })
}

// Find a single helps with a helpId
exports.findOne = (req, res) => {
  Help.findById(req.params.helpId)
    .then((help) => {
      if (!help) {
        return res.status(404).send({
          message: 'help not found with id ' + req.params.helpId,
        })
      }
      res.send(help)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'help not found with id ' + req.params.helpId,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving help with id ' + req.params.helpId,
      })
    })
}

// Update a helps identified by the helpId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.status) {
    return res.status(400).send({
      message: 't  can not be empty',
    })
  } else {
  }

  // Find help and update it with the request body
  Help.findByIdAndUpdate(
    req.params.helpId,
    {
      status: req.body.status,
    },

    { new: true }
  )
    .then((help) => {
      if (!help) {
        return res.status(404).send({
          message: 'Help not found with id ' + req.params.helpId,
        })
      }
      res.send(help)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Help not found with id ' + req.params.helpId,
        })
      }
      return res.status(500).send({
        message: 'Error updating help with id ' + req.params.helpId,
      })
    })
}

// Delete a helps with the specified helpId in the request
exports.delete = (req, res) => {
  Help.findByIdAndRemove(req.params.helpId)
    .then((help) => {
      if (!help) {
        return res.status(404).send({
          message: 'Help not found with id ' + req.params.helpId,
        })
      }
      res.send({ message: 'Help deleted successfully!' })
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Help not found with id ' + req.params.helpId,
        })
      }
      return res.status(500).send({
        message: 'Could not delete help with id ' + req.params.helpId,
      })
    })
}

exports.login = (req, res) => {
  Help.findOne({ email: req.body.email }, function (err, help) {
    if (help === null) {
      return res.status(400).send({
        message: 'Help not found.',
      })
    } else {
      if (help.validPassword(req.body.password)) {
        return res.status(201).send({
          message: 'Help Logged In',
        })
      } else {
        return res.status(400).send({
          message: 'Wrong Password',
        })
      }
    }
  })
}
