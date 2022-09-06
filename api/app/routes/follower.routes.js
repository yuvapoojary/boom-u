module.exports = (app) => {
  const followers = require('../controllers/follower.controller.js')

  // Create a new followers
  app.post('/followers', followers.create)

  // Retrieve all followerss
  app.get('/followers', followers.findAll)

  // Retrieve a single followers with followersId
  app.get('/followers/:followersId', followers.findOne)

  app.get('/MyFollowers/:sellerID', followers.MyFollowers)
  app.get('/IamFollowing/:buyerID', followers.IamFollowing)

  // Update a followers with followersId
  app.put('/followers/:followersId', followers.update)

  // Delete a followers with followersId
  app.delete('/followers/:followersId', followers.delete)
}
