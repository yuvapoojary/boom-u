module.exports = (app) => {
  const review = require('../controllers/postReview.controller.js')

  // Create a new review
  app.post('/review', review.create)

  // Retrieve all reviews
  app.get('/review', review.findAll)

  // Retrieve a single review with reviewId
  app.get('/review/:reviewId', review.findOne)

  // Retrieve a single review with reviewId
  app.get('/Recommendationreview/:recommendationId', review.findAccepted)

  app.get('/RecommendationreviewforSeller/:sellerId', review.findBySeller)

  // Update a review with reviewId
  app.put('/review/:reviewId', review.update)

  // Delete a review with reviewId
  app.delete('/review/:reviewId', review.delete)
}
