var objectToArray = require('../internals/object-to-array');

// `Object.values` method
// https://tc39.github.io/ecma262/#sec-object.values
require('../internals/export')({ target: 'Object', stat: true }, {
  values: function values(O) {
    return objectToArray(O);
  }
});
