const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  
};

const findKeyByValue = (obj,value) =>{
  let result = undefined;
  let keys = Object.keys(obj);

  for (let i of keys) {
    if (obj[i] === value) {
      result = obj[i];
    }
  }
  return result;
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "The Wire");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "Brooklyn Nine-Nine");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
