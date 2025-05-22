const bodyParser = require('body-parser')
const express = require('express')
const { PORT } = require('./config/server.config')

const app = new express()

app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/ping', (req, res) => {
  res.json({
    msg: "Problem Service is Alive"
  })
})

app.listen(PORT, () => {
  console.log(`Server started at: ${PORT}`)
}) 