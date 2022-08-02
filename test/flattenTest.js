//External Modules:
const chai = require('chai');
const assert = chai.assert;

//Internal Modules:
const flatten = require("../flatten");


describe("#flatten", () => {
  it("returns [1,2,7,3] for [1, [2],[7,3]]", () => {
    assert.deepEqual(flatten([1,[2],[7,3]]), [1,2,7,3]);
  });
});
