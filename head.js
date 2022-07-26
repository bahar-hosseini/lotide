// Load the full build.
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
let head = (array) =>{
  return array[0];
};
  
    
// TEST CODE
assertEqual(head([]),'s');
assertEqual(head(['a','b']),'s');
assertEqual(head([3,6,7]), 'hi');
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(['a']), 'a');
assertEqual(head([]), undefined);
  