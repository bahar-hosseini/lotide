//External Modules:
const inspect = require('util').inspect;

//Internal Modules:
const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  console.log(`Example label: ${inspect(actual)}`);
  eqObjects(actual, expected) ? console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;