const Category = require('../models/categories.model.js')

// Create and Save a new categories
exports.create = (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      message: 'category title can not be empty',
    })
  }

  // Create a category
  const category = new Category({
    title: req.body.title || 'Untitled category',
  })

  // Save category in the database
  category
    .save()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the category.',
      })
    })
}

// Retrieve and return all categoriess from the database.
exports.findAll = (req, res) => {
  Category.find()
    .then((category) => {
      res.send(category)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving category.',
      })
    })
}

// Find a single categories with a categoriesId
exports.findOne = (req, res) => {
  Category.findById(req.params.categoriesId)
    .then((category) => {
      if (!category) {
        return res.status(404).send({
          message: 'category not found with id ' + req.params.categoriesId,
        })
      }
      res.send(category)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'category not found with id ' + req.params.categoriesId,
        })
      }
      return res.status(500).send({
        message: 'Error retrieving category with id ' + req.params.categoriesId,
      })
    })
}

// Update a categories identified by the categoriesId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.title) {
    return res.status(400).send({
      message: 'Category Title can not be empty',
    })
  }

  // Find category and update it with the request body
  Category.findByIdAndUpdate(
    req.params.categoriesId,
    {
      title: req.body.title || 'Untitled Category',
    },
    { new: true }
  )
    .then((category) => {
      if (!category) {
        return res.status(404).send({
          message: 'Category not found with id ' + req.params.categoriesId,
        })
      }
      res.send(category)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Category not found with id ' + req.params.categoriesId,
        })
      }
      return res.status(500).send({
        message: 'Error updating category with id ' + req.params.categoriesId,
      })
    })
}

// Delete a categories with the specified categoriesId in the request
exports.delete = (req, res) => {
  Category.findByIdAndRemove(req.params.categoriesId)
    .then((category) => {
      if (!category) {
        return res.status(404).send({
          message: 'Category not found with id ' + req.params.categoriesId,
        })
      }
      res.send({ message: 'Category deleted successfully!' })
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Category not found with id ' + req.params.categoriesId,
        })
      }
      return res.status(500).send({
        message: 'Could not delete category with id ' + req.params.categoriesId,
      })
    })
}
