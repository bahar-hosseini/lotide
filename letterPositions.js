const assertArraysEqual = function(arr1,arr2) {
  eqArrays(arr1,arr2) === true  ? console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`) : console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
};

const eqArrays = function(arr1,arr2) {
  if (!arr1 || !arr2) {
    return false;
  } else if (arr1.length !== arr2.length) {
    return false;
  } else if (arr1.length === 0 || arr2.length === 0) {
    return false;
  }
  return true;
};



const letterPositions = function(sentence) {
  const obj = {...sentence};
  const revObj = {};

  Object.keys(obj).forEach((key)=> {
    revObj[obj[key]] = key;
  });
  return revObj;
  
};

//TEST CODE

assertArraysEqual(letterPositions("hello").e, [1]);