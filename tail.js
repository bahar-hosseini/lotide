const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};
  
  
  
// TEST CODE
const tail = (array)=>{

  let tailOfArray = array.slice(1);
   
  return tailOfArray;
};
  

const words = ["Yo Yo", "Lighthouse", "Labs"];
let emptyArray = [];
let oneElement = ['a'];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words).length, 2);
assertEqual(tail(words).length, 2);
assertEqual(tail(emptyArray).length,emptyArray.length);
assertEqual(tail(oneElement).length,oneElement.length - 1);
