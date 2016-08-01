'use strict'

var test = require('tape')
var validator = require('is-my-json-valid')

var pageStub = require('../page-stub')
var validatePage = require('../').page

test('valid with correct schema', (t) => {
  var isValid = validatePage(pageStub)

  t.ok(isValid)
  t.false(validatePage.errors)
  t.end()
})

test('valid with additional inputs', (t) => {
  var additionalInputs = Object.assign({addionalInput: 'hooray'}, pageStub)
  var isValid = validatePage(additionalInputs)

  t.ok(isValid)
  t.false(validatePage.errors)
  t.end()
})

test('invalid with missing required::userId', (t) => {
  var invalidData = Object.assign({}, pageStub)
  delete invalidData.userId

  var isInvalid = validatePage(invalidData)

  t.false(isInvalid)
  t.ok(validatePage.errors)
  validatePage.errors.forEach((e) => t.ok(e))

  t.end()
})
