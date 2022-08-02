//External Modules:
const { expect } = require('chai');


//Internal Modules:
const countOnly = require("../countOnly");


describe("#countOnly", () => {
  it("returns an object", () => {

    const inputOne = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const inputTwo = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

    expect(countOnly(inputOne,inputTwo)).to.be.an('object');
  });
  it("counts number of keys: Jason", () => {

    const inputOne = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const inputTwo = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

    expect(countOnly(inputOne,inputTwo)["Jason"]).to.equal(1);
  });
  it("counts number of keys: Karima", () => {

    const inputOne = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const inputTwo = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

    expect(countOnly(inputOne,inputTwo)["Karima"]).to.equal(undefined);
  });
  it("counts number of keys:Fang", () => {

    const inputOne = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const inputTwo = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

    expect(countOnly(inputOne,inputTwo)["Fang"]).to.equal(2);
  });
  it("counts number of keys:Agouhanna", () => {

    const inputOne = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const inputTwo = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

    expect(countOnly(inputOne,inputTwo)["Agouhanna"]).to.equal(undefined);
  });
  
});