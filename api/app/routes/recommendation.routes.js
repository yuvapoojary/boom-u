const upload = require('../middlewares/fileupload.js');

module.exports = (app) => {
  const recommendation = require('../controllers/Recommendation.controller.js');

  // Create a new recommendation
  app.post('/recommendation', upload.single('image'), recommendation.create);

  // Retrieve all recommendations
  app.get('/recommendation', recommendation.findAll);

  // Retrieve a single recommendation with recommendationId
  app.get('/recommendation/:recommendationId', recommendation.findOne);

  app.get('/sellerRecommendations/:sellerId', recommendation.findBySeller);

  // Update a recommendation with recommendationId
  app.put(
    '/recommendation/:recommendationId',
    upload.single('image'),
    recommendation.update
  );

  // Delete a recommendation with recommendationId
  app.delete('/recommendation/:recommendationId', recommendation.delete);
};
