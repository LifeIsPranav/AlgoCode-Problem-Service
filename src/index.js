const bodyParser = require('body-parser')
const express = require('express')

const { PORT } = require('./config/server.config')
const apiRouter = require('./routes')

const app = new express()

app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: true }))

// If any request comes which starts with /api, we map it to api Router
app.use('/api', apiRouter)

app.get('/ping', (req, res) => {
  res.json({
    msg: "Problem Service is Alive"
  })
})


app.listen(PORT, () => {
  console.log(`Server started at: ${PORT}`)
}) 