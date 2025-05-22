const express = require('express')
const v1Router = require('./v1')

const apiRouter = express.Router()

// after API, if the url Contains v1, route it to v1Router
apiRouter.use('/v1', v1Router) 


module.exports = apiRouter