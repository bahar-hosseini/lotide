//External Modules:
const chai = require('chai');
const assert = chai.assert;

//Internal Modules
const middle = require('../middle');

describe('#middle', function() {
  it(`returns [2,3] for [1,2,3,4]`, function() {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  });
  it(`returns [] for [1]`, function() {
    assert.deepEqual(middle([1]),[]);
  });
  it(`returns [] for []`, function() {
    assert.deepEqual(middle([]),[]);
  });
  it(`returns [] for [1,2]`, function() {
    assert.deepEqual(middle([1,2]),[]);
  });
  it(`returns [2] for [1,2,3]`, function() {
    assert.deepEqual(middle([1,2]),[]);
  });
  it(`returns [3] for [1, 2, 3, 4, 5]`, function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3]);
  });
});