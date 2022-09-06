const Order = require('../models/order.model.js')
const Recommendation = require('../models/recommendation.model.js')
const RazorPay = require('razorpay')
const crypto = require('crypto')

const razorpay = new RazorPay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
})

// Create and Save a new orders
exports.create = async (req, res) => {
  try {
    const data = await Recommendation.findById(req.body.recommendationId)
    if (!data)
      return res.status(400).json({ message: 'recommendation not found' })

    const price =
      req.body.type === 'content' ? data.price : data.DetailedReport.Price
    let sellerCreationDate = new Date(data.SellerCreationDate)

    sellerCreationDate.setDate(sellerCreationDate.getDate() + 30)

    let today = new Date()
    let commission
    if (sellerCreationDate > today) {
      commission = 0.05
    } else {
      commission = 0
    }
    const sellercommission = commission

    const sellerRevenue = sellercommission * price
    const adminRevenue = (1 - sellercommission) * price
    const order = await razorpay.orders.create({
      currency: data.currency,
      amount: price * 100,
    })

    const _order = await Order.create({
      orderId: order.id,
      amount: price,
      seller: data.Seller._id,
      sellerRevenue: sellerRevenue,
      adminRevenue: adminRevenue,
      buyer: req.user._id,
      recommendation: data._id,
      isDetailed: req.body.type === 'content' ? false : true,
      status: 'pending',
    })

    res.json({
      id: _order._id,
      keyId: process.env.RAZORPAY_KEY_ID,
      orderId: order.id,
      recommendationId: data._id,
      seller: data.Seller._id,
      amount: data.Price,
    })
  } catch (err) {
    console.debug(err)
    res.status(500).json(err)
  }
}

exports.insertOrder = async (req, res) => {
  const data = await Order.findById(req.params.id)
  if (!data) return res.sendStatus(400)

  if (data.status !== 'pending') return res.sendStatus(403)

  const body = `${data.orderId}|${req.body.razorpay_payment_id}`
  const signature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest('hex')

  if (req.body.razorpay_signature !== signature)
    return res.status(400).json({ message: 'invalid signature' })

  data.status = 'completed'
  await data.save()
  res.json(data)
}

// Retrieve and return all orderss from the database.
exports.findAll = (req, res) => {
  Order.find({ status: 'completed' })
    .populate('seller')
    .populate('buyer')
    .populate('recommendation')
    .then((order) => {
      res.send(order)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving order.',
      })
    })
}

exports.findByRecommendation = (req, res) => {
  Order.find({
    recommendation: req.params.recommendationId,
    status: 'completed',
  })
    .populate('seller')
    .populate('buyer')
    .populate('recommendation')
    .then((order) => {
      res.send(order)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Orders.',
      })
    })
}

exports.findByDetailed = (req, res) => {
  Order.find({
    seller: req.params.sellerId,
    status: 'completed',
    isDetailed: true,
  })
    .populate('seller')
    .populate('buyer')
    .populate('recommendation')
    .then((order) => {
      res.send(order)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Orders.',
      })
    })
}
exports.findByContent = (req, res) => {
  Order.find({
    seller: req.params.sellerId,
    status: 'completed',
    isDetailed: false,
  })
    .populate('seller')
    .populate('buyer')
    .populate('recommendation')
    .then((order) => {
      res.send(order)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Orders.',
      })
    })
}
exports.findBySeller = (req, res) => {
  Order.find({
    seller: req.params.sellerId,
    status: 'completed',
  })
    .populate('seller')
    .populate('buyer')
    .populate('recommendation')
    .then((order) => {
      res.send(order)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Orders.',
      })
    })
}

exports.findById = (req, res) => {
  Order.findById(req.params.Id)
    .populate('seller')
    .populate('buyer')
    .populate('recommendation')
    .then((order) => {
      res.send(order)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Orders.',
      })
    })
}
exports.findByBuyer = (req, res) => {
  Order.find({ buyer: req.params.buyerId, status: 'completed' })
    .populate('seller')
    .populate('buyer')
    .populate('recommendation')
    .then((order) => {
      res.send(order)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving recommendation.',
      })
    })
}

// Find a single orders with a orderId
exports.findOne = (req, res) => {
  Order.find({ orderId: req.params.orderId, status: 'completed' })
    .populate('seller')
    .populate('buyer')
    .populate('recommendation')
    .then((order) => {
      if (!order) {
        return res.status(404).send({
          message: 'order not found with id ' + req.params.orderId,
        })
      }
      res.send(order)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'order not found with id ' + req.params.orderId,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving order with id ' + req.params.orderId,
      })
    })
}

// Update a orders identified by the orderId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.title) {
    return res.status(400).send({
      message: 'Order Title can not be empty',
    })
  }

  // Find order and update it with the request body
  Order.findByIdAndUpdate(
    req.params.orderId,
    {
      title: req.body.title || 'Untitled Order',
    },
    { new: true }
  )
    .then((order) => {
      if (!order) {
        return res.status(404).send({
          message: 'Order not found with id ' + req.params.orderId,
        })
      }
      res.send(order)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Order not found with id ' + req.params.orderId,
        })
      }
      return res.status(500).send({
        message: 'Error updating order with id ' + req.params.orderId,
      })
    })
}

// Delete a orders with the specified orderId in the request
exports.delete = (req, res) => {
  Order.findByIdAndRemove(req.params.orderId)
    .then((order) => {
      if (!order) {
        return res.status(404).send({
          message: 'Order not found with id ' + req.params.orderId,
        })
      }
      res.send({ message: 'Order deleted successfully!' })
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Order not found with id ' + req.params.orderId,
        })
      }
      return res.status(500).send({
        message: 'Could not delete order with id ' + req.params.orderId,
      })
    })
}
