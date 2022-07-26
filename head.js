// Load the full build.
let _ = require('lodash');
const assertEqual = function(actual, expected) {

  if (actual === undefined) {
    return console.log(undefined);
  } else if (!expected) {
    return console.log(`❌❌❌Assertion Failed: expected is not defined`);
  } else if (typeof actual !== typeof expected) {
    return  console.log(`❌❌❌Assertion Failed: TypeError `);
  } else if (actual !== expected) {
    return console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    return console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

const head = (array)=>{
  return _.head(array);
};
  
    
// TEST CODE
assertEqual(head([],'s'));
assertEqual(head([3,6,7]), 'hi');
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  