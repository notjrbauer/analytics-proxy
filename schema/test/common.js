'use strict'

var test = require('tape')
var validator = require('is-my-json-valid')

var common = require('../common')
var commonStub = require('../common-stub')

test('Common Attributes', (t) => {
  var validate = validator(common)
  var isValid = validate(commonStub)
  t.ok(isValid)
  t.end()
})
