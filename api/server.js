require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const dbConfig = require('./config/database.config')
const mongoose = require('mongoose')
const cors = require('cors')

// create express app
const app = express()
const port = process.env.PORT || 6400

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.Promise = global.Promise
app.use(cors())
// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
  res.json({
    message:
      'Welcome to Boominance application. Get Best Recommendations on stocks',
  })
})
require('./app/routes/categories.routes.js')(app)
require('./app/routes/subcategories.routes.js')(app)
require('./app/routes/buyer.routes.js')(app)
require('./app/routes/sellers.routes.js')(app)
require('./app/routes/recommendation.routes.js')(app)
require('./app/routes/transaction.routes.js')(app)
require('./app/routes/order.routes.js')(app)
require('./app/routes/admin.routes.js')(app)
require('./app/routes/follower.routes.js')(app)
require('./app/routes/auth.routes.js')(app)
require('./app/routes/review.routes.js')(app)
require('./app/routes/rate.routes.js')(app)
require('./app/routes/portfolio.routes.js')(app)
require('./app/routes/holding.routes.js')(app)
require('./app/routes/SellerAccount.routes.js')(app)
require('./app/routes/help.routes.js')(app)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Successfully connected to the database')
  })
  .catch((err) => {
    console.log('Could not connect to the database. Exiting now...', err)
    process.exit()
  })
