const SubCategory = require('../models/subcategories.model.js')
const Category = require('../models/categories.model')
// Create and Save a new subcategories
exports.create = (req, res) => {
  if (!req.body.sub_category) {
    return res.status(400).send({
      message: 'subcategory title can not be empty',
    })
  }
  if (!req.body.category_id) {
    return res.status(400).send({
      message: 'SubCategory can not be empty',
    })
  }

  // Create a subcategory
  const subcategory = new SubCategory({
    sub_category: req.body.sub_category || 'Untitled subcategory',
    category_id: req.body.category_id,
  })

  // Save subcategory in the database
  subcategory
    .save()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the subcategory.',
      })
    })
}

// Retrieve and return all subcategoriess from the database.
exports.findAll = (req, res) => {
  SubCategory.find()
    .populate('category_id')
    .then((subcategory) => {
      res.send(subcategory)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving subcategory.',
      })
    })
}

// Find a single subcategories with a subcategoriesId
exports.findOne = (req, res) => {
  SubCategory.findById(req.params.subcategoriesId)
    .populate('category_id')
    .then((subcategory) => {
      if (!subcategory) {
        return res.status(404).send({
          message:
            'subcategory not found with id ' + req.params.subcategoriesId,
        })
      }
      res.send(subcategory)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message:
            'subcategory not found with id ' + req.params.subcategoriesId,
        })
      }
      return res.status(500).send({
        message:
          'Error retrieving subcategory with id ' + req.params.subcategoriesId,
      })
    })
}

// Update a subcategories identified by the subcategoriesId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body.sub_category) {
    return res.status(400).send({
      message: 'subcategory title can not be empty',
    })
  }
  if (!req.body.category_id) {
    return res.status(400).send({
      message: 'SubCategory can not be empty',
    })
  }

  // Find subcategory and update it with the request body
  SubCategory.findByIdAndUpdate(
    req.params.subcategoriesId,
    {
      sub_category: req.body.sub_category || 'Untitled SubCategory',
      category_id: req.body.category_id,
    },
    { new: true }
  )
    .then((subcategory) => {
      if (!subcategory) {
        return res.status(404).send({
          message:
            'SubCategory not found with id ' + req.params.subcategoriesId,
        })
      }
      res.send(subcategory)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message:
            'SubCategory not found with id ' + req.params.subcategoriesId,
        })
      }
      return res.status(500).send({
        message:
          'Error updating subcategory with id ' + req.params.subcategoriesId,
      })
    })
}
exports.findByCategory = (req, res) => {
  SubCategory.find({ category_id: req.params.categoryID })
    .populate('category_id')
    .then((subcategories) => {
      res.send(subcategories)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving sub categories.',
      })
    })
}
// Delete a subcategories with the specified subcategoriesId in the request
exports.delete = (req, res) => {
  SubCategory.findByIdAndRemove(req.params.subcategoriesId)
    .then((subcategory) => {
      if (!subcategory) {
        return res.status(404).send({
          message:
            'SubCategory not found with id ' + req.params.subcategoriesId,
        })
      }
      res.send({ message: 'SubCategory deleted successfully!' })
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message:
            'SubCategory not found with id ' + req.params.subcategoriesId,
        })
      }
      return res.status(500).send({
        message:
          'Could not delete subcategory with id ' + req.params.subcategoriesId,
      })
    })
}
