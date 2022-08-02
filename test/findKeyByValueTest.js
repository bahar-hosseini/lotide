//External Modules:
const chai = require('chai');
const assert = chai.assert;


//Internal Modules:
const findKeyByValue = require("../findKeyByValue");

//TEST CODE:
describe("#findKeyByValue", () => {
  it(`returns "drama" for "The Wire"`, () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre,'The Wire'),'drama');

  });
  it(`returns "drama" for "The Wire"`, () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre,'The Wire'),'drama');

  });
  it(`returns "comedy" for "Brooklyn Nine-Nine"`, () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre,'Brooklyn Nine-Nine'),'comedy');

  });
  it(`returns undefined for "That '70s Show"`, () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre,`That '70s Show`),undefined);

  });
  
});
