var React = require('react')
var ReactPivot = require('./index.js')

module.exports = function (el, opts) {
  React.render(
    React.createElement(ReactPivot, opts),
    el
  )
}
