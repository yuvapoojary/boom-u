const Seller = require('../models/seller.model.js')
const jwt = require('jsonwebtoken')
const userTypes = require('../../config/userTypes.js')

// Create and Save a new sellers
exports.create = (req, res) => {
  if (!req.body.token)
    return res.status(400).json({
      message: 'token is required',
    })

  if (!req.body.name) {
    return res.status(400).send({
      message: 'seller name can not be empty',
    })
  }
  let payload
  try {
    payload = jwt.verify(req.body.token, process.env.SECRET)
    if (payload.type !== userTypes.SELLER) return res.sendStatus(400)
  } catch (err) {
    return res.status(400).json({
      message: 'Token expired',
    })
  }
  // Create a seller
  const seller = new Seller()

  ;(seller.Name = req.body.name),
    (seller.Username = req.body.name),
    (seller.Email = payload.email),
    seller.setPassword(req.body.password),
    (seller.Country = req.body.country),
    (seller.whatRecommend = req.body.whatRecommends),
    (seller.Type = req.body.type),
    (seller.RegID = req.body.RegID || null),
    (seller.About = req.body.about),
    (seller.isActive = false),
    // Save seller in the database
    seller
      .save()
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while creating the seller.',
        })
      })
}

// Retrieve and return all sellerss from the database.
exports.findAll = (req, res) => {
  Seller.find()
    .populate('Type')
    .then((seller) => {
      res.send(seller)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving seller.',
      })
    })
}

// Find a single sellers with a sellersId
exports.findOne = (req, res) => {
  Seller.findById(req.params.sellersId)
    .then((seller) => {
      if (!seller) {
        return res.status(404).send({
          message: 'seller not found with id ' + req.params.sellersId,
        })
      }
      res.send(seller)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'seller not found with id ' + req.params.sellersId,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving seller with id ' + req.params.sellersId,
      })
    })
}

// Update a sellers identified by the sellersId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.name) {
    return res.status(400).send({
      message: 'Seller Title can not be empty',
    })
  }

  // Find seller and update it with the request body
  Seller.findByIdAndUpdate(
    req.params.sellersId,
    {
      Name: req.body.name,
      Username: req.body.name,
      About: req.body.About,
      whatRecommend: req.body.whatRecommend,
      Type: req.body.Type,
      Country: req.body.country,
      RegID: req.body.RegID,
    },
    { new: true }
  )
    .then((seller) => {
      if (!seller) {
        return res.status(404).send({
          message: 'Seller not found with id ' + req.params.sellersId,
        })
      }
      res.send(seller)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Seller not found with id ' + req.params.sellersId,
        })
      }
      return res.status(500).send({
        message: 'Error updating seller with id ' + req.params.sellersId,
      })
    })
}

// Delete a sellers with the specified sellersId in the request
exports.delete = (req, res) => {
  Seller.findByIdAndRemove(req.params.sellersId)
    .then((seller) => {
      if (!seller) {
        return res.status(404).send({
          message: 'Seller not found with id ' + req.params.sellersId,
        })
      }
      res.send({ message: 'Seller deleted successfully!' })
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Seller not found with id ' + req.params.sellersId,
        })
      }
      return res.status(500).send({
        message: 'Could not delete seller with id ' + req.params.sellersId,
      })
    })
}

exports.login = (req, res) => {
  Seller.findOne({ Email: req.body.email }, function (err, seller) {
    if (seller === null) {
      return res.status(404).send({
        message: 'Seller not found.',
      })
    } else {
      // if (seller.hash == req.body.password) {
      if (seller.validPassword(req.body.password)) {
        const accessToken = jwt.sign(
          { id: seller._id, type: userTypes.SELLER },
          process.env.SECRET
        )
        return res.status(201).send({
          message: 'Seller Logged In',
          ...seller,
          accessToken,
        })
      } else {
        return res.status(400).send({
          message: 'Wrong Password',
        })
      }
    }
  })
}

exports.getCurrentSellers = async (req, res) => {
  res.json(req.user)
}
