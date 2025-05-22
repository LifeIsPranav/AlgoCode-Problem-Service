const express = require('express')
const problemRouter = require('./problems.routes')

const v1Router = express.Router()

// This is from where all routers of v1 are sent.. its like a single
// place where all routes of /api/v1 are present

// Now if we have problems route: /api/v1/problems, route to problemRouter
v1Router.use('/problems', problemRouter) 

module.exports = v1Router