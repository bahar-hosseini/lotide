const assertArraysEqual = function(arr1,arr2) {
  eqArrays(arr1,arr2) === true  ? console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`) : console.log(`❌❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  };

const eqArrays = function (arr1,arr2) {
  if (!arr1 || !arr2) {
    return false;
  } else if (arr1.length !== arr2.length) {
    return false;
  } else {
    return arr1.every((e,i)=> e === arr2[i]);
  }
};


assertArraysEqual([1, 2, 3], [1, 2, 3,]);
assertArraysEqual(([1, 2, 3], [3,2,1]));
assertArraysEqual(([1, 2, 3], [1, 2, '3']));
assertArraysEqual(([1, 2, 3], [1, 2, 3, 4]));
assertArraysEqual(('test', 'str'));
