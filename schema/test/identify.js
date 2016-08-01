'use strict'

var test = require('tape')
var validator = require('is-my-json-valid')

var identifyStub = require('../identify-stub')
var validateIdentify = require('../').identify

test('valid with correct schema', (t) => {
  var isValid = validateIdentify(identifyStub)
  t.ok(isValid)
  t.false(validateIdentify.errors)
  t.end()
})

test('invalid with missing required userId', (t) => {
  var invalidData = Object.assign({}, identifyStub)
  delete invalidData.userId

  var isInvalid = validateIdentify(invalidData)
  t.false(isInvalid)
  t.ok(validateIdentify.errors)
  validateIdentify.errors.forEach((e) => t.ok(e))

  t.end()
})
