const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  eqObjects(actual, expected) ? console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};


const eqArrays = function(arr1,arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = assertObjectsEqual;

const eqObjects = function(object1, object2) {
  let keyObj1 = Object.keys(object1);
  let keyObj2 = Object.keys(object2);

  if (keyObj1.length !== keyObj2.length) {
    return false;
  }
  for (let key of keyObj1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


// Test code:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "2" };
assertObjectsEqual(ab, ba);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);