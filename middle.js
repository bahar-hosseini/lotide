const assertArraysEqual = function(arr1,arr2) {
  eqArrays(arr1,arr2) === true  ? console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`) : console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
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



const middle = function(array) {
  let result = [];
  const arrLength = array.length;
  if (arrLength < 3) {
    return result;
  } else if (arrLength % 2 === 0) {
    result.push(array[(arrLength / 2) - 1]);
    result.push(array[arrLength / 2]);
  } else {
    result.push(array[Math.floor(arrLength / 2)]);
  }
  return result;
};
  //TEST CODE
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);

