const assertArraysEqual = function(arr1,arr2) {
  eqArrays(arr1,arr2) === true  ? console.log(`✅✅✅Assertion Passed`) : console.log(`❌❌❌Assertion Failed`);
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


