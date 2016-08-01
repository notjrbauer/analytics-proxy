'use strict'

var validator = require('is-my-json-valid')

var identify = require('./identify')
var common = require('./common')
var traits = require('./traits')
var screen = require('./screen')
var group = require('./group')
var track = require('./track')
var alias = require('./alias')
var page = require('./page')

var dependencies = {
  common: common,
  traits: traits
}

exports.identify = validator(identify, {
  schemas: dependencies.common,
  verbose: true
})

exports.track = validator(track, {
  schemas: dependencies.common,
  verbose: true
})

exports.alias = validator(alias, {
  schemas: dependencies.common,
  verbose: true
})

exports.page = validator(page, {
  schemas: dependencies.common,
  verbose: true
})

exports.screen = validator(screen, {
  schemas: dependencies.common,
  verbose: true
})

exports.group = validator(group, {
  schemas: dependencies,
  verbose: true
})

