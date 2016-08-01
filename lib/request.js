'use strict'

var got = require('got')
var urljoin = require('url-join')
var partial = require('ap').partial
var assign = require('xtend/mutable')

var debug = require('debug')('request')

module.exports = function RequestFactory (config) {
  var port = config.port
  var host = config.host
  if (port) host += ':' + port

  var protocol = config.secure ? 'https:' : 'http:'

  // partial protocol and host so we can just accept the path
  var formatUrl = partial(urljoin, protocol, host)

  // wrap request client's post method with some default meta
  // eg: headers, logging
  var post = wrap(got.post)

  /*
   * Returns request api with pre-baked service discovery
   *
   * @return {Object} The request api
   * @library
   */

  return assign({
    page: partial(post, '/page'),
    track: partial(post, '/track'),
    alias: partial(post, '/alias'),
    group: partial(post, '/group'),
    identify: partial(post, '/identify'),
    screen: partial(post, '/screen')
  }, config)

  /*
   * Returns a composable function for path and options
   *
   * @return {Function}
   * @private
   */

  function wrap (client) {
    return function (path, options) {
      var body = options.body

      if (!body) {
        return Promise.reject('must pass options.body')
      }

      debug('Wrap', path, body)
      delete options.body

      try {
        body = JSON.stringify(body)
      } catch (e) {
        debug('Wrap - JSON Error', e, body)
        return Promise.reject(e)
      }

      var url = formatUrl(path)
      var defaults = {
        body: body,
        headers: {
          'Content-Type': 'application/json'
        }
      }

      var metaData = assign(defaults, options)
      return client(url, metaData)
        .then((d) => { debug(d); return d;})
    }
  }
}
