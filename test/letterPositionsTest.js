//External Modules:
const chai = require('chai');
const assert = chai.assert;

//Internal Modules:
const letterPositions = require("../letterPositions");


describe("#letterPositions", () => {
  it(`returns [1] for "hello"`, () => {
    assert.equal(letterPositions("hello").e,[1]);
  });
});