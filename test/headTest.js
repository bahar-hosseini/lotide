// External Modules:
const assert = require('chai').assert;

//Internal Modules:
const head = require("../head");


//TEST CODE:

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  it("returns 'a' for ['a','b']", () => {
    assert.strictEqual(head(['a','b']), 'a');
  });
  it("returns '3' for [3,5,7]", () => {
    assert.strictEqual(head(['a','b']), 'a');
  });
  it("returns 'a' for ['a','b']", () => {
    assert.strictEqual(head(['a','b']), 'a');
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  it(`returns "Hello" for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  });

});



  