'use strict'

var test = require('tape')
var validator = require('is-my-json-valid')

var screenStub = require('../page-stub')
var validateScreen = require('../').screen

test('valid with correct schema', (t) => {
  var isValid = validateScreen(screenStub)

  t.ok(isValid)
  t.false(validateScreen.errors)
  t.end()
})

test('valid with additional inputs', (t) => {
  var additionalInputs = Object.assign({addionalInput: 'hooray'}, screenStub)
  var isValid = validateScreen(additionalInputs)

  t.ok(isValid)
  t.false(validateScreen.errors)
  t.end()
})
