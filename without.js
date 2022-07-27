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
  } else {
    return arr1.every((e,i)=> e === arr2[i]);
  }
};

const without = (arr, rmArr)=>{
  let i = 0;
  while (i < arr.length) {
    for (let j of rmArr) {
      if (arr[i] === j) {
        arr.splice(i, 1);
      } else {
        i++;
      }
    }
  }
  return arr;
};
console.log(without([1, 2, 3], [1]));
console.log(without([1, 2, 3], [1,2]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words, ["hello", "world"]);
assertArraysEqual([], []);

