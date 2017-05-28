var express = require('express')
var uuid = require('node-uuid')
var bodyParser = require('body-parser')
var callData = require('./call-data')

var token = uuid.v4()
var app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-TOKEN')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
  next()
})
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/authenticate', function (req, res) {
  var body = req.body
  if (body.email === 'user@example.com' && body.password === 'doggo') {
    res.json({ token: token })
  } else {
    res.status(401).json({ error: 'invalid credentials' })
  }
})

app.get('/calls', function (req, res, next) {
  if (req.get('X-TOKEN') === token) {
    res.json({ calls: callData })
  } else {
    res.status(401).json({ error: 'unauthorized' })
  }
})

app.listen(3000, function () {
  console.log('server listening on port 3000!')
})
