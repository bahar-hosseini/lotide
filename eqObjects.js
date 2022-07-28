const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  
};

const eqArrays = function(arr1,arr2) {
  if (!arr1 || !arr2) {
    return false;
  } else if (Array.isArray(arr1) !== Array.isArray(arr2)) {
    return false;
  } else if (arr1.length !== arr2.length) {
    return false;

  } else if (arr1.length === 0 || arr2.length === 0) {
    return false;
  } else {
    return arr1.every((e,i)=> e === arr2[i]);
  }
};

const eqObjects = function(object1, object2) {
  let keyObj1 = Object.keys(object1);
  let keyObj2 = Object.keys(object2);
  
  if (keyObj1.length !== keyObj2.length) {
    return false;
  }
  for (let key of keyObj1) {
    if (object1[key] === object2[key]) {
      return true;
    }
    return false;
  }
};

// Test code:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "2" };
assertEqual(eqObjects(ab, ba),false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);