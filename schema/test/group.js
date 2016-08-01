'use strict'

var test = require('tape')
var validator = require('is-my-json-valid')

var groupStub = require('../group-stub')
var validateGroup = require('../').group

test('valid with correct schema', (t) => {
  var isValid = validateGroup(groupStub)

  t.ok(isValid)
  t.false(validateGroup.errors)
  t.end()
})

test('valid with additional inputs', (t) => {
  var additionalInputs = Object.assign({addionalInput: 'hooray'}, groupStub)
  var isValid = validateGroup(additionalInputs)

  t.ok(isValid)
  t.false(validateGroup.errors)
  t.end()
})

test('invalid with missing required::userId', (t) => {
  var invalidData = Object.assign({}, groupStub)
  delete invalidData.userId

  var isInvalid = validateGroup(invalidData)

  t.false(isInvalid)
  t.ok(validateGroup.errors)
  validateGroup.errors.forEach((e) => t.ok(e))

  t.end()
})

test('invalid with missing required::groupId', (t) => {
  var invalidData = Object.assign({}, groupStub)
  delete invalidData.groupId

  var isInvalid = validateGroup(invalidData)

  t.false(isInvalid)
  t.ok(validateGroup.errors)
  validateGroup.errors.forEach((e) => t.ok(e))

  t.end()
})
