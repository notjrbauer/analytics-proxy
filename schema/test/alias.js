'use strict'

var test = require('tape')
var validator = require('is-my-json-valid')

var aliasStub = require('../alias-stub')
var validateAlias = require('../').alias

test('valid with correct schema', (t) => {
  var isValid = validateAlias(aliasStub)

  t.ok(isValid)
  t.false(validateAlias.errors)
  t.end()
})

test('valid with additional inputs', (t) => {
  var additionalInputs = Object.assign({addionalInput: 'hooray'}, aliasStub)
  var isValid = validateAlias(additionalInputs)

  t.ok(isValid)
  t.false(validateAlias.errors)
  t.end()
})

test('invalid with missing required::userId', (t) => {
  var invalidData = Object.assign({}, aliasStub)
  delete invalidData.userId

  var isInvalid = validateAlias(invalidData)

  t.false(isInvalid)
  t.ok(validateAlias.errors)
  validateAlias.errors.forEach((e) => t.ok(e))

  t.end()
})

test('invalid with missing required::previousId', (t) => {
  var invalidData = Object.assign({}, aliasStub)
  delete invalidData.previousId

  var isInvalid = validateAlias(invalidData)

  t.false(isInvalid)
  t.ok(validateAlias.errors)
  validateAlias.errors.forEach((e) => t.ok(e))

  t.end()
})
