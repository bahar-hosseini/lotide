//External Modules:
const chai = require('chai');
const assert = chai.assert;

//Internal Modules
const eqArrays = require('../eqArrays');


//TEST CODE:
describe('#eqArray', function() {
  it(`returns true for [1,2,3] and [1,2,3]`, function() {
    assert.deepEqual(eqArrays([1,2,3],[1,2,3]),true);
  });
  it(`returns true for [1,2,3] and [1,2,3,4]`, function() {
    assert.deepEqual(eqArrays([1,2,3],[1,2,3,4]),false);
  });
  it(`returns false for [1,2,3] and [1,2,'3']`, function() {
    assert.deepEqual(eqArrays([1,2,'3'],[1,2,3]),false);
  });
  it(`returns true for ["Hello","World] and ["hello","world"]`, function() {
    assert.deepEqual(eqArrays(["Hello","World"],["hello","world"]),false);
  });

});
