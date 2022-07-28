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





// Mike Niuwithout(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
// 3:59 PMMike Niucreate indexes = [];
// 4:00 PMMike Niuif remove element matches our array element, then indexes[index] = true;
// 4:01 PMMike Niuindexes.push(matched_index)
// 4:02 PMMike Niuvar return = [];
// 4:02 PMMike Niulet return = [];
// 4:02 PMMike Niu2nd loop on original array
// 4:03 PMMike Niuindexes we don't want
// 4:03 PMYou['1']=['1]
// 4:11 PMMike Niu['1'] === ['1']

