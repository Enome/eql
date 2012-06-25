var difflet = require('difflet');
var assert = require('assert');

var compare = function (first, second) {

  var diff = difflet({ indent : 2});
  return diff.compare(first, second);

};

module.exports = function (first, second) {

  var util = require('util');
  var difflet = require('difflet');
  var diff = difflet({ indent : 2});
  var dff = diff.compare(first, second);

  var compare = '\n\u001b[0m'
                 + '\n\nResult:   ' + JSON.stringify(second, false, null)
                 + '\nExpected: ' + JSON.stringify(first, false, null)
                 + '\nDiff: \n' + dff;

  assert.deepEqual(first, second, compare);

};
