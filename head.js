const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  
};

let head = (array) =>{
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};
  
    
// TEST CODE

assertEqual(head(['a','b']),'a');
assertEqual(head([3,6,7]), 3);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(['a']), 'a');
assertEqual(head([]), undefined);
  