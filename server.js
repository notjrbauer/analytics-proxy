var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var debug = require('debug')('server')

var config = require('./config')
var Schemas = require('./schema')
var RequestFactory = require('./lib/request')

var pyClient = RequestFactory(config.python)
var nodeClient = RequestFactory(config.nodejs)
var rubyClient = RequestFactory(config.ruby)

var app = express()
var PORT = process.argv.PORT || 3000

// Some redis-store with <lang>:<host,etc dict>
var LANG_MAP = {
  python: pyClient,
  nodejs: nodeClient,
  ruby: rubyClient,
  go: 'noop'
}

app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use(function validation (req, res, next) {
  if (req.method === 'POST') {
    req.body = req.body || {}
    if (!req.body.language || !req.body.data) {
      debug('validation::failed', req.body)
      return next(new Error('Missing Language / Data properties'))
    }
  }
  return next()
})

app.post('/identify', function (req, res, next) {
  var isValid = Schemas.identify(req.body.data)
  var client = LANG_MAP[req.body.language]

  if (!isValid) return next(Schemas.identify.errors)

  client.identify({
    body: req.body.data
  })
    .then((response) => res.send(response.body))
    .catch(next)
})

app.post('/track', function (req, res, next) {
  var isValid = Schemas.track(req.body.data)
  var client = LANG_MAP[req.body.language]

  if (!isValid) return next(Schemas.track.errors)

    console.log(req.body.data)
  client.track({
    body: req.body.data
  })
    .then((response) => res.send(response.body))
    .catch(console.log)
})

app.post('/alias', function (req, res, next) {
  var isValid = Schemas.alias(req.body.data)
  var client = LANG_MAP[req.body.language]

  if (!isValid) return next(Schemas.alias.errors)

  client.alias({
    body: req.body.data
  })
    .then((response) => res.send(response.body))
    .catch(next)
})

app.post('/screen', function (req, res, next) {
  var isValid = Schemas.screen(req.body.data)
  var client = LANG_MAP[req.body.language]

    console.log('ISVALID', isValid)
  if (!isValid) return next(Schemas.screen.errors)

    console.log('scema', Schemas.screen)
  return client.screen({
    body: req.body.data
  })
    .then((response) => res.send(response.body))
    .catch(next)
})

app.post('/page', function (req, res, next) {
  var isValid = Schemas.page(req.body.data)
  var client = LANG_MAP[req.body.language]

  if (!isValid) return next(Schemas.page.errors)

  return client.page({
    body: req.body.data
  })
    .then((response) => res.send(response.body))
    .catch(next)
})

app.post('/group', function (req, res, next) {
  var isValid = Schemas.group(req.body.data)
  var client = LANG_MAP[req.body.language]
    console.log(Schemas.group.errors)

  if (!isValid) return next(Schemas.group.errors)

  client.group({
    body: req.body.data
  })
    .then((response) => res.send(response.body))
    .catch(console.log)
})

app.get('/language', function (req, res) {
  return res.send({languages: Object.keys(LANG_MAP)})
})

app.use(function handleError (err, req, res, next) {
  if (err instanceof Error) {
    //res.status(400)
    return res.send(err.message || err)
  }
  debug('handleError::', 'Should not log here')
  return res.send(err)
})

app.start = function start (pre, logger) {
  return new Promise(function (resolve, reject) {
    try {
      app.listen(PORT, function () {
        debug('Start::Now listening on port: ', PORT)
        return resolve(app)
      })
    } catch (e) {
      debug('Start::', e)
      return reject(e)
    }
  })
}

module.exports = app
