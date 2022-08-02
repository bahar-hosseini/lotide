//External Modules:
const chai = require('chai');
const assert = chai.assert;

//Internal Modules:
const eqObjects = require("../eqObjects");

//Test Code:
describe("#eqObjects", () => {
  it("returns false for comparing ab and ba)", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "2" };
    assert.deepEqual(eqObjects(ab,ba), false);
  });
  it("returns true for comparing cd and dc)", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.deepEqual(eqObjects(cd,dc), true);
  });
});





