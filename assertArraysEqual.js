const assertArraysEqual = function(actual,expected) {
  eqArrays(actual,expected) === true  ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
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


assertArraysEqual([1, 2, 3], [1, 2, 3,]);
assertArraysEqual([1, 2, 3], [3,2,1]);
assertArraysEqual([1, 2, 3], [1, 2, '3']);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);

