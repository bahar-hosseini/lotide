const words = ["ground", "control", "to", "major", "tom"];


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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//TEST CASE :
assertArraysEqual(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word.length > 3), [true,true,false,true,false]);
assertArraysEqual(map(words, word => word[1] === 'r'),[true,false,false,false,false]);

