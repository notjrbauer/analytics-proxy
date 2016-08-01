'use strict'

var test = require('tape')
var validator = require('is-my-json-valid')

var trackStub = require('../track-stub')
var validateIdentify = require('../').track

test('valid with correct schema', (t) => {
  var isValid = validateIdentify(trackStub)
  t.ok(isValid)
  t.false(validateIdentify.errors)
  t.end()
})

test('invalid with missing required::userId', (t) => {
  var invalidData = Object.assign({}, trackStub)
  delete invalidData.userId

  var isInvalid = validateIdentify(invalidData)
  t.false(isInvalid)
  t.ok(validateIdentify.errors)
  validateIdentify.errors.forEach((e) => t.ok(e))

  t.end()
})

test('invalid with missing required::event', (t) => {
  var invalidData = Object.assign({}, trackStub)
  delete invalidData.userId

  var isInvalid = validateIdentify(invalidData)
  t.false(isInvalid)
  t.ok(validateIdentify.errors)
  validateIdentify.errors.forEach((e) => t.ok(e))

  t.end()
})
