//External Modules:
const chai = require('chai');
const assert = chai.assert;

//Internal Modules
const tail = require('../tail');

//TEST CODE:
describe('#tail', function() {
  it(`returns [2,3,4] for [1,2,3,4]`, function() {
    assert.deepEqual(tail([1,2,3,4]),[2,3,4]);
  });
  it(`returns [] for [1]`, function() {
    assert.deepEqual(tail([1]),[]);
  });
  it(`returns [] for []`, function() {
    assert.deepEqual(tail([]),[]);
  });
  it(`returns [ "Lighthouse", "Labs"] for ["Yo Yo","Lighthouse", "Labs"]`, function() {
    assert.deepEqual(tail(["Yo Yo","Lighthouse", "Labs"]),[ "Lighthouse", "Labs"]);
  });
});